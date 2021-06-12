import React from 'react';
import classnames from 'clsx';
import { isSameDay, isSameMonth } from 'date-fns';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { useCalendarContext } from '../calendarContext';
import styles from './dayCell.module.css';
import { isBeforeToday } from '../../../../utils/dates.utils';

const DayCell = ({
  date: {
    value: dateProp,
    day: { number: dayNumber },
    tasks: { number: tasksNumber },
    isWeekend,
    isCurrentMonth,
  },
}) => {
  const {
    state: { date: currentDate },
  } = useCalendarContext();

  const isCurrentMonthLaborableDay = !(isWeekend || !isCurrentMonth);
  const isToday = isSameDay(dateProp, new Date()) && isSameMonth(dateProp, currentDate);
  const beforeToday = isBeforeToday(dateProp);

  let colorDayName = !isCurrentMonthLaborableDay ? 'softPeanut' : 'peanut';
  if (isToday) {
    colorDayName = 'verySoftBloobirds';
  }

  const colorTaskName = isToday ? 'white' : 'bloobirds';
  return (
    <div
      className={classnames(styles._container, {
        [styles._selected]: isToday,
        [styles._pastDate]: beforeToday,
      })}
    >
      <span className={styles._day}>
        <Text size="xs" htmlTag="span" color={colorDayName}>
          {dayNumber}
        </Text>
      </span>
      {isCurrentMonthLaborableDay && (
        <span className={styles._task}>
          <Text size="s" htmlTag="span" color={colorTaskName}>
            {tasksNumber}
          </Text>
        </span>
      )}
    </div>
  );
};

export default React.memo(DayCell);
