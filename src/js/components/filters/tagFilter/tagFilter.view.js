import React from 'react';
import { TagGroup, Tag } from '@bloobirds-it/bloobirds-platform-component-library';
import FilterItem from '../filterItem';
import { ellipsis } from '../../../utils/strings.utils';

const MAX_LENGTH = 23;

const TagFilter = ({ title, direction, items, value, onChange }) => (
  <FilterItem title={title}>
    <TagGroup value={value} onChange={onChange} direction={direction}>
      {items?.map(item => (
        <Tag key={item.value} value={item.value}>
          {ellipsis(item.name, MAX_LENGTH)}
        </Tag>
      ))}
    </TagGroup>
  </FilterItem>
);

TagFilter.defaultProps = {
  direction: 'vertical',
};

export default TagFilter;
