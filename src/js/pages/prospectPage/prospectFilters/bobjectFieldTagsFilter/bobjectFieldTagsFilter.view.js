import React from 'react';
import { useBobjectList } from '../../../../contexts/bobjectList';
import { filtersNames } from '../prospectFilters.constants';
import { usePicklistValues } from '../../../../hooks';
import { TagFilter } from '../../../../components/filters';

const BobjectFieldTagsFilter = ({ logicRole, title, type }) => () => {
  const { state, setFilter } = useBobjectList();
  const items = usePicklistValues({ picklistLogicRole: logicRole });
  const filterItems = items?.map(item => ({ name: item.value, value: item.id }));

  return (
    <TagFilter
      title={title}
      value={state.filters[type].value}
      onChange={setFilter(filtersNames[type])}
      items={filterItems}
    />
  );
};

export default BobjectFieldTagsFilter;
