import React, { createContext, useReducer } from 'react';
import { CalendarReducer, CalendarInitialState } from './calendarContext.reducer';

export const CalendarContext = createContext();

export const CalendarContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CalendarReducer, CalendarInitialState);
  return (
    <CalendarContext.Provider value={{ state, dispatch }}>{children}</CalendarContext.Provider>
  );
};
