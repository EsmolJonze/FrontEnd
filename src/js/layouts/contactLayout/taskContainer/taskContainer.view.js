import React, { useMemo, useState } from 'react';
import classnames from 'clsx';
import styles from './taskContainer.module.css';
import { IconButton, Skeleton, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { convertHtmlToString } from '../../../utils/email.utils';
import Card from '../../../components/card';
import { CARD_TYPES } from '../../../constants/card';
import EmptyCard from './emptyCard';
import { useTaskOverdueProspect, useTaskPast, useTaskToday } from './taskContainer.service';
import { bobjectFieldsModel } from '../../../misc/model/bobjectFieldsModel';
import { getValueFromLogicRole } from '../../../utils/bobjects.utils';
import { useUserSettings } from '../../../components/userPermissions/hooks';
import { useTaskNavigation } from '../../../hooks';

const TaskContainer = ({ bobject, bobjectType }) => {
  const settings = useUserSettings();
  const salesFeatureEnabled = settings?.account?.features.salesFeature;
  const { tasks: taskListToday, loadingTasks: isLoadingToday } = useTaskToday(
    bobject,
    bobjectType,
    salesFeatureEnabled,
  );
  const { tasks: taskListOverdue, loadingTasks: isLoadingOverdue } = useTaskPast(
    bobject,
    bobjectType,
    salesFeatureEnabled,
  );
  const {
    tasks: taskOverdueProspect,
    loadingTasks: isLoadingOverdueProspect,
  } = useTaskOverdueProspect(bobject, bobjectType, salesFeatureEnabled);
  const { selectedTask, shouldShowNavigation } = useTaskNavigation();

  const [indexTask, setIndexTask] = useState(0);

  // selectedTask should come from recoil

  const taskList = useMemo(() => {
    const list = [...taskOverdueProspect, ...taskListOverdue, ...taskListToday];
    const orderedList = list.sort((a, b) => {
      const taskModelA = bobjectFieldsModel(a.fields);
      const taskModelB = bobjectFieldsModel(b.fields);
      const taskDateA = taskModelA.findByLogicRole('TASK__SCHEDULED_DATE')?.text;
      const taskDateB = taskModelB.findByLogicRole('TASK__SCHEDULED_DATE')?.text;
      return new Date(taskDateB) < new Date(taskDateA) ? 1 : -1;
    });
    if (shouldShowNavigation && selectedTask && orderedList.length > 0) {
      const filteredList = orderedList.filter(task => task.id.value !== selectedTask.id.value);
      if (filteredList.length < orderedList.length) {
        return [selectedTask, ...filteredList];
      }
    }
    return orderedList;
  }, [taskListToday, taskListOverdue, taskOverdueProspect, selectedTask]);

  const task = taskList[indexTask];
  const description = getValueFromLogicRole(task, 'TASK__DESCRIPTION');

  return (
    <>
      <div
        className={classnames(styles._title, {
          [styles._title__no_tasks]: !task,
        })}
      >
        <div className={styles._info__container}>
          <Text size="s" color="softPeanut">
            Tasks for today
          </Text>
          {description && !description.startsWith('org.mozilla.javascript') && (
            <div className={styles._info_message__container}>
              <span className={styles._info__message__emoji} role="img" aria-label="sunglasses">
                👉
              </span>
              <Text color="peanut" size="s">
                {convertHtmlToString(description)}
              </Text>
            </div>
          )}
        </div>
        {task && (
          <div className={styles._change_task_button}>
            <IconButton
              name="chevronLeft"
              size={16}
              color="peanut"
              disabled={indexTask === 0}
              onClick={() => setIndexTask(indexTask > 0 ? indexTask - 1 : 0)}
            />
            <Text size="s" inline color="peanut">{`${indexTask + 1} / ${taskList.length}`}</Text>
            <IconButton
              name="chevronRight"
              size={16}
              color="peanut"
              disabled={indexTask === taskList.length - 1 || taskList.length === 0}
              onClick={() =>
                setIndexTask(taskList.length - 1 > indexTask ? indexTask + 1 : indexTask)
              }
            />
          </div>
        )}
      </div>
      {task && <Card type={CARD_TYPES.COMPANY_TASK} bobject={task} />}
      {!task && (isLoadingOverdue || isLoadingToday || isLoadingOverdueProspect) && (
        <div className={styles._taskSkeleton__container}>
          <Skeleton variant="circle" height={20} width={20} />
          <Skeleton variant="text" height={20} width={120} />
          <Skeleton variant="text" height={20} width={100} />
          <Skeleton variant="text" height={20} width={120} />
        </div>
      )}
      {!task && !(isLoadingOverdue || isLoadingToday || isLoadingOverdueProspect) && (
        <EmptyCard>
          No pending task{' '}
          <span role="img" aria-label="sunglasses">
            😎
          </span>
        </EmptyCard>
      )}
    </>
  );
};

export default TaskContainer;
