import React from 'react';
import FilterItem from '../filterItem';
import { Checkbox } from '@bloobirds-it/bloobirds-platform-component-library';

const CheckboxFilter = ({ title, text, checked, onClick, size }) => (
  <FilterItem title={title}>
    <Checkbox checked={checked} onClick={onClick} size={size}>
      {text}
    </Checkbox>
  </FilterItem>
);

CheckboxFilter.defaultProps = {
  size: 'small',
};

export default CheckboxFilter;
