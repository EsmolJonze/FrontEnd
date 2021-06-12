import {
  Button,
  IconButton,
  Text,
  Tooltip,
} from '@bloobirds-it/bloobirds-platform-component-library';
import React from 'react';
import styles from './taskNavigator.module.css';
import { getValueFromLogicRole } from '../../../../utils/bobjects.utils';
import { useTaskContext } from '../../../../contexts/task';
import { getButtonMarkAsDone, extractDataForCard } from '../../../../components/card/card.service';
import { useActiveCompany, useTaskNavigation } from '../../../../hooks';
import { BOBJECT_TYPES } from '../../../../constants/bobject';

const TaskNavigator = () => {
  const {
    areAllTasksCompleted,
    finishNavigation,
    firstTask,
    index,
    isFirst,
    isTaskCompleted,
    isLast,
    lastTask,
    nextTask,
    previousTask,
    selectedTask,
    tasks,
  } = useTaskNavigation();
  const { setShowToast } = useTaskContext();
  const { company: activeCompany } = useActiveCompany();
  const { task, company } = extractDataForCard({
    activeCompany,
    bobject: selectedTask,
    bobjectType: BOBJECT_TYPES.TASK,
    isContactView: true,
  });
  const markAsDoneControl = getButtonMarkAsDone({ task, company });
  return (
    <div className={styles._container}>
      {areAllTasksCompleted ? (
        <Text size="m" color="white">
          All tasks completed{' '}
          <span role="img" aria-label="rocket-emoji">
            🚀
          </span>
        </Text>
      ) : (
        <>
          <div className={styles._currentTask__container}>
            <Text size="s" color="white">
              {getValueFromLogicRole(selectedTask, 'TASK__TITLE')}
            </Text>
            <Tooltip title={markAsDoneControl?.tooltip || ''} position="bottom" trigger="hover">
              <div>
                <Button
                  iconLeft="check"
                  variant="tertiary"
                  onClick={
                    isTaskCompleted()
                      ? () => {}
                      : () => setShowToast(true, selectedTask.id.objectId)
                  }
                  size="small"
                  disabled={markAsDoneControl?.disabled || isTaskCompleted()}
                >
                  {isTaskCompleted() ? 'Completed' : 'Mark as Done'}
                </Button>
              </div>
            </Tooltip>
          </div>
          <div className={styles._paginator__container}>
            <IconButton
              size={16}
              color="white"
              name="chevronFirst"
              onClick={firstTask}
              disabled={isFirst}
            />
            <IconButton
              size={16}
              color="white"
              name="chevronLeft"
              onClick={previousTask}
              disabled={isFirst}
            />
            <div className={styles._paginator__text}>
              <Text size="s" inline color="white">
                <b>{`${index + 1}/${tasks.length}`}</b> tasks <b>To do</b>
              </Text>
            </div>
            <IconButton
              size={16}
              color="white"
              name="chevronRight"
              onClick={nextTask}
              disabled={isLast}
              dataTest="button-next-task"
            />
            <IconButton
              size={16}
              color="white"
              name="chevronLast"
              onClick={lastTask}
              disabled={isLast}
            />
          </div>
        </>
      )}
      <div className={styles._actions__container}>
        <Button
          size="small"
          variant="clear"
          color="white"
          iconRight="cross"
          onClick={finishNavigation}
        >
          Exit
        </Button>
      </div>
    </div>
  );
};

export default TaskNavigator;
