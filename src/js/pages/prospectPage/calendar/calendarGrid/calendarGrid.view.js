import React, { useEffect, useCallback, useState } from 'react';
import { buildCalendarService, useAggregationCalendar } from './calendarGrid.services';
import DayCell from './dayCell.view';
import { useCalendarContext } from '../calendarContext';
import styles from './calendarGrid.module.css';
import { useEntity } from '../../../../hooks/entities/useEntity';

const CalendarGrid = () => {
  const {
    state: { daysOfMonth, schema, firstWeekOfNextMonth, lastWeekOfPrevMonth, taskPerDay },
  } = useCalendarContext();

  const useCalendarBuilder = useCallback(
    () =>
      buildCalendarService({
        daysOfMonth,
        schema,
        lastWeekOfPrevMonth,
        firstWeekOfNextMonth,
        tasks: taskPerDay,
      }),
    [daysOfMonth, schema, firstWeekOfNextMonth, lastWeekOfPrevMonth, taskPerDay],
  );

  const [calendar, setCalendar] = useState();
  const bobjectFields = useEntity('bobjectFields');
  const bobjectPicklistFieldValues = useEntity('bobjectPicklistFieldValues');
  useAggregationCalendar(bobjectFields, bobjectPicklistFieldValues);

  useEffect(() => {
    if (taskPerDay) {
      setCalendar(
        useCalendarBuilder({
          daysOfMonth,
          schema,
          lastWeekOfPrevMonth,
          firstWeekOfNextMonth,
          tasks: taskPerDay,
        }),
      );
    }
  }, [daysOfMonth, schema, firstWeekOfNextMonth, lastWeekOfPrevMonth, taskPerDay]);

  return (
    <div className={styles._container}>
      {calendar?.map((week, index) => {
        const key = `week-${index}`;
        return (
          <div key={key} className={styles._week}>
            {week.map(date => (
              <DayCell key={date.value} date={date} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(CalendarGrid);
