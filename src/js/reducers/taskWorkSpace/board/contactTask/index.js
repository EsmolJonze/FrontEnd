import {
  CONTACT_TASK_RESET_ACTIVITY_FILTER,
  CONTACT_TASK_SET_ACTIVITY_FILTER,
} from '../../../../actions/dictionary';

const initialState = () => ({
  activityFilters: {
    kind: 'anyKind',
    lead: 'any',
  },
});

export default (state = initialState(), action) => {
  const newState = { ...state };

  switch (action.type) {
    case CONTACT_TASK_SET_ACTIVITY_FILTER: {
      const k = { ...newState.activityFilters };
      k[action.filter] = action.value;
      newState.activityFilters = k;
      return newState;
    }
    case CONTACT_TASK_RESET_ACTIVITY_FILTER:
      return initialState();
    default:
      return state;
  }
};
