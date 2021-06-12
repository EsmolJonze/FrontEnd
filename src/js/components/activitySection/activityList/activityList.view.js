import React, { useMemo, Fragment } from 'react';
import { format, isSameDay, parse } from 'date-fns';
import { getValueFromLogicRole } from '../../../utils/bobjects.utils';
import styles from './activityList.module.css';
import { Icon, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { generateDatePrefix, getDateTimestampString } from '../../../utils/dates.utils';
import ActivityItem from '../activityItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useActiveActivitiesPage } from '../../../hooks/useActiveActivities';
import ActivitiesPlaceholder from '../activitiesPlaceholder';
import MeetingResult from '../../meetingResult';
import { useMeetingResult } from '../../../hooks';

const appendDates = (items, dateLogicRole) =>
  items.map((item, index) => {
    const date = new Date(getValueFromLogicRole(item, dateLogicRole));
    const previous = items[index - 1];
    const previousItemDate = previous && new Date(getValueFromLogicRole(previous, dateLogicRole));
    const formattedDay = format(date, 'MMMM do, yyyy');
    const dateDay = parse(formattedDay, 'MMMM do, yyyy', new Date());
    const hashDate = getDateTimestampString(date);
    return {
      ...item,
      activityDate: {
        isFirstOfDay: !previousItemDate || !isSameDay(date, previousItemDate),
        day: dateDay,
        formattedDate: formattedDay,
        prefix: generateDatePrefix(dateDay),
        hashDate,
      },
    };
  });

const ActivityList = ({ bobjects, pinnedBobjects }) => {
  const { loadNextPage, hasNextPage } = useActiveActivitiesPage();
  const filteredBobjects = useMemo(() => appendDates(bobjects, 'ACTIVITY__TIME'), [bobjects]);
  const { isOpen: isMeetingResultOpen, closeMeetingResult } = useMeetingResult();

  return (
    <InfiniteScroll
      dataLength={bobjects.length}
      className={styles._container}
      hasMore={hasNextPage}
      loader={<ActivitiesPlaceholder visible />}
      next={loadNextPage}
      scrollableTarget="content"
      scrollThreshold={0.75}
    >
      {pinnedBobjects.length > 0 && (
        <Fragment>
          <header className={styles._header}>
            <Text color="peanut" size="m" inline weight="medium">
              <div className={styles._pinned_icon_container}>
                <Icon name="pin" size={20} color="softPeanut" />
              </div>
              Pinned
            </Text>
          </header>
          {pinnedBobjects.map(bobject => (
            <ActivityItem bobject={bobject} pinned />
          ))}
        </Fragment>
      )}
      {filteredBobjects.map((bobject, index) => {
        const nextBobject = filteredBobjects[index + 1];
        const showNextLine = nextBobject && !nextBobject?.activityDate.isFirstOfDay;
        return (
          <Fragment key={bobject.id.value}>
            {bobject.activityDate.isFirstOfDay && (
              <header className={styles._header} id={bobject.activityDate.hashDate}>
                <Text color="peanut" weight="medium" size="m" inline>
                  {bobject.activityDate.prefix}
                </Text>
                <Text color="softPeanut" size="m" inline>
                  {bobject.activityDate.formattedDate}
                </Text>
              </header>
            )}
            <ActivityItem bobject={bobject} showNextLine={showNextLine} />
          </Fragment>
        );
      })}
      {isMeetingResultOpen && <MeetingResult handleClose={closeMeetingResult} />}
    </InfiniteScroll>
  );
};

export default ActivityList;
