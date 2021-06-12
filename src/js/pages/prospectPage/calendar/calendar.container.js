import React from 'react';
import { CalendarContextProvider } from './calendarContext/calendarContext.provider';
import Calendar from './calendar.view';

const CalendarContainer = props => (
  <CalendarContextProvider>
    <Calendar {...props} />
  </CalendarContextProvider>
);

export default CalendarContainer;
