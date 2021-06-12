import React, { useState } from 'react';
import { useBobjectList } from '../../../../contexts/bobjectList';
import { filtersNames } from '../prospectFilters.constants';
import { TagFilter } from '../../../../components/filters';
import { useEntity } from '../../../../hooks/entities/useEntity';

const OpportunityStatusFilter = () => {
  const { state, setFilter } = useBobjectList();
  const { filters } = state;
  const [items, setItems] = useState([]);
  const opportunityStatuses = useEntity('bobjectPicklistFieldValues')
    ?.all()
    .filter(v => v.logicRole?.includes('OPPORTUNITY__STATUS'));

  if (opportunityStatuses && items.length === 0) {
    setItems(
      opportunityStatuses
        .map(status => ({
          value: status.logicRole,
          name: status.value,
        }))
        .sort((a, b) => (a.name > b.name ? 1 : -1)),
    );
  }

  return (
    <TagFilter
      title="Opp. status"
      value={filters.status?.value}
      onChange={setFilter(filtersNames.status)}
      items={items}
    />
  );
};

export default OpportunityStatusFilter;
