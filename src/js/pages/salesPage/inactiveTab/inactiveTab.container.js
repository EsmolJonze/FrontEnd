import React from 'react';
import InactiveTab from './inactiveTab.view';
import BobjectListProvider from '../../../contexts/bobjectList';
import { LIST_NAMES } from './inactiveTab.constant';
import { baseFilters } from '../../../contexts/bobjectList/bobjectList.provider';

const lists = [LIST_NAMES.OPPORTUNITIES];

const filters = {
  ...baseFilters,
  status: {
    value: [],
    defaultValue: [],
    logicRole: 'OPPORTUNITY__STATUS',
    subqueryLogicRole: 'TASK__OPPORTUNITY',
    subquery: true,
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
    secondOrdering: {
      field: 'OPPORTUNITY__NAME',
      direction: 'ASC',
    },
  },
};

const InactiveTabContainer = props => (
  <BobjectListProvider lists={lists} filters={filters}>
    <InactiveTab {...props} />
  </BobjectListProvider>
);

export default InactiveTabContainer;
