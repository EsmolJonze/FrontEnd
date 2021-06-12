import React, { createContext, useContext, useEffect, useState } from 'react';
import { useQueryStringState } from '../queryStringState/useQueryStringState';
import { ServiceApi } from '../../misc/api/service';
import { generateQueryFromFilters } from '../../utils/queries.utils';
import isEqual from 'lodash/isEqual';

const initialViewState = {
  tags: [],
  visibility: undefined,
  name: '',
  views: [],
};

const requestViewById = viewId =>
  ServiceApi.request({
    url: `/service/view/bobjectview/${viewId}`,
    method: 'GET',
  });

const requestViewByType = viewType =>
  ServiceApi.request({
    url: `/service/view/bobjectview/type/${viewType}`,
    method: 'GET',
  });

const BobjectTableContext = createContext();

const BobjectTableProvider = ({ children }) => {
  const [stateViewType, setViewType] = useState();

  const [initialStateQuery, setInitialStateQuery] = useState(null);
  const [initialStateColumns, setInitialStateColumns] = useState(null);
  const [isRawBobjectTable, setIsRawBobjectTable] = useState(false);

  const [stateQuery, setQuery] = useQueryStringState(
    'query',
    {},
    string => (string ? JSON.parse(decodeURI(string.replace(/&/g, '##AND##'))) : string),
    q => JSON.stringify(q),
  );
  const [stateColumns, setColumns] = useQueryStringState('columns', undefined, string =>
    string ? JSON.parse(string) : string,
  );
  const [stateSort, setSort] = useQueryStringState('sort', undefined);
  const [statePage, setPage] = useQueryStringState('paginationPage', '0');
  const [statePageSize, setPageSize] = useQueryStringState('pageSize', 50);
  const [stateDirection, setDirection] = useQueryStringState('direction', 'ASC');
  const [stateViewId, setViewId] = useQueryStringState('viewId', undefined);
  const [isEmptyFetch, setIsEmptyFetch] = useState(false);
  const [viewState, setViewState] = useState(initialViewState);
  const [bobjectType, setBobjectType] = useState(null);
  const [isLoadingView, setIsLoadingView] = useState(false);
  const [isTableLoaded, setIsTableLoaded] = useState(false);
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    let hasChanges = false;
    if (stateColumns && initialStateColumns) {
      hasChanges = !isEqual(stateColumns, initialStateColumns);
    }
    if (initialStateQuery) {
      hasChanges = hasChanges || !isEqual(stateQuery, initialStateQuery);
    }
    setIsModified(hasChanges);
  }, [initialStateColumns, initialStateQuery, stateColumns, stateQuery]);

  const updateQueryIfNeeded = newQuery => {
    if (isEqual(stateQuery, {})) {
      setQuery(newQuery);
      setIsTableLoaded(true);
    } else if (!isEqual(stateQuery, {}) && !isEqual(newQuery, stateQuery)) {
      setIsModified(true);
    }
  };

  const loadViewFromPayload = payload => {
    setIsLoadingView(false);
    setIsTableLoaded(true);
    const queryFromFilters = generateQueryFromFilters(payload?.bobjectViewFilters);
    const columnsFromView = payload?.bobjectViewColumns.map(c => c.id);
    if (!payload) {
      setIsEmptyFetch(true);
    }

    if (isEqual(stateQuery, {})) {
      setQuery(queryFromFilters);
      setInitialStateQuery(queryFromFilters);
    } else if (!isEqual(queryFromFilters, stateQuery)) {
      setInitialStateQuery(stateQuery);
      setIsModified(true);
    }
    if (!stateColumns) {
      setColumns(columnsFromView);
      setInitialStateColumns(columnsFromView);
    } else if (!isEqual(columnsFromView, stateColumns)) {
      setInitialStateColumns(stateColumns);
      setIsModified(true);
    }
    setSort(payload?.bobjectView.sort);
    setDirection(payload?.bobjectView.sortDirection);

    setViewState({
      tags: payload?.bobjectView.tags,
      name: payload?.bobjectView.name,
      views: payload?.views,
      visibility: payload?.bobjectView.visibility,
    });
    if (payload) {
      setViewType(payload.bobjectView.viewType);
    }
  };

  const configureAsRawBobjectTable = () => {
    setIsRawBobjectTable(true);
    setIsTableLoaded(true);
  };

  const resetToInitialState = () => {
    setQuery(initialStateQuery);
    setColumns(initialStateColumns);
  };

  return (
    <BobjectTableContext.Provider
      value={{
        bobjectType,
        columns: stateColumns,
        configureAsRawBobjectTable,
        direction: stateDirection,
        editionMode: isModified ? 'SAVE' : 'EDIT',
        isEmptyFetch,
        isModified,
        isTableLoaded,
        isRawBobjectTable,
        initialStateQuery,
        initialStateColumns,
        loadViewFromPayload,
        page: parseInt(statePage, 10),
        pageSize: parseInt(statePageSize, 10),
        query: stateQuery,
        setBobjectType,
        setColumns,
        setDirection,
        setInitialStateColumns,
        setInitialStateQuery,
        setIsLoadingView,
        setIsModified,
        setIsTableLoaded,
        setPage,
        setPageSize,
        setQuery,
        setSort,
        setViewId,
        setViewState,
        setViewType,
        sort: stateSort,
        resetToInitialState,
        updateQueryIfNeeded,
        view: {
          id: stateViewId,
          isLoading: isLoadingView,
          name: viewState.name,
          tags: viewState.tags,
          views: viewState.views,
          visibility: viewState.visibility,
        },
        viewType: stateViewType,
      }}
    >
      {children}
    </BobjectTableContext.Provider>
  );
};

export const bobjectTableContextWrapper = Component => props => (
  <BobjectTableProvider>
    <Component {...props} />
  </BobjectTableProvider>
);

export const useBobjectTable = () => {
  const bobjectTableContext = useContext(BobjectTableContext);

  if (bobjectTableContext === undefined) {
    throw new Error('useBobjectTable should be called inside a BobjectTableProvider');
  }

  useEffect(() => {
    if (!bobjectTableContext.view.isLoading && !bobjectTableContext.isTableLoaded) {
      if (bobjectTableContext.view.id && !bobjectTableContext.view.isLoading) {
        requestViewById(bobjectTableContext.view.id).then(bobjectTableContext.loadViewFromPayload);
      } else if (bobjectTableContext.viewType && !bobjectTableContext.view.isLoading) {
        requestViewByType(bobjectTableContext.viewType).then(payload =>
          bobjectTableContext.loadViewFromPayload(payload[0]),
        );
      }
    }
  }, [bobjectTableContext.view.id, bobjectTableContext.viewType]);

  return bobjectTableContext;
};
