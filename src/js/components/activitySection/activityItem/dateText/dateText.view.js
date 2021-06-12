import React, { useMemo } from 'react';
import { Text, Tooltip } from '@bloobirds-it/bloobirds-platform-component-library';
import { formatTimeDistance, switchDateFormat } from '../../../../misc/utils';
import styles from './dateText.module.css';

const DateText = ({ date }) => {
  const text = useMemo(() => formatTimeDistance(date), [date]);
  const title = useMemo(() => switchDateFormat(date, true), [date]);

  return (
    <Tooltip title={title} position="top">
      <div className={styles._wrapper}>
        <Text color="softPeanut" size="xs">
          {text}
        </Text>
      </div>
    </Tooltip>
  );
};

export default DateText;
