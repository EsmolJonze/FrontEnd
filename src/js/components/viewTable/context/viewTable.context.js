import React, { createContext, useContext } from 'react';
import { useViewTableReducer } from './viewTable.reducer';

const ViewTableContext = createContext();

export const ViewTableContextProvider = ({ children }) => {
  const [state, dispatch] = useViewTableReducer();
  return (
    <ViewTableContext.Provider value={{ state, dispatch }}>{children}</ViewTableContext.Provider>
  );
};

export const useViewTableContext = () => useContext(ViewTableContext);
