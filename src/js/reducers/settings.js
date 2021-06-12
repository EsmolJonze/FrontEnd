import {
  SETTINGS_ON_CHANGE_ICP,
  SETTINGS_ON_CHANGE_SC,
  SETTINGS_ON_CHANGE_TM,
  SETTINGS_QQ_CHANGE_PAGE,
  SETTINGS_QQ_PAGE_PER_ROW,
  SETTINGS_RESET_VALUES,
  SETTINGS_RETRIEVE_FILTERS_SUCCESS,
  SETTINGS_RETRIEVE_QQ_SUCCESS,
  SETTINGS_SEARCH_QQ_UPDATE,
} from '../actions/dictionary';

const initialState = {
  filtersQQ: [],
  filterValue: {
    targetMarkets: '',
    idealCustomerProfiles: '',
    scenarios: '',
  },
  searchQueryFilter: undefined,
  sizePageQQ: 50,
  pageQQ: 0,
  qqs: undefined,
  qqPage: 0,
  qqPageSize: 50,
  qqTotal: undefined,
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case SETTINGS_RETRIEVE_FILTERS_SUCCESS:
      newState.filtersQQ = action.data;
      return newState;
    case SETTINGS_ON_CHANGE_TM:
      newState.filterValue.targetMarkets = action.value;
      newState.qqs = initialState.qqs;
      return newState;
    case SETTINGS_ON_CHANGE_ICP:
      newState.filterValue.idealCustomerProfiles = action.value;
      newState.qqs = initialState.qqs;
      return newState;
    case SETTINGS_RESET_VALUES:
      newState.qqs = undefined;
      return newState;
    case SETTINGS_ON_CHANGE_SC:
      newState.filterValue.scenarios = action.value;
      newState.qqs = initialState.qqs;
      return newState;
    case SETTINGS_RETRIEVE_QQ_SUCCESS:
      newState.qqs = action.data._embedded.bobjectFields;
      newState.qqPage = action.data.page.number;
      newState.qqTotal = action.data.page.totalElements;
      return newState;
    case SETTINGS_SEARCH_QQ_UPDATE:
      newState.searchQueryFilter = action.e.currentTarget.value;
      return newState;
    case SETTINGS_QQ_PAGE_PER_ROW:
      newState.qqPageSize = action.value;
      newState.qqPage = 0;
      newState.qqs = initialState.qqs;
      return newState;
    case SETTINGS_QQ_CHANGE_PAGE:
      newState.qqPage = action.page;
      newState.qqs = initialState.qqs;
      return newState;
    default:
      return newState;
  }
};
