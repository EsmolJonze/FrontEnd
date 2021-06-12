import React from 'react';
import { Text, Button } from '@bloobirds-it/bloobirds-platform-component-library';
import ActivityList from './activityList';
import styles from './activitySection.module.css';
import { useActiveActivities, useActiveActivitiesFilters } from '../../hooks/useActiveActivities';
import ActivitiesPlaceholder from './activitiesPlaceholder';
import ActivityFilters from './activityFilters';

const EmptyList = () => {
  const { resetAllFilters } = useActiveActivitiesFilters();
  return (
    <div className={styles._no_match}>
      <Text htmlTag="h2" color="peanut">
        No results were found with the current filters
      </Text>
      <Text color="softPeanut" size="m">
        Try modifying you search criteria
      </Text>
      <Button onClick={resetAllFilters} variant="secondary" color="bloobirds">
        Clear filters
      </Button>
    </div>
  );
};

const OnlyStatusActivitiesLeft = () => {
  const { setTypeFilter } = useActiveActivitiesFilters();
  return (
    <div className={styles._no_match}>
      <Text htmlTag="h2" color="peanut">
        No activities for these activity types were found
      </Text>
      <Text color="softPeanut" size="m">
        Do you wish to view the activities of type Status?
      </Text>
      <Button onClick={() => setTypeFilter([])} variant="secondary" color="bloobirds">
        View activities
      </Button>
    </div>
  );
};

const ActivityContent = () => {
  const { activities, pinnedActivities, loading } = useActiveActivities({
    shouldCreateSubscription: true,
  });
  const { usingDefaultFilters } = useActiveActivitiesFilters();

  if (!loading && activities.length === 0) {
    return usingDefaultFilters ? <OnlyStatusActivitiesLeft /> : <EmptyList />;
  }

  return (
    <>
      <ActivitiesPlaceholder visible={loading} />
      <ActivityList bobjects={activities} pinnedBobjects={pinnedActivities} />
    </>
  );
};

const ActivitySection = () => (
  <section id="activity-tab" className={styles._section}>
    <div className={styles._container}>
      <ActivityFilters />
      <ActivityContent />
    </div>
  </section>
);

export default ActivitySection;
