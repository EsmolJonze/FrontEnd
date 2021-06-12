import React from 'react';
import { Item, Select } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './templateFilterInput.module.css';

const TemplateFilterInputView = ({
  filter,
  pluralEntityName,
  resetData,
  setFilterValue,
  value,
}) => (
  <div className={styles._container}>
    <Select
      width="120px"
      placeholder={filter.label}
      defaultValue={value}
      value={value}
      size="small"
      onChange={newFilter => {
        setFilterValue(newFilter);
        resetData(pluralEntityName);
      }}
    >
      {filter.values.map(filterValue => (
        <Item value={{ value: filterValue.id, name: filter.label }} key={filterValue.id}>
          {filterValue.name === 'All' ? `All ${filter.label}s` : filterValue.name}
        </Item>
      ))}
    </Select>
  </div>
);

export default TemplateFilterInputView;
