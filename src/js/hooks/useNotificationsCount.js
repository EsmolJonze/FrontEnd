import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { ServiceApi } from '../misc/api/service';
import useSWR from 'swr';

const fetchNotificationCount = async url =>
  ServiceApi.request({
    url,
    method: 'GET',
  });

export const useNotificationCount = () => {
  const { data: unreadByCategory, mutate } = useSWR(
    '/notifications/countUnreadByCategory',
    fetchNotificationCount,
  );

  SubscriptionHooks.useWebsocketEventSubscription('notification', () => {
    mutate();
  });

  return {
    totalUnread: Object.values(unreadByCategory || {}).reduce((x, y) => x + y, 0),
    unreadByCategory: unreadByCategory || {},
    reloadNotificationCount: mutate,
  };
};
