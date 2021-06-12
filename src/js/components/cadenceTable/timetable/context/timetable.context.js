import React, { createContext, useContext } from 'react';
import { useTimeTableReducer } from './timetable.reducer';

const TimeTableContext = createContext();

export const TimeTableContextProvider = ({ children }) => {
  const [state, dispatch] = useTimeTableReducer();
  return (
    <TimeTableContext.Provider value={{ state, dispatch }}>{children}</TimeTableContext.Provider>
  );
};

export const useTimeTableContext = () => {
  const { state, dispatch } = useContext(TimeTableContext);

  return {
    timeTableState: state,
    timeTableDispatch: dispatch,
  };
};
