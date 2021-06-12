import React from 'react';
import InactiveProspectTab from './inactiveProspectTab.view';
import { BobjectListProvider } from '../../../contexts/bobjectList/bobjectList.provider';
import { LIST_NAMES } from './inactiveProspectTab.constant';

const lists = [LIST_NAMES.COMPANIES];

const filters = {
  status: {
    value: [],
    defaultValue: [],
    logicRole: 'COMPANY__STATUS',
  },
  source: {
    value: [],
    defaultValue: [],
    logicRole: 'COMPANY__SOURCE',
  },
  sort: {
    value: {
      field: 'COMPANY__ATTEMPTS_LAST_DAY',
      direction: 'DESC',
    },
    defaultValue: {
      field: 'COMPANY__ATTEMPTS_LAST_DAY',
      direction: 'DESC',
    },
  },
};

const InactiveProspectTabContainer = props => (
  <BobjectListProvider lists={lists} filters={filters}>
    <InactiveProspectTab {...props} />
  </BobjectListProvider>
);

export default InactiveProspectTabContainer;
