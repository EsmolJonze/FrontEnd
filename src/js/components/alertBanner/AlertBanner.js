import React, { useState } from 'react';
import styles from './AlertBanner.module.css';
import classNames from 'clsx';
import { IconButton } from '@bloobirds-it/bloobirds-platform-component-library';

export const AlertBanner = ({ type, message }) => {
  const [hide, setHide] = useState(false);
  const classes = classNames({
    [styles._alert_banner_container]: true,
    [styles[type]]: true,
    [styles._hided]: hide,
  });

  return (
    <div className={classes}>
      <div className={styles._alert_banner_text}>{message}</div>
      <IconButton
        className={styles._alert_banner_icon}
        color="var(--peanut)"
        name="cross"
        onClick={() => setHide(true)}
      />
    </div>
  );
};
