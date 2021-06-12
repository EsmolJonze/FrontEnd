import { atom, useRecoilState } from 'recoil';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { useEffect } from 'react';
import { useActiveUser } from './useActiveUser';

const userDefaultNotificationsAtom = atom({
  key: 'defaultNotificationUsersAtom',
  default: {
    list: null,
    loaded: false,
  },
});

const fetchUserDefaultNotification = (accountId, restApi) =>
  restApi.service('userDefaultNotifications').search({
    page: 0,
    query: {
      'account.id': accountId,
    },
  });

const addUserDefaultNotification = (accountId, notificationType, restApi, notificationData) =>
  restApi.service('userDefaultNotifications').create({
    user: `/users/${notificationData?.userId}`,
    account: `/accounts/${accountId}`,
    notificationType,
  });

const updateUserDefaultNotification = (accountId, notificationType, restApi, notificationData) =>
  restApi.service('userDefaultNotifications').partialUpdate(notificationData?.notificationId, {
    user: `/users/${notificationData?.userId}`,
    account: `/accounts/${accountId}`,
    notificationType,
  });

const deleteUserDefaultNotification = (restApi, notificationData) =>
  restApi.service('userDefaultNotifications').delete(notificationData?.notificationId);

export const useUserDefaultNotifications = () => {
  const { restApi } = useBloobirdsApiStateContext();
  const { activeAccount } = useActiveUser();
  const [userDefaultNotifications, setUserDefaultNotifications] = useRecoilState(
    userDefaultNotificationsAtom,
  );

  useEffect(() => {
    if (!userDefaultNotifications.loaded && activeAccount?.id) {
      fetchUserDefaultNotification(activeAccount?.id, restApi).then(response => {
        const defaultUsers = response._embedded.userDefaultNotifications;
        const users = {};
        defaultUsers.forEach(user => {
          users[user.notificationType] = {
            userId: user.user,
            notificationId: user.id,
          };
        });
        setUserDefaultNotifications({
          list: users,
          loaded: true,
        });
      });
    }
  }, [userDefaultNotifications.loaded, activeAccount?.id]);

  const saveDefaultUsers = (accountId, data, callback = () => {}) => {
    if (data) {
      Object.keys(data).forEach(notification => {
        const existsNotification =
          data[notification] &&
          userDefaultNotifications.list[notification]?.userId !== data[notification]?.userId;
        const isUpdating = userDefaultNotifications.list[notification];
        const isDeleting = !data[notification]?.userId;

        if (existsNotification) {
          if (isUpdating && !isDeleting) {
            updateUserDefaultNotification(
              accountId,
              notification,
              restApi,
              data[notification],
            ).then(response => {
              setUserDefaultNotifications({
                list: {
                  ...userDefaultNotifications.list,
                  [response?.notificationType]: {
                    userId: response?.user,
                    notificationId: response?.id,
                  },
                },
              });
              callback();
            });
          } else if (isDeleting) {
            deleteUserDefaultNotification(restApi, data[notification]).then(() => {
              const newNotificationsList = { ...userDefaultNotifications.list };
              delete newNotificationsList[notification];

              setUserDefaultNotifications({
                list: newNotificationsList,
              });
              callback();
            });
          } else {
            addUserDefaultNotification(accountId, notification, restApi, data[notification]).then(
              response => {
                setUserDefaultNotifications({
                  list: {
                    ...userDefaultNotifications.list,
                    [response?.notificationType]: {
                      userId: response?.user,
                      notificationId: response?.id,
                    },
                  },
                });
                callback();
              },
            );
          }
        }
      });
    }
  };

  return {
    userDefaultNotifications: userDefaultNotifications.list,
    saveDefaultUsers,
  };
};
