import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Icon,
  Item,
  Select,
  Text,
  useToasts,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { useEntity, useActiveUser, useUserDefaultNotifications } from '../../../hooks';
import NoPermissionsPage from '../../noPermissionsPage';
import styles from './notificationPage.module.css';
import SessionManagerFactory from '../../../misc/session';

const NotificationsPage = () => {
  const roleManager = SessionManagerFactory().getRoleManager();
  const { createToast } = useToasts();
  const { userDefaultNotifications, saveDefaultUsers } = useUserDefaultNotifications();
  const { activeAccount } = useActiveUser();
  const [INBLeadWithoutCompanyUser, setINBLeadWithoutCompanyUser] = useState();
  const [INBActivityUser, setINBActivityUser] = useState();
  const [errors, setErrors] = useState();
  const bobjectGlobalPicklist = useEntity('bobjectGlobalPicklists');
  const userGlobalPicklist = bobjectGlobalPicklist?.findByLogicRole('USER');
  const bobjectPicklistFieldValues = useEntity('bobjectPicklistFieldValues');
  const userList = bobjectPicklistFieldValues?.filterBy(
    'bobjectGlobalPicklist',
    userGlobalPicklist?.id,
  );
  const hasErrors = errors && Object.keys(errors).some(key => errors[key]);
  const hasChanges =
    INBLeadWithoutCompanyUser?.userId !== userDefaultNotifications?.NEW_INBOUND_LEAD?.userId ||
    INBActivityUser?.userId !== userDefaultNotifications?.NEW_INBOUND?.userId;

  useEffect(() => {
    if (userDefaultNotifications) {
      setINBLeadWithoutCompanyUser(userDefaultNotifications.NEW_INBOUND_LEAD);
      setINBActivityUser(userDefaultNotifications.NEW_INBOUND);
    }
  }, [userDefaultNotifications]);

  const saveDefaultUser = () => {
    saveDefaultUsers(
      activeAccount?.id,
      {
        NEW_INBOUND_LEAD: INBLeadWithoutCompanyUser,
        NEW_INBOUND: INBActivityUser,
      },
      () => {
        createToast({
          type: 'success',
          message: 'Notification settings have been successfully updated!',
        });
      },
    );
  };

  return roleManager.isAccountAdmin() ? (
    <div className={styles._container}>
      <div className={styles._title}>
        <Text htmlTag="h3" size="xl" color="peanut">
          Notifications
        </Text>

        <div className={styles._wrapper}>
          <div className={styles._subtitle}>
            <Icon name="bell" />
            <Text htmlTag="h4" size="l" color="peanut">
              Choose who to notify
            </Text>
          </div>

          <div className={styles._content}>
            <div className={styles._description}>
              <Text size="s" color="softPeanut">
                These defaults will be applied to the entire account.
              </Text>
              <Text size="s" color="softPeanut">
                Choose the topics you are interested in and select who should receive notifications
                about them.
              </Text>
            </div>

            <Text size="m" weight="bold">
              Inbound notifications
            </Text>

            <div className={styles._section_wrapper}>
              <div className={styles._checkbox_wrapper}>
                <Checkbox
                  checked={!!INBLeadWithoutCompanyUser && INBLeadWithoutCompanyUser?.userId !== ''}
                  onClick={() => {
                    if (!INBLeadWithoutCompanyUser?.userId) {
                      setErrors({ ...errors, INBQ1: true });
                    } else {
                      setINBLeadWithoutCompanyUser({
                        ...INBLeadWithoutCompanyUser,
                        userId: '',
                      });
                    }
                  }}
                >
                  <div>
                    <Text size="s">
                      A new inbound Lead has been created without company or non assigned company
                    </Text>
                    <Text size="xs" color="softPeanut">
                      One user receive a notification when an new lead is created in Bloobirds
                      without a company or with a non-assigned company.
                    </Text>
                  </div>
                </Checkbox>
              </div>

              <div className={styles._select_wrapper}>
                <Text color="softPeanut" size="m" weight="bold">
                  Notify
                </Text>
                <Icon name="arrowRight" color="softPeanut" />
                <Select
                  dataTest={'inboundLeadNotification'}
                  width="300px"
                  value={INBLeadWithoutCompanyUser?.userId || ''}
                  onChange={value => {
                    setINBLeadWithoutCompanyUser({
                      ...INBLeadWithoutCompanyUser,
                      userId: value,
                    });
                    setErrors({ ...errors, INBQ1: false });
                  }}
                  error={errors?.INBQ1 && 'Select a user in order to active the notification'}
                >
                  {userList &&
                    userList.map(user => (
                      <Item dataTest={user?.value} value={user?.id}>
                        {user?.value}
                      </Item>
                    ))}
                </Select>
              </div>
            </div>
            <hr className={styles._separator} />
            <div className={styles._section_wrapper}>
              <div className={styles._checkbox_wrapper}>
                <Checkbox
                  checked={!!INBActivityUser && INBActivityUser?.userId !== ''}
                  onClick={() => {
                    if (!INBActivityUser) {
                      setErrors({ ...errors, INBQ2: true });
                    } else {
                      setINBActivityUser({
                        ...INBActivityUser,
                        userId: '',
                      });
                    }
                  }}
                >
                  <div>
                    <Text size="s">
                      A new inbound activity in a lead without company or non assigned company
                    </Text>
                    <Text size="xs" color="softPeanut">
                      One user receive a notification when an existing lead without company or in a
                      non assgined company performs an inbound activity. E.g: New demo
                    </Text>
                  </div>
                </Checkbox>
              </div>

              <div className={styles._select_wrapper}>
                <Text color="softPeanut" size="m" weight="bold">
                  Notify
                </Text>
                <Icon name="arrowRight" color="softPeanut" />
                <Select
                  width="300px"
                  value={INBActivityUser?.userId || ''}
                  onChange={value => {
                    setINBActivityUser({
                      ...INBActivityUser,
                      userId: value,
                    });
                    setErrors({ ...errors, INBQ2: false });
                  }}
                  error={errors?.INBQ2 && 'Select a user in order to active the notification'}
                >
                  {userList && userList.map(user => <Item value={user?.id}>{user?.value}</Item>)}
                </Select>
              </div>
            </div>
          </div>
          <Button
            dataTest={'notificationSettingsSave'}
            onClick={saveDefaultUser}
            disabled={hasErrors || !hasChanges}
          >
            SAVE
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <NoPermissionsPage />
  );
};

export default NotificationsPage;
