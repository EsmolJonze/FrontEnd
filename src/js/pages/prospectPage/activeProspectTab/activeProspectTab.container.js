import React from 'react';
import BobjectListProvider from '../../../contexts/bobjectList';
import TaskProvider from '../../../contexts/task';
import ActiveProspectTab from './activeProspectTab.view';
import { LIST_NAMES } from './activeProspectTab.constant';
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
  date: {
    value: [],
    defaultValue: [],
  },
  sort: {
    ...baseFilters.sort,
    secondOrdering: {
      field: 'TASK__COMPANY/COMPANY__NAME',
      direction: 'ASC',
    },
  },
};

const ActiveProspectTabContainer = props => (
  <BobjectListProvider lists={lists} filters={filters}>
    <TaskProvider>
      <ActiveProspectTab {...props} />
    </TaskProvider>
  </BobjectListProvider>
);

export default ActiveProspectTabContainer;
