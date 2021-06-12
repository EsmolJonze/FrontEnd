import React, { useState, useMemo } from 'react';
import styles from './DataScope.module.css';
import { Icon } from '@bloobirds-it/bloobirds-platform-component-library';
import { capitalize } from 'lodash';

const ArrowButton = ({ onClick, disabled, direction }) => (
  <button type="button" className={styles.button} onClick={onClick} disabled={disabled}>
    <Icon
      size={16}
      name={`chevron${capitalize(direction)}`}
      color={disabled ? 'verySoftPeanut' : 'peanut'}
    />
  </button>
);

export const DataScope = ({ children, data, max = 10 }) => {
  const [currentCursor, setCurrentCursor] = useState(0);

  const visibleData = useMemo(() => data.slice(currentCursor, currentCursor + max), [
    data,
    currentCursor,
  ]);

  const isFirst = currentCursor === 0;
  const isLast = currentCursor + max >= data.length;

  if (data.length <= max) {
    return children({ visibleData: data, isScoped: false });
  }

  return (
    <>
      <div className={styles.content}>{children({ visibleData, isScoped: true })}</div>
      <div className={styles.footer}>
        <ArrowButton
          direction="down"
          onClick={() => setCurrentCursor(currentCursor + 1)}
          disabled={isLast}
        />
        <ArrowButton
          direction="up"
          onClick={() => setCurrentCursor(currentCursor - 1)}
          disabled={isFirst}
        />
      </div>
    </>
  );
};
