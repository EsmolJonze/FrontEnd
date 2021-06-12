import React from 'react';
import styles from './activityItem.module.css';
import ActivityBody from './activityBody';
import CardStatistics from './cardStatistics';
import ActivityHeader from './activityHeader';
import { useHover } from '../../../hooks';
import classNames from 'clsx';

const ActivityItem = ({ bobject, showNextLine, pinned }) => {
  const [ref, isHovered] = useHover();
  const containerClasses = classNames(styles._container, {
    [styles._container__pinned]: pinned,
  });

  return (
    <div ref={ref} className={styles._card_summary}>
      <div className={containerClasses}>
        <div className={styles._main}>
          <ActivityHeader bobject={bobject} hovered={isHovered} />
          <ActivityBody bobject={bobject} />
        </div>
        <footer>
          <CardStatistics bobject={bobject} />
        </footer>
      </div>
      {showNextLine && <div className={styles._dashed_line} />}
    </div>
  );
};

export default ActivityItem;
