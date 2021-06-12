import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import LoginPage from './login';
import Main from './main/AuthenticatedScopeApp';
import './App.css';
import { cssVariables } from '../style/variables';
import { mainThemeWrapper } from '../style/themeWrapper';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Redirect, Route, Router } from 'react-router-dom';
import {
  APP,
  APP_TASKS,
  EXTERNAL_ACTION,
  HOME,
  LOGIN,
  PRIVACY_POLICY,
  TERMS_AND_CONDITIONS,
} from './_constants/routes';
import SessionManagerFactory from '../misc/session';
import { TermsAndConditions } from './termsAndConditions';
import { PrivacyPolicy } from './privacyPolicy';
import VersionOutdatedSnackBar from '../components/versionOutdatedSnackBar';
import { ExternalActions } from './externalActions';
import * as Sentry from '@sentry/react';
import { QueryParamProvider } from 'use-query-params';
import routerHistory from './history';
import { RecoilRoot } from 'recoil';

const style = {
  '@global': {
    h1: {
      fontWeight: 'normal',
    },
    h2: {
      fontWeight: 'normal',
    },
    '[data-swipeable="true"]': {
      scrollBehavior: 'smooth',
      overflow: 'initial !important',
    },
    body: {
      height: '100vh',
      overflow: 'hidden',
      margin: 0,
    },
    '.ql-container': {
      height: 'calc(100% - 40px)',
    },
    '@font-face': [
      {
        fontFamily: cssVariables.typography.Roboto,
        fontStyle: 'normal',
        fontWeight: 500,
        fontDisplay: 'swap',
        src:
          "local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format('woff2')",
      },
      {
        fontFamily: cssVariables.typography.ProximaNovaSoft,
        src:
          "url('https://fonts.bloobirds.com.bloobirds.com/ProximaNovaSoft-Bold.eot') format('embedded-opentype')," +
          "url('https://fonts.bloobirds.com/ProximaNovaSoft-Bold.woff2') format('woff2')," +
          "url('https://fonts.bloobirds.com/ProximaNovaSoft-Bold.woff') format('woff')," +
          "url('https://fonts.bloobirds.com/ProximaNovaSoft-Bold.ttf')  format('truetype')",
        fontWeight: 'bold',
      },
      {
        fontFamily: cssVariables.typography.ProximaNovaSoft,
        src:
          "url('https://fonts.bloobirds.com.bloobirds.com/ProximaNovaSoft-Medium.eot') format('embedded-opentype')," +
          "url('https://fonts.bloobirds.com/ProximaNovaSoft-Medium.woff2') format('woff2')," +
          "url('https://fonts.bloobirds.com/ProximaNovaSoft-Medium.woff') format('woff')," +
          "url('https://fonts.bloobirds.com/ProximaNovaSoft-Medium.ttf')  format('truetype')",
        fontWeight: '500',
      },
      {
        fontFamily: cssVariables.typography.ProximaNovaSoft,
        src:
          "url('https://fonts.bloobirds.com.bloobirds.com/ProximaNovaSoft-Regular.eot') format('embedded-opentype')," +
          "url('https://fonts.bloobirds.com/ProximaNovaSoft-Regular.woff2') format('woff2')," +
          "url('https://fonts.bloobirds.com/ProximaNovaSoft-Regular.woff') format('woff')," +
          "url('https://fonts.bloobirds.com/ProximaNovaSoft-Regular.ttf')  format('truetype')",
        fontWeight: 'regular',
      },
      {
        fontFamily: cssVariables.typography.ProximaNovaSoft,
        src:
          "url('https://fonts.bloobirds.com.bloobirds.com/ProximaNovaSoft-Semibold.eot') format('embedded-opentype')," +
          "url('https://fonts.bloobirds.com/ProximaNovaSoft-Semibold.woff2') format('woff2')," +
          "url('https://fonts.bloobirds.com/ProximaNovaSoft-Semibold.woff') format('woff')," +
          "url('https://fonts.bloobirds.com/ProximaNovaSoft-Semibold.ttf')  format('truetype')",
        fontWeight: '600',
      },
      {
        fontFamily: cssVariables.typography.Menlo,
        src: "url('https://fonts.bloobirds.com/Menlo-Regular.woff') format('woff'),",
      },
    ],
  },
  App: {
    backgroundColor: cssVariables.color.white.natural,
    fontFamily: cssVariables.typography.ProximaNovaSoft,
    height: '100vh',
  },
};
const SessionManager = SessionManagerFactory();
const mapStateToProps = state => ({
  test: state.test,
  logged: state.app.logged,
  selectedTask: state.taskWorkspace.taskFeed.selectedTask,
});

const PrivateRoute = ({ logged, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      logged ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: LOGIN,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const App = ({ classes, logged }) => (
  <RecoilRoot key={SessionManager.getUser()?.id}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Router history={routerHistory}>
        <QueryParamProvider ReactRouterRoute={Route}>
          <div className={classes.App}>
            <Route exact path={TERMS_AND_CONDITIONS} component={TermsAndConditions} />
            <Route exact path={PRIVACY_POLICY} component={PrivacyPolicy} />
            <Route
              exact
              path={HOME}
              render={props => (
                <Redirect
                  to={{
                    pathname: APP,
                    state: { from: props.location },
                  }}
                />
              )}
            />
            <Route
              path={LOGIN}
              render={props => {
                if (SessionManager.hasEmptySession()) {
                  return <LoginPage logged={logged} {...props} />;
                }
                const stateFrom = props.location?.state?.from;
                if (stateFrom) {
                  stateFrom.search = '';
                }
                const redirectTo = stateFrom && stateFrom !== LOGIN ? stateFrom : APP_TASKS;
                return <Redirect to={redirectTo} />;
              }}
            />
            <PrivateRoute logged={logged} path={APP} component={Main} />
            <Route path={EXTERNAL_ACTION} component={ExternalActions} />
          </div>
        </QueryParamProvider>
      </Router>
      <VersionOutdatedSnackBar />
    </MuiPickersUtilsProvider>
  </RecoilRoot>
);

export default Sentry.withProfiler(
  connect(
    mapStateToProps,
    null,
  )(withStyles(style)(mainThemeWrapper(App))),
);
