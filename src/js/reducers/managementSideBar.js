import { MANAGEMENT_SIDE_BAR_MESSAGING_COLLAPSE_SWITCH } from '../actions/dictionary';

const initialState = {
  messagingCollapsed: {
    1: true,
    2: false,
  },
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case MANAGEMENT_SIDE_BAR_MESSAGING_COLLAPSE_SWITCH:
      newState.messagingCollapsed[action.index] = !newState.messagingCollapsed[action.index];
      newState.messagingCollapsed = { ...newState.messagingCollapsed };
      return newState;
    default:
      return newState;
  }
};
