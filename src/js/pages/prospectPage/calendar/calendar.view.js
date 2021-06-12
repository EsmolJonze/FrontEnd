import React from 'react';
import { IconButton, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { addMonth, formatDate, subMonth } from '../../../utils/dates.utils';
import { useCalendarContext } from './calendarContext';
import { updateDate } from './calendarContext/calendarContext.actions';
import CalendarGrid from './calendarGrid';
import styles from './calendar.module.css';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const Calendar = React.memo(({ tasks }) => {
  const {
    state: { date },
    dispatch,
  } = useCalendarContext();

  return (
    <div data-intercom="prospecting-calendar" className={styles._container}>
      <div className={styles._monthLayout}>
        <IconButton
          size={16}
          color="peanut"
          name="chevronLeft"
          onClick={() => updateDate(subMonth(date), dispatch)}
        />
        <div className={styles._monthText}>
          <Text size="m" color="peanut">
            {formatDate(date, 'MMMM yyyy')}
          </Text>
        </div>
        <IconButton
          size={16}
          color="peanut"
          name="chevronRight"
          onClick={() => updateDate(addMonth(date), dispatch)}
        />
      </div>
      <div className={styles._weekDaysLayout}>
        {weekDays.map(day => (
          <div key={day} className={styles._weekDay}>
            <Text size="xs" htmlTag="span" color="softPeanut">
              {day}
            </Text>
          </div>
        ))}
      </div>
      <CalendarGrid tasks={tasks} />
    </div>
  );
});

export default React.memo(Calendar);
