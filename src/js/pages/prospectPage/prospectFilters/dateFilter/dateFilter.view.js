import React from 'react';
import { useBobjectList } from '../../../../contexts/bobjectList';
import { filtersNames } from '../prospectFilters.constants';
import { TagFilter } from '../../../../components/filters';

const DateFilter = () => {
  const { state, setFilter } = useBobjectList();

  const { filters } = state;

  return (
    <TagFilter
      title="Date"
      value={filters.date.value}
      onChange={setFilter(filtersNames.date)}
      items={[
        { value: 'OVERDUE', name: 'Overdue' },
        { value: 'TODAY', name: 'Today' },
        { value: 'TOMORROW', name: 'Tomorrow' },
        { value: 'NEXT_7_DAYS', name: 'Next 7 Days' },
      ]}
    />
  );
};

export default DateFilter;
