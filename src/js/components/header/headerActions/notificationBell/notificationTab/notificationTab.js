import React from 'react';
import { Text, Spinner } from '@bloobirds-it/bloobirds-platform-component-library';
import NotificationCard from '../notificationCard';
import styles from './notificationTab.module.css';
import { NoUpdates } from '../../../../../../assets/svg';
import useNotificationBell from '../../../../../hooks/useNotificationBell';

const LoadingNotifications = () => (
  <div className={styles._loading_container}>
    <Spinner name="loadingCircle" />
  </div>
);

const EmptyNotifications = () => (
  <div className={styles._empty_container}>
    <NoUpdates />
    No updates to display
  </div>
);

const LoadMore = ({ onClick }) => (
  <div className={styles._show_more} onClick={onClick}>
    <Text size="xxs" color="bloobirds">
      Load More
    </Text>
  </div>
);

const NotificationTab = ({ onCardClick }) => {
  const {
    notifications,
    isLoading,
    isLastPage,
    loadMore,
    removeNotification,
    markAsReadById,
  } = useNotificationBell();

  if (isLoading) {
    return <LoadingNotifications />;
  }

  if (notifications.length === 0) {
    return <EmptyNotifications />;
  }

  return (
    <div>
      {notifications.map(({ id, timestamp, read, ...info }) => (
        <NotificationCard
          key={id}
          id={id}
          read={read}
          date={new Date(timestamp)}
          onDelete={removeNotification}
          onClick={async () => {
            if (!read) {
              await markAsReadById(id);
            }
            onCardClick(id);
          }}
          {...info}
        />
      ))}
      {!isLastPage && <LoadMore onClick={loadMore} />}
    </div>
  );
};

export default NotificationTab;
