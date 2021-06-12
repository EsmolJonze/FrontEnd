import React from 'react';
import { Text, Icon } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './EmptyStatePanel.module.css';

export const EmptyStatePanel = () => (
  <div className={styles.root}>
    <div className={styles.icon}>
      <Icon size={24} color="softPeanut" name="search" />
    </div>
    <div className={styles.text}>
      <Text size="m" align="center" color="softPeanut">
        There are no results for the selected time range
      </Text>
    </div>
  </div>
);
