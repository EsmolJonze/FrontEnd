import {
  CALL_RESET_REDUCER,
  LOGIN_LOG_OUT_SUCCESS,
  USER_PROFILE_MENU_DISPLAY_MENU_CLOSE,
  USER_PROFILE_MENU_DISPLAY_MENU_OPEN,
} from '../actions/dictionary';

const initialState = {
  anchorEl: null,
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case USER_PROFILE_MENU_DISPLAY_MENU_OPEN:
      newState.anchorEl = action.anchorEl;
      return newState;
    case USER_PROFILE_MENU_DISPLAY_MENU_CLOSE:
      newState.anchorEl = null;
      return newState;
    case LOGIN_LOG_OUT_SUCCESS:
      newState.anchorEl = null;
      return newState;
    case CALL_RESET_REDUCER:
      return { ...initialState };
    default:
      return newState;
  }
};
