import { Redirect, Route } from 'react-router';
import {
  APP_TASKS_INBOUND,
  APP_TASKS_INBOUND_MQL,
  APP_TASKS_INBOUND_SAL,
} from '../../../../../../_constants/routes';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import React from 'react';
import { withWrappers } from '../../../../../../../misc/utils';
import { BOBJECT_INBOUND_TABLE_RESET_VIEW } from '../../../../../../../actions/dictionary';
import { cssVariables } from '../../../../../../../style/variables';

const style = {
  root: {
    padding: `${cssVariables.spacing.distance.workspace.content.y}px ${
      cssVariables.spacing.distance.workspace.content.x
    }px`,
    paddingBottom: 0,
  },
  tabsContainer: {
    maxWidth: 360,
  },
  titlesContainer: {
    margin: '0 0 24px 0',
  },
  title: {
    margin: '0 0 8px 0',
  },
  subtitle: {
    margin: 0,
  },
};

const Header = ({ history, classes, resetView }) => (
  <div className={classes.root}>
    <div className={classes.titlesContainer}>
      <h1 className={classes.title}>Inbound activity pending to review</h1>
      <p className={classes.subtitle}>
        Accept{' '}
        <span role={'img'} aria-label={'emoji'}>
          &#9989;
        </span>{' '}
        or discard{' '}
        <span role={'img'} aria-label={'emoji'}>
          &#10060;
        </span>{' '}
        the inbound lead activity
      </p>
    </div>
    <div className={classes.tabsContainer}>
      <Route
        path={APP_TASKS_INBOUND}
        render={() => (
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            value={
              history.location.pathname === APP_TASKS_INBOUND
                ? APP_TASKS_INBOUND_MQL
                : history.location.pathname
            }
            onChange={(e, value) => {
              history.push(value);
            }}
          >
            <Tab label={'MQL'} value={APP_TASKS_INBOUND_MQL} onClick={resetView} />
            <Tab label={'SAL'} value={APP_TASKS_INBOUND_SAL} onClick={resetView} />
          </Tabs>
        )}
      />
      <Route
        path={APP_TASKS_INBOUND}
        exact
        component={() => <Redirect to={APP_TASKS_INBOUND_MQL} />}
      />
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  resetView: () => dispatch({ type: BOBJECT_INBOUND_TABLE_RESET_VIEW }),
});

export default withWrappers({ style, mapDispatchToProps })(Header);
