import React from 'react';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './metricItem.module.css';

const Metric = ({ title, size = 'medium', value }) => (
  <div className={styles._content}>
    <Text htmlTag="span" color="peanut" size="m">
      {title}
    </Text>
    {size === 'medium' ? (
      <span className={styles._item}>{value}</span>
    ) : (
      <Text size="xxxl" color="bloobirds">
        {value}
      </Text>
    )}
  </div>
);

export default Metric;
