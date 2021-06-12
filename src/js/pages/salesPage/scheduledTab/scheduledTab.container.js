import React from 'react';
import TaskProvider from '../../../contexts/task';
import ScheduledTab from './scheduledTab.view';
import { LIST_NAMES } from './scheduledTab.constant';
import BobjectListProvider from '../../../contexts/bobjectList';
import { baseFilters } from '../../../contexts/bobjectList/bobjectList.provider';

const lists = [
  LIST_NAMES.OVERDUE,
  LIST_NAMES.TODAY,
  LIST_NAMES.TOMORROW,
  LIST_NAMES.TWO_DAYS,
  LIST_NAMES.THREE_DAYS,
  LIST_NAMES.FOUR_DAYS,
  LIST_NAMES.FIVE_DAYS,
  LIST_NAMES.SIX_DAYS,
  LIST_NAMES.COMPLETED,
];

const filters = {
  ...baseFilters,
  status: {
    value: [],
    defaultValue: [],
    logicRole: 'OPPORTUNITY__STATUS',
    subqueryLogicRole: 'TASK__OPPORTUNITY',
    subquery: true,
  },
  date: {
    value: [],
    defaultValue: [],
  },
  sort: {
    value: {
      field: 'OPPORTUNITY__ATTEMPTS_LAST_DAY',
      direction: 'ASC',
    },
    defaultValue: {
      field: 'OPPORTUNITY__ATTEMPTS_LAST_DAY',
      direction: 'ASC',
    },
    subqueryLogicRole: 'TASK__OPPORTUNITY',
    secondOrdering: {
      field: 'TASK__OPPORTUNITY/OPPORTUNITY__NAME',
      direction: 'ASC',
    },
  },
};

const scheduledTabContainer = props => (
  <BobjectListProvider lists={lists} filters={filters}>
    <TaskProvider>
      <ScheduledTab {...props} />
    </TaskProvider>
  </BobjectListProvider>
);

export default scheduledTabContainer;
