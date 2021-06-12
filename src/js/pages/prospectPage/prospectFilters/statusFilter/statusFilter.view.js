import React from 'react';
import { useBobjectList } from '../../../../contexts/bobjectList';
import { filtersNames } from '../prospectFilters.constants';
import { TagFilter } from '../../../../components/filters';

const StatusFilter = () => {
  const { state, setFilter } = useBobjectList();

  const { filters } = state;

  return (
    <TagFilter
      title="Status"
      value={filters.status.value}
      onChange={setFilter(filtersNames.status)}
      items={[
        { value: 'COMPANY__STATUS__READY_TO_PROSPECT', name: 'Ready to prospect' },
        { value: 'COMPANY__STATUS__ON_PROSPECTION', name: 'On prospection' },
        { value: 'COMPANY__STATUS__CONTACTED', name: 'Contacted' },
        { value: 'COMPANY__STATUS__ENGAGED', name: 'Engaged' },
      ]}
    />
  );
};

export default StatusFilter;
