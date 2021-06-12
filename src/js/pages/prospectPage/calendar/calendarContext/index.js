import { useContext } from 'react';
import { CalendarContext } from './calendarContext.provider';

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);

  if (!context) {
    throw new Error('useCalendarContext must be used within CalendarContext');
  }

  return context;
};
