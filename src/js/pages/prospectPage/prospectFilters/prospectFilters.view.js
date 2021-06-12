import React from 'react';
import { FilterList } from '../../../components/filters';

const ProspectFilters = ({ shownFilters, orderItems }) => (
  <FilterList>
    {shownFilters &&
      shownFilters.map((Filter, index) => {
        const key = `filter-${index}`;
        return <Filter key={key} orderItems={orderItems} />;
      })}
  </FilterList>
);

export default ProspectFilters;
