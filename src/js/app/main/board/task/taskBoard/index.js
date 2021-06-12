import React, { useState, useEffect } from 'react';
import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import TaskDescription from './workspace/taskDescription';
import AddQcTask from './workspace/addQcTask';
import classNames from 'clsx';
import {
  BOBJECT_FIELD__LOGIC_ROLE__TASK__TYPE,
  bobjectFieldsModel,
} from '../../../../../misc/model/bobjectFieldsModel';
import { AllocateQcTask } from './workspace/allocateQcTask';
import {
  COMPANIES_TO_ALLOCATE_CALCULATE_CENTER,
  DISPLAY_HIDE_SIDEBAR_LEFT,
  SET_CONTEXT_COMPANY,
  TASK_FEED_SWITCH_SELECTED_TASK_START,
  TASK_LOAD_RELATED_COMPANY,
} from '../../../../../actions/dictionary';
import { CompleteTaskButton } from './workspace/taskDescription/CompleteTaskButton';
import { CompleteButtonAllocateQc } from './workspace/taskDescription/CompleteButtonAllocateQc';
import { SearchLeads } from './workspace/searchLeads';
import { TaskHeader } from './workspace/taskDescription/taskHeader';
import { BobjectApi } from '../../../../../misc/api/bobject';
import { useDocumentTitle } from '../../../../../hooks';

const style = {
  taskWorkspace: {
    minHeight: 'calc(100vh - 80px)',
    backgroundColor: '#f0f4f6',
    height: 'calc(100vh - 80px)',
    flexGrow: '1',
    overflowY: 'scroll',
  },
  taskWorkspaceAssign: {
    overflowY: 'unset',
  },
  taskWorkspaceMargins: {
    padding: '40px 25px',
  },
  taskWorkspaceMarginsContact: {
    paddingTop: '40px',
  },
};

const getTaskType = selectedTask =>
  bobjectFieldsModel(selectedTask.fields).findByLogicRole(BOBJECT_FIELD__LOGIC_ROLE__TASK__TYPE)
    .valueLogicRole;

const injectTaskElement = (selectedTask, company) => {
  const taskTypeLogicRole = getTaskType(selectedTask);

  switch (taskTypeLogicRole) {
    case 'ALLOCATE_QC':
      return <AllocateQcTask task={selectedTask} company={company} />;
    case 'ADD_LEADS_TO_QC':
      return <SearchLeads task={selectedTask} company={company} />;
    // TODO: this case is needed??
    // case 'CONTACT':
    //   return <ContactTask task={selectedTask} companyId={company.id.objectId} />;
    default:
      return <div>Unknown task type</div>;
  }
};

const getCompleteButton = selectedTask => () => (
  <CompleteTaskButton task={selectedTask} isEnabled />
);

const TaskBoard = withStyles(style)(props => {
  const {
    taskId,
    selectedTask,
    selectedCompany,
    classes,
    setContextCompany,
    calculateCenterOfAssigneeElement,
    dispatch,
  } = { ...props };
  const [potentialChangeFound, setPotentialChangeFound] = useState(false);

  // TODO: No way!
  let companyId;
  if (selectedTask) {
    const model = bobjectFieldsModel(selectedTask.fields);
    companyId = model.findByLogicRole('TASK__COMPANY').text;
  }

  useEffect(() => {
    if (selectedTask === undefined || taskId !== selectedTask.id.objectId) {
      BobjectApi.request()
        .Task()
        .getForm(taskId)
        .then(payload =>
          dispatch({
            type: TASK_FEED_SWITCH_SELECTED_TASK_START,
            payload,
          }),
        );
    }
  }, [dispatch, taskId, selectedTask]);

  useEffect(() => {
    if (
      companyId !== undefined &&
      (selectedCompany === undefined ||
        selectedCompany.id.value !== companyId ||
        potentialChangeFound)
    ) {
      BobjectApi.request()
        .Company()
        .getForm(companyId.split('/').pop())
        .then(payload => {
          setPotentialChangeFound(false);
          dispatch({
            type: TASK_LOAD_RELATED_COMPANY,
            payload,
          });
        });
    }
  }, [dispatch, companyId, selectedCompany, potentialChangeFound]);

  SubscriptionHooks.useBobjectSubscription(
    'Lead',
    {
      query: { LEAD__COMPANY: [companyId] },
      formFields: true,
      pageSize: 50,
      injectReferences: true,
    },
    () => setPotentialChangeFound(true),
  );

  if (!selectedTask || taskId !== selectedTask.id.objectId) {
    return <div className={classes.taskWorkspace} />;
  }
  if (companyId !== undefined && companyId.split('Company').length !== 2) {
    return <div className={classes.taskWorkspace} />;
  }

  if (
    companyId !== undefined &&
    (selectedCompany === undefined || selectedCompany.id.value !== companyId)
  ) {
    return <div className={classes.taskWorkspace} />;
  }
  setContextCompany(selectedCompany);
  /* here we should switch elements depending on the task type */
  const taskTypeLogicRole = getTaskType(selectedTask);
  switch (taskTypeLogicRole) {
    // TODO: this case is needed??
    // case 'CONTACT':
    //   return (
    //     <div className={classes.taskWorkspace}>
    //       <div className={classes.taskWorkspaceMarginsContact}>
    //         {injectTaskElement(selectedTask, selectedCompany)}
    //       </div>
    //     </div>
    //   );
    case 'ADD_LEADS_TO_QC':
    default:
      return (
        <div
          className={classes.taskWorkspace}
          onScroll={taskTypeLogicRole === 'ALLOCATE_QC' ? calculateCenterOfAssigneeElement : null}
        >
          <div className={classes.taskWorkspaceMargins}>
            <TaskDescription
              company={taskTypeLogicRole === 'ADD_LEADS_TO_QC' ? selectedCompany : undefined}
              task={selectedTask}
              CompleteButton={getCompleteButton(selectedTask)}
              showContactButton
            />
            {injectTaskElement(selectedTask, selectedCompany)}
          </div>
        </div>
      );
  }
});

const mapStateToProps = state => ({
  selectedTask: state.taskWorkspace.taskFeed.selectedTask,
  selectedCompany: state.taskWorkspace.taskFeed.selectedCompany,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  setContextCompany: company => dispatch({ type: SET_CONTEXT_COMPANY, company }),
  hideTasks: () => dispatch({ type: DISPLAY_HIDE_SIDEBAR_LEFT }),
  calculateCenterOfAssigneeElement: () =>
    dispatch({ type: COMPANIES_TO_ALLOCATE_CALCULATE_CENTER }),
});

const AddQc = withStyles(style)(({ classes, hideTasks }) => {
  useEffect(() => {
    hideTasks();
  }, []);
  useDocumentTitle('Add QC');
  return (
    <div className={classes.taskWorkspace}>
      <div className={classes.taskWorkspaceMargins}>
        <TaskHeader
          title="Create Qualified Companies"
          subtitle="Create companies in Backlog status to make them ready to deliver. Also you can create companies in New status, and move them to backlog later by changing its tate."
        />
        <AddQcTask />
      </div>
    </div>
  );
});

const AssignQc = withStyles(style)(({ classes, calculateCenterOfAssigneeElement, hideTasks }) => {
  useEffect(() => {
    hideTasks();
  }, []);
  useDocumentTitle('Assign QC');
  return (
    <div
      className={classNames({
        [classes.taskWorkspace]: true,
        [classes.taskWorkspaceAssign]: true,
      })}
      onScroll={calculateCenterOfAssigneeElement}
    >
      <div className={classes.taskWorkspaceMargins}>
        <TaskHeader title="Assign Qualified Companies" Button={CompleteButtonAllocateQc} />
        <AllocateQcTask />
      </div>
    </div>
  );
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskBoard);

export const AssignQcWorkspace = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AssignQc);

export const AddQcWorkspace = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddQc);
