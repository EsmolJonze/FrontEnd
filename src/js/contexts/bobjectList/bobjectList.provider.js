import reducer from './bobjectList.reducer';
import React, { createContext, useContext, useReducer, useState } from 'react';
import bobjectListActions from './bobjectList.types';

const BobjectListContext = createContext();

export const useBobjectList = () => {
  const context = useContext(BobjectListContext);

  if (!context) {
    throw new Error('useBobjectList must be used within BobjectListProvider');
  }

  return context;
};

export const baseFilters = {
  source: {
    value: [],
    defaultValue: [],
    logicRole: 'COMPANY__SOURCE',
    subqueryLogicRole: 'TASK__COMPANY',
    subquery: true,
  },
  sort: {
    value: {
      field: 'COMPANY__HIGH_PRIORITY',
      direction: 'ASC',
    },
    defaultValue: {
      field: 'COMPANY__HIGH_PRIORITY',
      direction: 'ASC',
    },
    subqueryLogicRole: 'TASK__COMPANY',
    subquery: true,
  },
  hideCompleted: {
    value: false,
    defaultValue: false,
  },
};

export const BobjectListProvider = ({ children, lists, filters }) => {
  const [tabSelected, setTabSelected] = useState(0);
  const initialState = {
    lists: lists?.reduce((acc, list) => {
      acc[list] = {
        list: [],
        numElements: 0,
        page: undefined,
        isLoaded: false,
        loadingPage: false,
      };

      return acc;
    }, {}),
    filters,
    emptyLists: true,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BobjectListContext.Provider
      value={{
        state,
        dispatch,
        setFilter: filterName => payload =>
          dispatch({ type: bobjectListActions.SET_FILTER, filterName, payload }),
        tabSelected,
        setTabSelected,
        nextPage: listName => () => dispatch({ type: bobjectListActions.NEXT_PAGE, listName }),
      }}
    >
      {children}
    </BobjectListContext.Provider>
  );
};
