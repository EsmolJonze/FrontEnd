import React, { createContext, useContext } from 'react';
import { useTableReducer } from './bobjectTable.reducer';
import { useLocation } from 'react-router';
import { queryGenerator, queryToParams } from '../../../misc/urlQueryUtils';
import { bobjectTableActions } from './bobjectTable.types';
import { useRouter } from '../../../hooks';

const TableContext = createContext();

export const TableContextProvider = ({ children }) => {
  const [state, dispatch] = useTableReducer();
  return <TableContext.Provider value={{ state, dispatch }}>{children}</TableContext.Provider>;
};

/*
 Function to update the url search string. Usage:
 updateUrl({ ...state, columnsShown }, location, history);
 */
const updateUrl = ({ state, location, history, isViewModified, replace = false }) => {
  const urlParams = queryToParams(location.search);
  const newUrlParams = {
    ...urlParams,
    query: JSON.stringify(state.query),
    columns: state.columnsShown || urlParams.columns,
    sort: state.sort,
    direction: state.direction,
    isViewModified: isViewModified || urlParams.isViewModified,
  };
  const search = queryGenerator(newUrlParams, location.search);
  if (search !== location.search) {
    if (replace) {
      history.replace({ search });
    } else {
      history.push({ search });
    }
  }
};

const cleanupQuery = query =>
  Object.entries(query)
    .filter(
      entry => entry[1] !== undefined && entry[1] !== null && entry[1] !== '' && entry[1] !== [],
    )
    .map(([key, value]) => ({ [key]: value }))
    .reduce((a, b) => ({ ...a, ...b }), {});

export const useTableContext = () => {
  const { state, dispatch } = useContext(TableContext);
  // Those two hooks should stay at first level, not within functions. Rules of hooks.
  const { history } = useRouter();
  const location = useLocation();

  return {
    state,
    dispatch,
    setEditionMode: editionMode =>
      dispatch({ type: bobjectTableActions.BOBJECT_TABLE_SET_EDITION_MODE, editionMode }),
    /* Use those methods to avoid using directly the dispatch. Those methods are and can be decorated to
     * implement further behaviour, like mirror the state to the url search string. */
    setColumnsShown: (columnsShown, isViewModified) => {
      updateUrl({ state: { ...state, columnsShown }, location, history, isViewModified });
    },
    setQuery: (query, isViewModified, setDefaultQuery = false) => {
      query = cleanupQuery(query || {});
      dispatch({ type: bobjectTableActions.BOBJECT_TABLE_SET_QUERY, query, setDefaultQuery });
      updateUrl({ state: { ...state, query }, location, history, isViewModified });
    },
    setSort: (field, direction) => {
      updateUrl({ state: { ...state, sort: field, direction }, location, history });
    },
    setColumnsQuerySort: (
      columnsShown,
      query,
      sort,
      direction,
      setUrl = false,
      viewId = undefined,
    ) => {
      dispatch({
        type: bobjectTableActions.BOBJECT_TABLE_SET_CONFIG,
        query: query || {},
        columnsShown,
        sort,
        direction,
        viewId,
      });
      if (setUrl) {
        updateUrl({
          state: { ...state, columnsShown, query, sort, direction },
          location,
          history,
        });
      }
    },
    setViewId: viewId => dispatch({ type: bobjectTableActions.BOBJECT_TABLE_SET_VIEW_ID, viewId }),
    setView: (payload, columns, query) =>
      dispatch({ type: bobjectTableActions.BOBJECT_TABLE_SET_VIEW, payload, columns, query }),
    setConfigure: (bobjectType, requestedQuery) => {
      dispatch({
        type: bobjectTableActions.BOBJECT_TABLE_RESET_CONFIG,
        bobjectType,
        query: requestedQuery || {},
      });
    },
    setProvisionalRemoveRow: id => {
      dispatch({
        type: bobjectTableActions.BOBJECT_TABLE_REMOVE_PROVISIONAL_ROW,
        id,
      });
    },
  };
};
