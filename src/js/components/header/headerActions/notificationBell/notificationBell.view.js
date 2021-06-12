import React from 'react';
import styles from './notificationBell.module.css';
import {
  Dropdown,
  Tab,
  TabGroup,
  Text,
  useVisible,
} from '@bloobirds-it/bloobirds-platform-component-library';
import NotificationTab from './notificationTab';
import BellButton from './bellButton';
import { useNotificationCount } from '../../../../hooks/useNotificationsCount';
import useNotificationBell from '../../../../hooks/useNotificationBell';

const TABS = [
  {
    title: 'Updates',
    category: 'UPDATES',
  },
  {
    title: 'Inbound',
    category: 'INBOUND',
  },
  {
    title: 'Calls',
    category: 'CALLS',
  },
  {
    title: 'Email tracking',
    category: 'EMAIL_TRACKING',
  },
];

const BellContent = ({ onCardClick }) => {
  const { category, setCategory, markAsReadByCategory } = useNotificationBell();
  const { unreadByCategory } = useNotificationCount();

  return (
    <div className={styles._wrap}>
      <div className={styles._header_wrapper}>
        <Text color="darkGray">Notifications</Text>
        <div className={styles._link} onClick={markAsReadByCategory}>
          <Text size="xs" color="bloobirds">
            Mark all as read
          </Text>
        </div>
      </div>
      <main className={styles._tabs_container}>
        <TabGroup
          value={TABS.find(tab => tab.category === category).title}
          onClick={title => setCategory(TABS.find(tab => tab.title === title).category)}
        >
          {TABS.map(tab => (
            <Tab
              dataTest={`Notification-${tab.title}`}
              name={tab.title}
              key={tab.category}
              size="xs"
              extraSize="xxs"
              extra={unreadByCategory[tab.category] || undefined}
            >
              <NotificationTab onCardClick={onCardClick} />
            </Tab>
          ))}
        </TabGroup>
      </main>
    </div>
  );
};

const NotificationBell = () => {
  const { ref, visible, setVisible } = useVisible();
  return (
    <Dropdown
      ref={ref}
      arrow={false}
      visible={visible}
      anchor={<BellButton onClick={() => setVisible(!visible)} />}
    >
      <BellContent onCardClick={() => setVisible(false)} />
    </Dropdown>
  );
};

export default NotificationBell;
