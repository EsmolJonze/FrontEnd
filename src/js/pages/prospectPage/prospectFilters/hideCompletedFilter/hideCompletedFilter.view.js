import React from 'react';
import { useBobjectList } from '../../../../contexts/bobjectList';
import { filtersNames } from '../prospectFilters.constants';
import { CheckboxFilter } from '../../../../components/filters';

const HideCompletedFilter = () => {
  const { state, setFilter } = useBobjectList();

  return (
    <CheckboxFilter
      text="Hide completed"
      checked={state.filters.hideCompleted.value}
      onClick={setFilter(filtersNames.hideCompleted)}
    />
  );
};

export default HideCompletedFilter;
