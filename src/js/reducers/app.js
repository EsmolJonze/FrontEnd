import SessionManagerFactory from '../misc/session/index';
import {
  SET_PING_VERSION,
  LOGIN_LOG_IN_SUCCESS,
  LOGIN_LOG_OUT_SUCCESS,
  SET_CONTEXT_COMPANY,
  CALL_RESET_REDUCER,
} from '../actions/dictionary';

const SessionManager = SessionManagerFactory();

const initialState = {
  logged: !SessionManager.hasEmptySession(),
  contextCompany: undefined,
  pingVersion: undefined,
  firstVersion: undefined,
  versionOutdated: false,
};
export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case LOGIN_LOG_IN_SUCCESS:
      newState.logged = true;
      return newState;
    case LOGIN_LOG_OUT_SUCCESS:
      SessionManager.cleanSession();
      return {
        ...initialState,
        logged: false,
      };
    case SET_CONTEXT_COMPANY:
      newState.contextCompany = action.company;
      return newState;
    case SET_PING_VERSION: {
      if (newState.pingVersion !== action.data.version) {
        newState.pingVersion = action.data.version;
      }
      if (newState.firstVersion === undefined) {
        newState.firstVersion = action.data.version;
      }
      if (newState.pingVersion !== undefined && newState.pingVersion != null) {
        newState.versionOutdated = newState.pingVersion > newState.firstVersion;
      }
      return newState;
    }
    case CALL_RESET_REDUCER:
      SessionManager.cleanSession();
      return {
        ...initialState,
        logged: false,
      };
    default:
      return newState;
  }
};
