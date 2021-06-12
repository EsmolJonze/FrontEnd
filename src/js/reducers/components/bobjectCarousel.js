import {
  BOBJECT_CHANGE_LEAD,
  BOBJECT_LEAD_TABLE_LOADED,
  BOBJECT_SET_LEAD_FOCUS,
} from '../../actions/dictionary/app/components';

const initialState = {
  bobject: undefined,
  currentIndex: 0,
  leadFocusId: undefined,
};

export default (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === BOBJECT_LEAD_TABLE_LOADED) {
    newState.bobject = action.leads && { contents: action.leads };
    return newState;
  }
  if (action.type === BOBJECT_CHANGE_LEAD) {
    newState.currentIndex = action.index;
    return newState;
  }
  if (action.type === BOBJECT_SET_LEAD_FOCUS) {
    newState.leadFocusId = action.id;
    return newState;
  }
  return state;
};
