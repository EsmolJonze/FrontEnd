import {
  ENTITY_TABS_HIDE,
  ENTITY_TABS_REQUEST_SUCCESS,
  ENTITY_TABS_RESET,
  ENTITY_TABS_SHOW,
  ENTITY_TABS_SWITCH_TAB,
  RESET_TASK_STATE,
} from '../../actions/dictionary';

const initialState = {
  displayed: 0,
  expanded: false,
  entities: undefined,
};

export default (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === RESET_TASK_STATE || action.type === ENTITY_TABS_RESET) {
    return initialState;
  }
  if (action.type === ENTITY_TABS_SWITCH_TAB) {
    newState.displayed = action.value;
  }
  if (action.type === ENTITY_TABS_SHOW) {
    newState.expanded = true;
  }
  if (action.type === ENTITY_TABS_HIDE) {
    newState.expanded = false;
  }
  if (action.type === ENTITY_TABS_REQUEST_SUCCESS) {
    newState.entities = action.payload.sort((a, b) => {
      if (a.ordering !== b.ordering) {
        return a.ordering - b.ordering;
      }
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    });
  }

  return newState;
};
