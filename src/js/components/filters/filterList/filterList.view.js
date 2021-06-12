import React from 'react';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './filterList.module.css';

const FilterList = ({ children }) => (
  <aside>
    <div className={styles._title}>
      <Text size="m" htmlTag="h2" weight="medium" color="peanut">
        Filters
      </Text>
    </div>
    <ul className={styles._list}>{children}</ul>
  </aside>
);

export default FilterList;
