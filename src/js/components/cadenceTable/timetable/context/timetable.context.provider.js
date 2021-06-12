import React from 'react';
import { TimeTableContextProvider } from './timetable.context';

export const timeTableContextWrapper = Component => props => (
  <TimeTableContextProvider>
    <Component {...props} />
  </TimeTableContextProvider>
);
