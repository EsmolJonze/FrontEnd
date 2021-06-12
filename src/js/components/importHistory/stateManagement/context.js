import React, { createContext, useContext } from 'react';
import useImportHistoryReducer from './reducer';

const ImportHistoryContext = createContext();

export const ImportHistoryContextProvider = ({ children }) => {
  const [state, dispatch] = useImportHistoryReducer();
  return (
    <ImportHistoryContext.Provider value={{ state, dispatch }}>
      {children}
    </ImportHistoryContext.Provider>
  );
};

export const useImportHistoryContext = () => useContext(ImportHistoryContext);
