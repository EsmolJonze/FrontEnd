import { calendarActions } from './calendarContext.types';
import {
  firstWeekOfNextMonth as firstWeekOfNextMonthFn,
  intervalDaysOfMonth,
  lastWeekOfPrevMonth as lastWeekOfPrevMonthFn,
} from '../../../../utils/dates.utils';
import { schemaBuilder } from './calendarContext.utils';

const generateCalendarProps = date => ({
  date,
  daysOfMonth: intervalDaysOfMonth({ date }),
  lastWeekOfPrevMonth: lastWeekOfPrevMonthFn({ date }),
  firstWeekOfNextMonth: firstWeekOfNextMonthFn({ date }),
  schema: schemaBuilder({ date }),
  taskPerDay: undefined,
});

export const CalendarInitialState = generateCalendarProps(new Date());

export const CalendarReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case calendarActions.CALENDAR_UPDATE_DATE: {
      const { date } = action;

      return {
        ...state,
        ...generateCalendarProps(date),
      };
    }
    case calendarActions.CALENDAR_SET_TASKS: {
      const taskPerDay = action.payload;

      return {
        ...state,
        taskPerDay,
      };
    }
    default:
      throw new Error(`Action type ${type} not supported`);
  }
};
