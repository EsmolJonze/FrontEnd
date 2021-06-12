import { useReducer } from 'react';
import { viewTableActions } from './viewTable.types';

const initialState = {
  emptyContent: false,
  page: 0,
  pageSize: 50,
  totalElements: 0,
  elements: undefined,
  tags: null,
  searchText: '',
  textQuery: null,
  reload: false,
};

const viewTableReducer = (state, action) => {
  const newState = { ...state };
  if (action.type === viewTableActions.VIEW_TABLE_ELEMENTS_LOADED) {
    return {
      ...state,
      elements: action.payload,
      emptyContent: !(action.payload && action.payload.length > 0),
      reload: false,
    };
  }

  if (action.type === viewTableActions.VIEW_TABLE_UPDATE_PAGE) {
    newState.page = action.payload;
    newState.elements = undefined;
  }

  if (action.type === viewTableActions.VIEW_TABLE_UPDATE_PAGE_SIZE) {
    newState.pageSize = action.payload;
    newState.elements = undefined;
  }

  if (action.type === viewTableActions.VIEW_TABLE_UPDATE_TOTAL_ELEMENTS) {
    newState.totalElements = action.payload;
  }

  if (action.type === viewTableActions.VIEW_TABLE_SET_TAGS) {
    return {
      ...state,
      tags: action.payload,
    };
  }

  if (action.type === viewTableActions.VIEW_TABLE_UPDATE_TEXT_QUERY) {
    if (newState.searchText !== '') {
      newState.textQuery = newState.searchText;
      newState.elements = undefined;
    } else {
      newState.textQuery = null;
    }
  }

  if (action.type === viewTableActions.VIEW_TABLE_UPDATE_SEARCH_TEXT) {
    newState.searchText = action.payload;
  }

  if (action.type === viewTableActions.VIEW_TABLE_RELOAD_TRUE) {
    newState.reload = true;
    newState.elements = undefined;
  }

  if (action.type === viewTableActions.VIEW_TABLE_CLEAN_FILTERS) {
    Object.keys(state.tags).forEach(e => (state.tags[e].used = false));
    newState.tags = JSON.parse(JSON.stringify(state.tags));
    newState.textQuery = null;
    newState.searchText = '';
    newState.elements = undefined;
    newState.emptyContent = false;
    newState.reload = true;
  }

  return newState;
};

export const useViewTableReducer = () => useReducer(viewTableReducer, initialState);
