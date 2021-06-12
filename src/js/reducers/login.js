import {
  LOGIN_GOTO_RECOVERY_START,
  LOGIN_LOG_VALIDATE_ERROR,
  LOGIN_SUBMIT_DATA_START,
} from '../actions/dictionary';

const initialState = {
  validated: false,
  recovery: false,
  hadError: false,
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case LOGIN_GOTO_RECOVERY_START:
      newState.recovery = !state.recovery;
      return newState;
    case LOGIN_SUBMIT_DATA_START:
      newState.validated = true;
      newState.hadError = false;
      return newState;
    case LOGIN_LOG_VALIDATE_ERROR:
      newState.validated = false;
      newState.hadError = true;
      return newState;
    default:
      return newState;
  }
};
