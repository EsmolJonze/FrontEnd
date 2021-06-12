import React, { useState } from 'react';
import styles from './Section.module.css';
import { Text, Collapsible } from '@bloobirds-it/bloobirds-platform-component-library';

export const Section = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={styles.root}>
      <Collapsible
        onCollapsed={setIsCollapsed}
        expanded={!isCollapsed}
        title={
          <Text size="regular" color="peanut">
            {title}
          </Text>
        }
        color="peanut"
      >
        <div className={styles.row}>
          <div className={styles.rowItem}>{children[0]}</div>
          <div className={styles.rowItem}>{children[1]}</div>
        </div>
      </Collapsible>
    </div>
  );
};
