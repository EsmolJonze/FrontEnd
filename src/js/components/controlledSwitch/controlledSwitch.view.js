import React from 'react';
import styles from './controlledSwitch.module.css';
import { Controller } from 'react-hook-form';
import { Switch, Text } from '@bloobirds-it/bloobirds-platform-component-library';

export const ControlledSwitch = ({ control, name, children }) => (
  <div className={styles._switchText__container}>
    <Controller
      as={Switch}
      valueName="checked"
      defaultValue="checked"
      name={name}
      control={control}
    />
    <div className={styles._switchText__text}>
      <Text size="s" inline color="peanut">
        {children}
      </Text>
    </div>
  </div>
);
