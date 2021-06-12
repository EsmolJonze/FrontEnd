import React, { createContext, useContext } from 'react';
import { useCadenceReducer } from './cadenceTable.reducer';
import { cadenceTableActions } from './cadenceTable.types';

const CadenceContext = createContext();

export const CadenceContextProvider = ({ children }) => {
  const [state, dispatch] = useCadenceReducer();
  return <CadenceContext.Provider value={{ state, dispatch }}>{children}</CadenceContext.Provider>;
};

export const useCadenceContext = () => {
  const { state, dispatch } = useContext(CadenceContext);

  return {
    state,
    dispatch,
    handleChangeActivityTimewindow: value =>
      dispatch({
        type: cadenceTableActions.CADENCE_TABLE_CHANGE_TIMEWINDOW_FILTER,
        payload: value,
      }),
    goToToday: () => {
      dispatch({ type: cadenceTableActions.CADENCE_TABLE_GO_TODAY });
    },
    updateDisplayPositions: (start, end) =>
      dispatch({
        type: cadenceTableActions.CADENCE_TABLE_UPDATE_POSITIONS,
        payload: { start, end },
      }),
    updateDaysShown: days =>
      dispatch({ type: cadenceTableActions.CADENCE_TABLE_SET_EXTRA_DAYS, payload: days }),
    refreshDisplay: () => dispatch({ type: cadenceTableActions.CADENCE_TABLE_REFRESH }),
  };
};
