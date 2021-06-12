import React from 'react';
import { useBobjectList } from '../../../../contexts/bobjectList';
import { filtersNames } from '../prospectFilters.constants';
import { SelectFilter } from '../../../../components/filters';

const highPriorityFilterItem = {
  value: { field: 'COMPANY__HIGH_PRIORITY', direction: 'ASC' },
  secondOrdering: {
    field: 'TASK__COMPANY/COMPANY__START_CADENCE',
    direction: 'ASC',
  },
  tertiaryOrdering: {
    field: 'TASK__COMPANY/COMPANY__NAME',
    direction: 'ASC',
  },
  name: 'High Priority',
};
const startCadenceDateFilterItem = {
  value: { field: 'COMPANY__START_CADENCE', direction: 'ASC' },
  secondOrdering: {
    field: 'TASK__COMPANY/COMPANY__NAME',
    direction: 'ASC',
  },
  name: 'Start cadence date',
};
const attemptDescFilterItem = {
  value: { field: 'TASK__ATTEMPT_NUMBER', direction: 'ASC' },
  name: 'Attempt order',
};
const attemptsLastDayAscFilterItem = {
  value: { field: 'COMPANY__ATTEMPTS_LAST_DAY', direction: 'ASC' },
  name: 'Last attempt farthest from now',
};
const attemptsLastDayDescfilterItem = {
  value: { field: 'COMPANY__ATTEMPTS_LAST_DAY', direction: 'DESC' },
  name: 'Last attempt closest to now',
};
const attemptsLastDayOppAscFilterItem = {
  value: { field: 'OPPORTUNITY__ATTEMPTS_LAST_DAY', direction: 'ASC' },
  name: 'Last attempt farthest from now',
};
const attemptsLastDayOppDescFilterItem = {
  value: { field: 'OPPORTUNITY__ATTEMPTS_LAST_DAY', direction: 'DESC' },
  name: 'Last attempt closest to now',
};
const countryAscFilterItem = {
  value: { field: 'COMPANY__COUNTRY', direction: 'DESC' },
  name: 'Country ASC',
};
const countryDescFilterItem = {
  value: { field: 'COMPANY__COUNTRY', direction: 'ASC' },
  name: 'Country DESC',
};
const deliveredDateAscFilterItem = {
  value: { field: 'COMPANY__STATUS__CHANGED_DATE_DELIVERED', direction: 'ASC' },
  name: 'Delivered date farthest from now',
};
const deliveredDateDescFilterItem = {
  value: { field: 'COMPANY__STATUS__CHANGED_DATE_DELIVERED', direction: 'DESC' },
  name: 'Delivered date closest to now',
};
const sourceAscFilterItem = {
  value: { field: 'COMPANY__SOURCE', direction: 'ASC' },
  name: 'Source A-Z',
};
const sourceDescFilterItem = {
  value: { field: 'COMPANY__SOURCE', direction: 'DESC' },
  name: 'Source Z-A',
};
const closeDateAscFilterItem = {
  value: { field: 'OPPORTUNITY__CLOSE_DATE', direction: 'ASC' },
  name: 'Close date farthest from now',
};
const closeDateDescFilterItem = {
  value: { field: 'OPPORTUNITY__CLOSE_DATE', direction: 'DESC' },
  name: 'Close date closest to now',
};

export const reducedOrderFilterSet = [
  highPriorityFilterItem,
  startCadenceDateFilterItem,
  deliveredDateAscFilterItem,
  deliveredDateDescFilterItem,
  countryAscFilterItem,
  countryDescFilterItem,
  sourceAscFilterItem,
  sourceDescFilterItem,
];

const defaultOrderFilterSet = [
  highPriorityFilterItem,
  attemptsLastDayAscFilterItem,
  attemptsLastDayDescfilterItem,
  countryAscFilterItem,
  countryDescFilterItem,
  sourceAscFilterItem,
  sourceDescFilterItem,
];

export const salesOrderFilterSet = [
  closeDateAscFilterItem,
  closeDateDescFilterItem,
  attemptsLastDayOppAscFilterItem,
  attemptsLastDayOppDescFilterItem,
];

export const prospectingOrderFilterSet = [...defaultOrderFilterSet, attemptDescFilterItem];

const OrderFilter = ({ orderItems = defaultOrderFilterSet }) => {
  const { state, setFilter } = useBobjectList();
  return (
    <SelectFilter
      title="Order By"
      value={state.filters.sort.value}
      onChange={setFilter(filtersNames.sort)}
      size="small"
      items={orderItems}
    />
  );
};

export default OrderFilter;
