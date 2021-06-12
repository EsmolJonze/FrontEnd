import {
  BOBJECT_LIST_FILTER,
  BOBJECT_LIST_FILTER_ALL,
  BOBJECT_LIST_FILTER_RESET,
  BOBJECT_LIST_HOVER_OFF,
  BOBJECT_LIST_HOVER_ON,
  BOBJECT_LIST_LOADED,
  BOBJECT_LIST_SET_QUERY,
  BOBJECT_LIST_SHOW_LESS,
  BOBJECT_LIST_SHOW_LESS_EMAIL,
  BOBJECT_LIST_SHOW_MORE,
  BOBJECT_LIST_SHOW_MORE_EMAIL,
} from '../../actions/dictionary';

const initialState = () => ({
  bobjects: undefined,
  stateQuery: undefined,
  bobjectType: undefined,
  filterAll: {
    Activity: false,
    Task: true,
  },
  showMoreIndex: [],
  showMoreEmail: [],
  hoverIndex: undefined,
  isInitialValues: true,
  value: {
    Activity: {
      Call: true,
      Email: true,
      LinkedInMessage: true,
      Meeting: true,
      Note: true,
      Status: false,
      Inbound: true,
    },
    Task: {
      START_CADENCE: true,
      PROSPECT_CADENCE: true,
      NEXT_STEP: true,
      CONTACT_BEFORE_MEETING: true,
      ADD_LEADS_TO_QC: true,
    },
  },
});
const transformTo = (values, condition) =>
  Object.keys(values)
    .map(key => ({ [key]: condition }))
    .reduce((prev, current) => ({ ...prev, ...current }), {});
export default (state = initialState(), action) => {
  const newState = { ...state };
  if (action.type === BOBJECT_LIST_LOADED) {
    newState.bobjects = action.payload;
    return newState;
  }
  if (action.type === BOBJECT_LIST_SET_QUERY) {
    newState.stateQuery = action.query;
    newState.bobjectType = action.bobjectType;
    newState.bobjects = undefined;
    return newState;
  }
  if (action.type === BOBJECT_LIST_FILTER) {
    if (state.filterAll[action.bobjectType] === true) {
      newState.value[action.bobjectType] = transformTo(state.value[action.bobjectType], false);
    }
    newState.value[action.bobjectType] = {
      ...newState.value[action.bobjectType],
      [action.value]: !newState.value[action.bobjectType][action.value],
    };
    newState.filterAll[action.bobjectType] = false;
    newState.filterAll[action.bobjectType] = Object.values(
      newState.value[action.bobjectType],
    ).every(value => value === true);
    if (Object.values(newState.value[action.bobjectType]).every(value => value === false)) {
      newState.value[action.bobjectType] = transformTo(state.value[action.bobjectType], true);
      newState.filterAll[action.bobjectType] = true;
    }
    newState.value = { ...newState.value };
    newState.isInitialValues = false;
    return newState;
  }
  if (action.type === BOBJECT_LIST_FILTER_RESET) {
    newState.filterAll = { ...initialState().filterAll };
    newState.value = { ...initialState().value };
    newState.isInitialValues = true;
    return newState;
  }
  if (action.type === BOBJECT_LIST_FILTER_ALL && newState.filterAll[action.bobjectType] === false) {
    const newValueAll = transformTo(state.value[action.bobjectType], true);
    if (newState.filterAll[action.bobjectType] === false) {
      newState.filterAll[action.bobjectType] = true;
    }
    newState.value[action.bobjectType] = newValueAll;
    newState.value = { ...newState.value };
    newState.isInitialValues = false;
    return newState;
  }
  if (action.type === BOBJECT_LIST_SHOW_MORE) {
    newState.showMoreIndex = [...state.showMoreIndex, action.key];
    return newState;
  }
  if (action.type === BOBJECT_LIST_SHOW_MORE_EMAIL) {
    newState.showMoreEmail = [...state.showMoreEmail, action.key];
    return newState;
  }
  if (action.type === BOBJECT_LIST_SHOW_LESS) {
    newState.showMoreIndex = state.showMoreIndex.filter(index => index !== action.key);
    return newState;
  }
  if (action.type === BOBJECT_LIST_SHOW_LESS_EMAIL) {
    newState.showMoreEmail = state.showMoreEmail.filter(index => index !== action.key);
    return newState;
  }
  if (action.type === BOBJECT_LIST_HOVER_ON) {
    newState.hoverIndex = action.key;
    return newState;
  }
  if (action.type === BOBJECT_LIST_HOVER_OFF) {
    newState.hoverIndex = undefined;
    return newState;
  }
  return newState;
};
