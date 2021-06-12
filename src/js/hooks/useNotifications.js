import { ServiceApi } from '../misc/api/service';
import { useSWRInfinite } from 'swr';
import { useNotificationCount } from './useNotificationsCount';

const fetchNotifications = async url => {
  const response = await ServiceApi.request({
    url,
    method: 'GET',
  });
  return response.content;
};

const fetchDeleteNotification = id =>
  ServiceApi.request({
    url: `/notifications/${id}`,
    method: 'DELETE',
  });

export const useNotificationDelete = () => {
  const { reloadNotificationCount } = useNotificationCount();
  return async id => {
    await fetchDeleteNotification(id);
    await reloadNotificationCount();
  };
};

const getKey = category => (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;
  return `/notifications?category=${category}&page=${pageIndex}&size=9`;
};

export const useNotifications = category => {
  const { reloadNotificationCount } = useNotificationCount();
  const { data, size, setSize, mutate } = useSWRInfinite(getKey(category), fetchNotifications);

  const removeNotification = async id => {
    await fetchDeleteNotification(id);
    const notifications = data.map(subarray =>
      subarray.filter(notification => notification.id !== id),
    );
    await mutate(notifications, false);
  };

  const markAsReadByCategory = async () => {
    await ServiceApi.request({
      url: `/notifications/markCategoryAsRead?category=${category}`,
      method: 'GET',
    });
    const notifications = data.map(subarray =>
      subarray.map(notification => ({ ...notification, read: true })),
    );
    await mutate(notifications, false);
    await reloadNotificationCount();
  };

  const markAsReadById = async id => {
    await ServiceApi.request({
      url: `/notifications/markAsRead/${id}`,
      method: 'GET',
    });
    const notifications = data.map(subarray =>
      subarray.map(notification => {
        if (notification.id === id) {
          return { ...notification, read: true };
        }
        return notification;
      }),
    );
    await mutate(notifications, false);
    await reloadNotificationCount();
  };

  return {
    notifications: data?.flat() || [],
    isLastPage: data && data[data.length - 1].length < 9,
    isLoading: !data,
    loadMore: () => setSize(size + 1),
    removeNotification,
    markAsReadById,
    markAsReadByCategory,
  };
};
