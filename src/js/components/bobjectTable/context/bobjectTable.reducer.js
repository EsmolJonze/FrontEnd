import { useReducer } from 'react';
import { bobjectTableActions } from './bobjectTable.types';

const initialState = {
  bobjects: undefined,
  columnsShown: undefined,
  direction: 'ASC',
  editionMode: undefined,
  isColumnPopUpOpen: false,
  isSaveViewModalOpen: false,
  query: {},
  sort: undefined,
  requestedQuery: undefined,
  tags: [],
  total: undefined,
  viewCreatedBy: undefined,
  viewId: undefined,
  viewName: undefined,
  views: undefined,
  viewSelected: undefined,
  viewType: undefined,
  viewVisibility: undefined,
};

const transformValues = values => {
  if (
    values[0] !== undefined &&
    values[0].textValue &&
    values[0].textValue !== '__MATCH_EMPTY_ROWS__'
  ) {
    return values[0].textValue?.split(',');
  }
  return values.map(value => value.bobjectPicklistValue);
};

const bobjectTableReducer = (state, action) => {
  switch (action.type) {
    case bobjectTableActions.RESET_TASK_STATE:
    case bobjectTableActions.BOBJECT_TABLE_RESET:
      return { ...initialState };
    case bobjectTableActions.BOBJECT_TABLE_SET_EDITION_MODE:
      return {
        ...state,
        editionMode: action.editionMode,
      };
    case bobjectTableActions.BOBJECT_TABLE_SET_QUERY:
      return {
        ...state,
        query: action.query,
        requestedQuery: action.setDefaultQuery ? action.query : state.requestedQuery,
      };
    case bobjectTableActions.BOBJECT_TABLE_SET_SORT:
      return {
        ...state,
        sort: action.sort,
        direction: action.direction || 'ASC',
      };
    case bobjectTableActions.BOBJECT_TABLE_SET_COLUMNS:
      return {
        ...state,
        columnsShown: action.columnsShown,
      };
    case bobjectTableActions.BOBJECT_TABLE_CLEAN_FILTERS:
      return {
        ...state,
        query: state.requestedQuery,
      };
    case bobjectTableActions.BOBJECT_TABLE_RESET_CONFIG:
      return {
        ...initialState,
        bobjectType: action.bobjectType,
        query: action.query,
        requestedQuery: action.query,
      };
    case bobjectTableActions.BOBJECT_TABLE_SET_VIEW_ID:
      return {
        ...state,
        viewId: action.viewId,
      };
    case bobjectTableActions.BOBJECT_TABLE_LOADED:
      return {
        ...state,
        bobjects: action.payload.contents,
        total: action.payload.totalMatching,
      };
    case bobjectTableActions.BOBJECT_TABLE_UPDATE_PARTIAL_STATE: {
      const { type, ...update } = { ...action };
      return {
        ...state,
        ...update,
      };
    }
    case bobjectTableActions.BOBJECT_TABLE_RETRIEVE_VIEWS:
      return {
        ...state,
        views: action.payload,
      };
    case bobjectTableActions.BOBJECT_TABLE_CHANGE_NAME_VIEW:
      return {
        ...state,
        viewName: action.value,
      };
    case bobjectTableActions.BOBJECT_TABLE_CHANGE_VISIBILITY:
      return {
        ...state,
        viewVisibility: action.value,
      };
    case bobjectTableActions.BOBJECT_TABLE_EDIT_VIEW:
      return {
        ...state,
        isSaveViewModalOpen: false,
        views: state?.views.map(view =>
          view.id === action.payload?.bobjectView.id
            ? { ...view, name: action.payload?.bobjectView.name }
            : view,
        ),
      };
    case bobjectTableActions.BOBJECT_TABLE_OPEN_SAVE_MODAL_VIEW:
      return {
        ...state,
        isSaveViewModalOpen: true,
        viewMode: action.mode,
      };
    case bobjectTableActions.BOBJECT_TABLE_CLOSE_SAVE_MODAL_VIEW:
      return {
        ...state,
        isSaveViewModalOpen: false,
        viewMode: undefined,
      };
    case bobjectTableActions.BOBJECT_TABLE_SET_VIEW:
    case bobjectTableActions.BOBJECT_TABLE_RETRIEVE_VIEW_SUCCESS: {
      const payload = Array.isArray(action.payload) ? action.payload[0] : action.payload;
      let newQuery = action.query && JSON.parse(action.query);
      if (!newQuery) {
        newQuery =
          payload?.bobjectViewFilters?.length > 0
            ? payload?.bobjectViewFilters.reduce(
                (prev, curr) => ({
                  ...prev,
                  [curr.id]: transformValues(curr.values),
                }),
                {},
              )
            : {};
      }
      const newColumns = action.columns || payload?.bobjectViewColumns.map(c => c.id);

      return {
        ...state,
        columnsShown: newColumns,
        isSaveViewModalOpen: false,
        query: newQuery,
        sort: payload?.bobjectView.sort,
        direction: payload?.bobjectView.sortDirection,
        tags: payload?.bobjectView.tags,
        viewCreatedBy: payload?.bobjectView.createdBy,
        viewId: payload?.bobjectView.id,
        viewName: payload?.bobjectView.name,
        views: payload?.views,
        viewSelected: payload?.bobjectView.id,
        viewType: payload?.bobjectView.viewType,
        viewVisibility: payload?.bobjectView.visibility,
        requestedQuery: newQuery,
      };
    }
    case bobjectTableActions.BOBJECT_TABLE_SET_CONFIG:
      return {
        ...state,
        query: action.query,
        columnsShown: action.columnsShown,
        sort: action.sort,
        direction: action.direction || 'ASC',
        viewId: action.viewId,
      };
    case bobjectTableActions.BOBJECT_TABLE_RESET_FILTER_COLUMNS:
      return {
        ...state,
        query: {},
        viewSelected: undefined,
        viewName: undefined,
        viewId: undefined,
        columnsShown: undefined,
        bobjects: undefined,
      };
    case bobjectTableActions.BOBJECT_TABLE_REMOVE_PROVISIONAL_ROW:
      return {
        ...state,
        bobjects: state.bobjects.filter(bobject => bobject.id.objectId !== action.id),
      };
    default:
      return { ...state };
  }
};

export const useTableReducer = () => useReducer(bobjectTableReducer, { ...initialState });
