import React from 'react';
import { Icon, Select, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './segmentationSelect.module.css';

const SegmentationSelect = ({ title, value, disabled, children, onChange }) => (
  <div className={styles._select_wrapper}>
    <div className={styles._select_text}>
      <Text color="softPeanut" size="m" weight="bold">
        {title}
      </Text>
    </div>
    <Icon name="arrowRight" color="softPeanut" />
    <Select width={300} disabled={disabled} value={value} onChange={onChange}>
      {children}
    </Select>
  </div>
);

export default SegmentationSelect;
