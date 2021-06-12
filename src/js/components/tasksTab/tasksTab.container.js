import { listsNames } from './tasksTab.constants';
import BobjectListProvider from '../../contexts/bobjectList';
import TaskTab from './tasksTab.view';
import React from 'react';

const lists = [listsNames.OVERDUE, listsNames.TODAY, listsNames.FUTURE_TASKS, listsNames.COMPLETED];

const filters = {
  taskType: {
    value: [],
    defaultValue: [],
    logicRole: 'TASK__TASK_TYPE',
  },
  sort: {
    value: {
      field: 'TASK__SCHEDULED_DATE',
      direction: 'ASC',
    },
    defaultValue: {
      field: 'TASK__SCHEDULED_DATE',
      direction: 'ASC',
    },
  },
};

const TasksTabContainer = props => (
  <BobjectListProvider lists={lists} filters={filters}>
    <TaskTab {...props} />
  </BobjectListProvider>
);

export default TasksTabContainer;
