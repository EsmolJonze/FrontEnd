import { calendarActions } from './calendarContext.types';

export const updateDate = (date, dispatch) =>
  dispatch({
    type: calendarActions.CALENDAR_UPDATE_DATE,
    date,
  });
