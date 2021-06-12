import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import {
  BloobirdsApi,
  SubscriptionHooks,
  useWebsocketSubscriptions,
} from '@bloobirds-it/bloobirds-platform-react-api-library';
import {
  SET_PING_VERSION,
  WEBSOCKET_MESSAGE_INCOMING,
  CALL_RESET_REDUCER,
} from '../../actions/dictionary';
import BobjectForm from '../../components/bobjectForm';
import { BobjectDetailsModal } from '../../components/bobjectDetails';
import AddToCalendarModal from '../../components/addToCalendarModal';
import Header from '../../components/header';
import Dialer from '../../components/dialer';
import {
  useActiveUser,
  usePreviousUrl,
  useAddToCalendar,
  useBobjectDetails,
  useDuplicateValidationModal,
  useBobjectFormVisibility,
  useEntity,
} from '../../hooks';
import { useIntercom } from '../../misc/intercom/intercom';
import SessionManagerFactory from '../../misc/session';
import UserSettings from '../../pages/userSettingsPages';
import AccountSettings from '../../pages/accountSettingsPages';
import Dashboard from '../../pages/dashboardPages';
import * as Routes from '../_constants/routes';
import Board from './board';
import NotFoundManager from './NotFound';
import styles from './AuthenticatedScopeApp.module.css';
import { TableContextProvider } from '../../components/bobjectTable/context/bobjectTable.context';
import * as Sentry from '@sentry/react';
import { UserPermissionContext } from '../../components/userPermissions';
import DuplicateValidationModal from '../../components/duplicateValidationModal';
import { Spinner, ToastContainer } from '@bloobirds-it/bloobirds-platform-component-library';
import ErrorBoundary from '../../components/errorBoundary';
import MinimizableModals from '../../components/minimizableModals';
import ConfirmDeleteModal from '../../components/confirmDeleteModal';
import { getAppEnvironment } from '../../misc/api/ApiHosts';
import mixpanel from 'mixpanel-browser';

const SessionManager = SessionManagerFactory();

/**
 * @deprecated We need to move this generic subscriptions to Bobject search Subscriptions
 */
const withDataWebsocketSubscriptions = Component => props => {
  const { dispatch } = props;
  const types = ['Activity', 'Lead', 'Company', 'Task', 'Opportunity'];
  types.map(bobjectType =>
    SubscriptionHooks.useWebsocketEventSubscription(`data-${bobjectType}`, data => {
      dispatch({ type: WEBSOCKET_MESSAGE_INCOMING, data });
    }),
  );
  return <Component {...props} />;
};

const withBasicWebsocketSubscriptions = Component => props => {
  const { dispatch } = props;
  SubscriptionHooks.useWebsocketEventSubscription('Ping', data => {
    dispatch({ type: SET_PING_VERSION, data });
  });
  SubscriptionHooks.useWebsocketEventSubscription('logout', () => {
    dispatch({ type: CALL_RESET_REDUCER });
  });
  return <Component {...props} />;
};

const AuthenticatedScopeWrapper = ({ children }) => (
  <React.Suspense
    fallback={
      <div className={styles.loader}>
        <Spinner name="loadingCircle" />
      </div>
    }
  >
    <ErrorBoundary>
      <BloobirdsApi
        environment={getAppEnvironment()}
        token={SessionManager.getToken()}
        accountId={SessionManager.getAccount().id}
      >
        <UserPermissionContext>{children}</UserPermissionContext>
      </BloobirdsApi>
    </ErrorBoundary>
  </React.Suspense>
);

const ApplicationModals = () => {
  const { isOpen: isAddToCalendarOpen } = useAddToCalendar();
  const { isOpen: isBobjectDetailsOpen } = useBobjectDetails();
  const { isOpen: isBobjectFormOpen } = useBobjectFormVisibility();
  const { isOpen: isDuplicateValidationOpen } = useDuplicateValidationModal();

  return (
    <>
      <ConfirmDeleteModal />
      <MinimizableModals />
      {isDuplicateValidationOpen && <DuplicateValidationModal />}
      {isBobjectFormOpen && <BobjectForm />}
      {isBobjectDetailsOpen && <BobjectDetailsModal />}
      {isAddToCalendarOpen && <AddToCalendarModal />}
    </>
  );
};

const WebsocketComponent = () => {
  useWebsocketSubscriptions();
  return null;
};

const AuthenticatedScope = () => {
  const bobjectFields = useEntity('bobjectFields');
  const bobjectPicklistFieldValues = useEntity('bobjectPicklistFieldValues');
  const bobjectTypes = useEntity('bobjectTypes');
  const fieldTypes = useEntity('fieldTypes');

  const { setUserActiveData } = useActiveUser();
  const account = SessionManager.getAccount();
  const user = SessionManager.getUser();
  const { resetPreviousUrl } = usePreviousUrl();

  useEffect(() => {
    resetPreviousUrl();
  }, []);

  useEffect(() => {
    setUserActiveData(user, account);
    Sentry.setUser({ id: user.id, username: user.name, account: account.id });

    mixpanel.identify(user.id);
    mixpanel.people.set({
      account_id: account.id,
      account_name: account.name,
      $name: user.name,
    });
    mixpanel.add_group('account', account.name);
  }, [user, account]);

  useIntercom();

  return (
    <>
      {fieldTypes && bobjectPicklistFieldValues && bobjectFields && bobjectTypes ? (
        <>
          <WebsocketComponent />
          <TableContextProvider>
            <Header />
            <div className={styles._content}>
              <Route exact path={Routes.APP} render={() => <Redirect to={Routes.APP_TASKS} />} />
              <Dialer />
              <Board />
              <Route
                exact
                path={Routes.APP_MANAGEMENT}
                render={() => <Redirect to={Routes.APP_MANAGEMENT_USER} />}
              />
              <Route path={Routes.APP_MANAGEMENT_USER} component={UserSettings} />
              <Route path={Routes.APP_MANAGEMENT_ACCOUNT} component={AccountSettings} />
              <Route path={Routes.APP_DASHBOARD} component={Dashboard} />
              <NotFoundManager />
              <ApplicationModals />
              <ToastContainer />
            </div>
          </TableContextProvider>
        </>
      ) : (
        <div className={styles.loader}>
          <Spinner />
        </div>
      )}
    </>
  );
};

const WebsocketSubscribedApp = withBasicWebsocketSubscriptions(
  withDataWebsocketSubscriptions(AuthenticatedScope),
);

const AuthenticatedScopeApp = props => {
  const { dispatch } = props;
  return (
    <AuthenticatedScopeWrapper>
      <WebsocketSubscribedApp dispatch={dispatch} />
    </AuthenticatedScopeWrapper>
  );
};

export default connect(
  null,
  null,
)(AuthenticatedScopeApp);
