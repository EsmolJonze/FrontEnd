import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RESET_TASK_STATE } from '../../../../../../../actions/dictionary';
import { AssigneeList } from './AssigneeList';
import { withStyles } from '@material-ui/core';
import { CompanyToAssignListContainer } from './CompaniesToAssign/CompanyToAssignList.container';
import { Spinner } from '@bloobirds-it/bloobirds-platform-component-library';

const style = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
};

const Index = ({ classes, resetTaskState }) => {
  useEffect(() => {
    resetTaskState();
  }, []);
  return (
    <div className={classes.wrapper}>
      <React.Suspense fallback={<Spinner name="loadingCircle" />}>
        <AssigneeList className={classes.assigneeList} />
        <CompanyToAssignListContainer className={classes.companyToAssignList} />
      </React.Suspense>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  resetTaskState: () => dispatch({ type: RESET_TASK_STATE }),
});
export const AllocateQcTask = withStyles(style)(
  connect(
    null,
    mapDispatchToProps,
  )(Index),
);
