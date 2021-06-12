import { useReducer } from 'react';
import { importHistoryActions } from './actions';

const initialState = {
  imports: undefined,
  page: 0,
  pageSize: 50,
  totalElements: 0,
  downloadedFile: undefined,
  importsUpdated: false,
};

const buildImports = (imports, bobjectTypes, users) =>
  imports?.map(imp => {
    imp.bobjectType = bobjectTypes
      ?.all()
      .filter(bobjectType => bobjectType.name === imp.bobjectType)
      ?.reduce(a => a).name;
    imp.user = users
      ?.all()
      .filter(user => user.name === imp.user)
      ?.reduce(a => a).name;
    return imp;
  });

const reducer = (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case importHistoryActions.IMPORT_HISTORY_FETCH_IMPORTS: {
      newState.imports = [...action?.data.importHistories];
      newState.pageSize = action?.data.pageSize;
      newState.totalElements = action?.data.totalElements;
      newState.importsUpdated = false;
      return newState;
    }
    case importHistoryActions.IMPORT_HISTORY_TABLE_BUILD_IMPORTS: {
      const newImports = buildImports(newState.imports, action.bobjectTypes, action.users);
      newState.imports = [...newImports];
      newState.importsUpdated = true;
      return newState;
    }
    case importHistoryActions.IMPORT_HISTORY_TABLE_UPDATE_PAGE:
      newState.page = action.payload;
      newState.elements = undefined;
      return newState;
    case importHistoryActions.IMPORT_HISTORY_TABLE_UPDATE_PAGE_SIZE:
      newState.pageSize = action.payload;
      newState.elements = undefined;
      return newState;
    case importHistoryActions.IMPORT_HISTORY_UPDATE_IMPORTS: {
      newState.importsUpdated = true;
      return newState;
    }
    default:
      return newState;
  }
};

export default () => useReducer(reducer, initialState);
