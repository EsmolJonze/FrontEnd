import React from 'react';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './emptyList.module.css';

const EmptyList = () => (
  <section className={styles._list_empty}>
    <Text color="softPeanut">
      No pending tasks{' '}
      <span role="img" aria-label="sunglasses">
        😎
      </span>
    </Text>
  </section>
);

export default EmptyList;
