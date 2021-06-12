import React from 'react';
import TaskProvider from '../../../contexts/task';
import MettingsTab from './meetingsTab.view';
import { LIST_NAMES } from './meetingsTab.constant';
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
  date: {
    value: [],
    defaultValue: [],
  },
  sort: {
    ...baseFilters.sort,
    tertiaryOrdering: {
      field: 'TASK__COMPANY/COMPANY__NAME',
      direction: 'ASC',
    },
  },
};

const MeetingsTabContainer = props => (
  <BobjectListProvider lists={lists} filters={filters}>
    <TaskProvider>
      <MettingsTab {...props} />
    </TaskProvider>
  </BobjectListProvider>
);

export default MeetingsTabContainer;
