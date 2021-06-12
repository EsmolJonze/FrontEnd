import {
  RESET_TASK_STATE,
  TIMETABLE_CONFIG,
  TIMETABLE_STATE_RESET,
} from '../../actions/dictionary';

const initialState = {
  filters: undefined,
};

export default (state = initialState, action) => {
  if (action.type === RESET_TASK_STATE || action.type === TIMETABLE_STATE_RESET) {
    return initialState;
  }
  if (action.type === TIMETABLE_CONFIG) {
    const newState = { ...state };
    newState.filters = action.filters;
    return newState;
  }
  return state;
};
