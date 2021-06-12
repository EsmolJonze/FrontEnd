import React from 'react';
import { Button, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './clearFilters.module.css';

const ClearFilters = ({ handleClear }) => (
  <div className={styles._content}>
    <div className={styles._title}>
      <Text color="peanut" htmlTag="span">
        No results were found to the current filters
      </Text>
    </div>
    <div className={styles._subtitle}>
      <Text color="softPeanut" htmlTag="span" size="s">
        Try modifying your search criteria.
      </Text>
    </div>
    <div className={styles._button_container}>
      <Button variant="secondary" inline="false" onClick={handleClear}>
        CLEAR FILTERS
      </Button>
    </div>
  </div>
);

export default ClearFilters;
