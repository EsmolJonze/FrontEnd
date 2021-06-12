import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import {
  ALLOCATE_QC_TASK_LOAD_ASSIGNEES_AGG_MR_SUCCESS,
  ALLOCATE_QC_TASK_LOAD_ASSIGNEES_AGG_STATUS_SUCCESS,
  ALLOCATE_QC_TASK_LOAD_ASSIGNEES_SUCCESS,
} from '../../../../../../../actions/dictionary';
import { Assignee } from './Assignee';
import { SubTitle } from '../../../../../../../components/titles';
import { withStyles } from '@material-ui/core';
import { ServiceApi } from '../../../../../../../misc/api/service';
import { BobjectApi } from '../../../../../../../misc/api/bobject';
import { useEntity } from '../../../../../../../hooks/entities/useEntity';

const style = {
  assigneeList: {
    width: '212px',
    marginRight: '20px',
    overflowY: 'scroll',
    height: 'calc(100vh - 267px)',
  },
};
const wrap = ({ classes, children }) => (
  <div className={classes.assigneeList}>
    <SubTitle text="TEAM" />
    {children}
  </div>
);

const useData = (dispatch, requiresLoading, assigneesAllStatus) =>
  React.useEffect(() => {
    if (requiresLoading && assigneesAllStatus?.length > 0) {
      ServiceApi.request({
        url: '/service/view/userSearch',
        requestParams: { taskLogicRole: 'ADD_LEADS_TO_QC' },
      }).then(payload => dispatch({ type: ALLOCATE_QC_TASK_LOAD_ASSIGNEES_SUCCESS, payload }));
      BobjectApi.request()
        .Company()
        .aggregation({
          formFields: true,
          aggregations: ['COMPANY__ASSIGNED_TO', 'COMPANY__MR_RATING'],
        })
        .then(payload =>
          dispatch({
            type: ALLOCATE_QC_TASK_LOAD_ASSIGNEES_AGG_MR_SUCCESS,
            payload: payload.contents,
          }),
        );
      BobjectApi.request()
        .Company()
        .aggregation({
          formFields: true,
          aggregations: ['COMPANY__ASSIGNED_TO', 'COMPANY__STATUS'],
        })
        .then(payload =>
          dispatch({
            type: ALLOCATE_QC_TASK_LOAD_ASSIGNEES_AGG_STATUS_SUCCESS,
            payload: payload.contents,
          }),
        );
    }
  }, [dispatch, requiresLoading, assigneesAllStatus]);
const discardedStatus = ['CLIENT', 'ACCOUNT', 'NURTURING', 'NEW', 'BACKLOG', 'DISCARDED'];
const Index = ({
  classes,
  assignees,
  assignedByAssignee,
  requiresLoading,
  isLoading,
  dispatch,
}) => {
  const assigneesAllStatus = useEntity('bobjectPicklistFieldValues')
    ?.all()
    .filter(v => v.logicRole?.includes('COMPANY__STATUS'))
    .filter(v => !discardedStatus.some(str => v.logicRole.endsWith(str)))
    .map(v => ({ field: v }));

  if (assigneesAllStatus && assignedByAssignee) {
    assigneesAllStatus.sort((a, b) => a.field.ordering - b.field.ordering);
  }
  useData(dispatch, requiresLoading, assigneesAllStatus);
  if (isLoading || !assigneesAllStatus) {
    return wrap({ classes, children: <CircularProgress /> });
  }
  if (assignees.length === 0) {
    return wrap({ classes, children: <span> There are no assignees </span> });
  }
  return wrap({
    classes,
    children: assignees.map((assignee, index) => (
      <Assignee
        key={`assignee-${assignee.id}`}
        assigneesAllStatus={assigneesAllStatus}
        assignee={assignee}
        newAssignedCount={assignedByAssignee[assignee.id]}
        index={index}
      />
    )),
  });
};

const mapStateToProps = state => {
  const assignees = state.taskWorkspace.board.allocateQcTask.assignees;
  const mrRatingsAgg = state.taskWorkspace.board.allocateQcTask.assigneesAggregateMrRating;
  const statusAgg = state.taskWorkspace.board.allocateQcTask.assigneesAggregateStatus;
  return {
    assignees: state.taskWorkspace.board.allocateQcTask.assignees,
    readyToLoad: state.taskWorkspace.board.allocateQcTask.readyToLoad,
    assignedByAssignee: state.taskWorkspace.board.allocateQcTask.assignedByAssignee,
    requiresLoading:
      mrRatingsAgg === undefined && assignees === undefined && statusAgg === undefined,
    isLoading: mrRatingsAgg === undefined || assignees === undefined || statusAgg === undefined,
  };
};

const mapDispatchToProps = dispatch => ({ dispatch });

export const AssigneeList = withStyles(style)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Index),
);
