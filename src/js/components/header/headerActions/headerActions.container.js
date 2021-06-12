import { connect } from 'react-redux';
import { HeaderActions } from './headerActions.view';
import { JwtApi } from '../../../misc/api/jwt';
import SessionManagerFactory from '../../../misc/session';
import { LOGIN_LOG_OUT_SUCCESS } from '../../../actions/dictionary';

const cleanLocalStorageCache = () => {
  Object.keys(window.localStorage).forEach(key => {
    if (key.startsWith('bb-')) {
      localStorage.removeItem(key);
    }
  });
};

const mapDispatchToProps = dispatch => ({
  logout: resetTable => {
    const SessionManager = SessionManagerFactory();
    const token = SessionManager.getUser()?.id;
    JwtApi.service.externalAction
      .logout({ token })
      .then(() => {
        cleanLocalStorageCache();
        resetTable();
        dispatch({ type: LOGIN_LOG_OUT_SUCCESS });
      })
      .catch(() => console.info('LogOut Error'));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(HeaderActions);
