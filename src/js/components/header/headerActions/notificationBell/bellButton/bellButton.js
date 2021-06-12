import React from 'react';
import classNames from 'clsx';
import styles from './bellButton.module.css';
import { IconButton } from '@bloobirds-it/bloobirds-platform-component-library';
import { useNotificationCount } from '../../../../../hooks/useNotificationsCount';

const BellButton = ({ onClick }) => {
  const { totalUnread } = useNotificationCount();

  const classes = classNames(styles.bell, {
    [styles.pending]: totalUnread !== 0,
  });

  return (
    <div
      data-test="Button-notificationBell"
      role="button"
      tabIndex={0}
      key={totalUnread}
      className={classes}
      onClick={onClick}
    >
      <IconButton name="bellFilled" color="peanut" size={24} />
      {totalUnread > 0 && (
        <div data-test="Number-notificationCounterValue" className={styles.count}>
          {totalUnread}
        </div>
      )}
    </div>
  );
};

export default BellButton;
