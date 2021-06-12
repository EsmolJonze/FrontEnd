import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  OPEN_MODAL_COMPLETE_TASK,
  TASK_FEED_CAME_FROM_DONE_TASK_PAGE,
} from '../../../../../../../actions/dictionary';
import { cssVariables } from '../../../../../../../style/variables';
import TASK_STATE from '../../../../../../_constants/taskState';
import {
  BOBJECT_FIELD__LOGIC_ROLE__TASK__TYPE,
  bobjectFieldsModel,
} from '../../../../../../../misc/model/bobjectFieldsModel';
import { APP_TASKS_DONE } from '../../../../../../_constants/routes';
import { BobjectApi } from '../../../../../../../misc/api/bobject';

const style = {
  completeTaskButton: {
    boxSizing: 'border-box',
    backgroundColor: cssVariables.color.bloobirds.natural,
    color: cssVariables.color.white.natural,
    width: 171,
    height: 32,
    fontSize: 13,
    lineHeight: '17px',
    letterSpacing: 1,
    margin: '18px',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: cssVariables.color.bloobirds.superVeryLight,
      color: cssVariables.color.bloobirds.natural,
      border: `1px solid ${cssVariables.color.bloobirds.natural}`,
    },
  },
};

const Index = withStyles(style)(props => {
  const {
    task,
    classes,
    isEnabled,
    handleOpenTaskCompleteModal,
    onComplete,
    history,
    cameFromDonePage,
  } = {
    ...props,
  };
  if (task === null || task === undefined) {
    return <div />;
  }
  let taskModel;
  let taskTypeLogicRole;
  if (!task) {
    taskTypeLogicRole = 'CONTACT';
  } else {
    taskModel = bobjectFieldsModel(task.fields);
    taskTypeLogicRole = taskModel.findByLogicRole(BOBJECT_FIELD__LOGIC_ROLE__TASK__TYPE)
      .valueLogicRole;
  }
  let completeBtnText;
  switch (taskTypeLogicRole) {
    case 'ADD_LEADS_TO_QC':
      completeBtnText = 'Confirm leads';
      break;
    case 'CONTACT':
    case 'START_CADENCE':
    case 'PROSPECT_CADENCE':
    case 'NEXT_STEP':
    case 'CONTACT_BEFORE_MEETING':
      completeBtnText = 'Done for today';
      break;
    default:
      completeBtnText = 'Complete Task';
      break;
  }

  const manageClick = () => {
    if (isEnabled && task !== undefined) {
      BobjectApi.request()
        .Task()
        .partialSet({
          bobjectId: task.id.objectId,
          data: { TASK__STATUS: TASK_STATE.COMPLETED },
        });
      if (onComplete !== undefined) {
        onComplete();
      }
      history.push(APP_TASKS_DONE);
      cameFromDonePage();
    } else {
      handleOpenTaskCompleteModal();
    }
  };
  return (
    <Button
      variant="contained"
      className={classes.completeTaskButton}
      disabled={!isEnabled}
      onClick={manageClick}
    >
      {completeBtnText}
    </Button>
  );
});

const mapStateToProps = state => ({
  goalState: state.taskWorkspace.board.targetMarket.goalState,
});

const mapDispatchToProps = dispatch => ({
  handleOpenTaskCompleteModal: () => dispatch({ type: OPEN_MODAL_COMPLETE_TASK }),
  cameFromDonePage: () => dispatch({ type: TASK_FEED_CAME_FROM_DONE_TASK_PAGE }),
});

export const CompleteTaskButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Index));
