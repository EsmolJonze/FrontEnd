import React from 'react';
import { Tab, TabGroup } from '@bloobirds-it/bloobirds-platform-component-library';
import MessagingTabs from './messagingTabs';
import TasksTab from '../../../components/tasksTab';
import { useActiveFilters, useContactView } from '../../../hooks';
import ActivitySection from '../../../components/activitySection';
import styles from './contactTabs.module.css';

const ContactTabs = () => {
  const { filters } = useActiveFilters();
  const { tab, setTab } = useContactView();

  return (
    <div
      id="contact-tabs"
      className={styles._container}
      data-intercom="activity-messaging-task-tabs"
    >
      <TabGroup value={tab} onClick={setTab}>
        <Tab dataTest="activityContactTab" name="Activity" iconLeft="activity">
          <ActivitySection />
        </Tab>
        <Tab dataTest="messagingContactTab" name="Messaging" iconLeft="file">
          <MessagingTabs />
        </Tab>
        <Tab dataTest="taskContactTab" name="Tasks" iconLeft="calendar">
          <TasksTab lead={filters?.ACTIVITY__LEAD && filters?.ACTIVITY__LEAD[0]} />
        </Tab>
      </TabGroup>
    </div>
  );
};

export default ContactTabs;
