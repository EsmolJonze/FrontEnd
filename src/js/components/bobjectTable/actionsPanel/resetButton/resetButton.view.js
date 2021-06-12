import React from 'react';
import { IconButton, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './resetButton.module.css';
import { useBobjectTable, useMediaQuery } from '../../../../hooks';

const ResetButton = () => {
  const { isModified, resetToInitialState } = useBobjectTable();
  const { isDesktop } = useMediaQuery();

  return isModified ? (
    <div className={styles._reset_button_container}>
      <IconButton name="undoRevert" onClick={resetToInitialState}>
        {!isDesktop && (
          <Text size="s" color="peanut">
            Reset
          </Text>
        )}
      </IconButton>
    </div>
  ) : null;
};

export default ResetButton;
