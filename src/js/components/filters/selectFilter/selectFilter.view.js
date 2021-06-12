import React from 'react';
import FilterItem from '../filterItem';
import { Select, Item } from '@bloobirds-it/bloobirds-platform-component-library';

const SelectFilter = ({ title, value, onChange, size, items }) => (
  <FilterItem title={title}>
    <Select value={value} onChange={onChange} size={size} width="100%">
      {items?.map(item => (
        <Item key={`${item.value.field}_${item.value.direction}`} value={item.value}>
          {item.name}
        </Item>
      ))}
    </Select>
  </FilterItem>
);

export default SelectFilter;
