import React from 'react';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './emptyCard.module.css';

const EmptyContactTaskCard = ({ children }) => (
  <div className={styles._card}>
    <Text color="softPeanut" align="center">
      {children}
    </Text>
  </div>
);

export default EmptyContactTaskCard;
