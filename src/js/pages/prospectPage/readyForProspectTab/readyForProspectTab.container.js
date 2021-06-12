import React from 'react';
import TaskProvider from '../../../contexts/task';
import ReadyForProspectTab from './readyForProspectTab.view';
import { LIST_NAMES } from './readyForProspectTab.constant';
import BobjectListProvider from '../../../contexts/bobjectList';
import { baseFilters } from '../../../contexts/bobjectList/bobjectList.provider';

const lists = [LIST_NAMES.START_CADENCE, LIST_NAMES.FUTURE_READY, LIST_NAMES.COMPLETED];

const filters = {
  ...baseFilters,
  sort: {
    ...baseFilters.sort,
    secondOrdering: {
      field: 'TASK__COMPANY/COMPANY__START_CADENCE',
      direction: 'ASC',
    },
    tertiaryOrdering: {
      field: 'TASK__COMPANY/COMPANY__NAME',
      direction: 'ASC',
    },
  },
};

const ReadyForProspectTabContainer = props => (
  <BobjectListProvider lists={lists} filters={filters}>
    <TaskProvider>
      <ReadyForProspectTab {...props} />
    </TaskProvider>
  </BobjectListProvider>
);

export default ReadyForProspectTabContainer;
