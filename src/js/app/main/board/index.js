import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core';
import TaskBoardPage from './task/TaskBoardPage';
import classNames from 'clsx';
import { Route, withRouter } from 'react-router-dom';
import {
  APP_CL,
  APP_CL_COMPANIES,
  APP_CL_COMPANIES_COMPANY_TASK,
  APP_TASKS,
  APP_TASKS_ASSIGN_QC,
} from '../../_constants/routes';
import List from './list';
import TaskFeed from './task/feed/index';
import { TASK_FEED_DESELECT_TASK_CATEGORY } from '../../../actions/dictionary';
import { connect } from 'react-redux';
import ContactPages from '../../../pages/contactPages';
import AccountAlerts from '../../../components/accountAlerts';

const style = {
  contentTabs: {
    width: '100%',
    height: 'calc(100vh - 80px)',
    padding: '0px',
    margin: '0px',
    overflowY: 'auto',
  },
  contentTabsAllocateQC: {
    overflowX: 'unset !important',
  },
  tabs: {
    padding: '0px',
    margin: '0px',
  },
  container: {
    flexGrow: 1,
    display: 'flex',
    maxWidth: '100%',
  },
};

const Index = withStyles(style)(props => {
  const { classes, history, deselectTaskCategory } = { ...props };
  const { pathname } = history.location;

  const isNotTasksOrCompaniesWithinTasks = !(
    pathname.startsWith(APP_TASKS) ||
    (pathname.startsWith(APP_CL_COMPANIES) && pathname.includes('/tasks/'))
  );
  useEffect(() => {
    if (isNotTasksOrCompaniesWithinTasks && pathname.startsWith(APP_CL)) {
      deselectTaskCategory();
    }
  }, [isNotTasksOrCompaniesWithinTasks, pathname]);

  if (isNotTasksOrCompaniesWithinTasks && !pathname.startsWith(APP_CL)) {
    return null;
  }

  const isAssignCompany = window.location.pathname === APP_TASKS_ASSIGN_QC;
  return (
    <div className={classes.container}>
      <TaskFeed />
      <div
        id="content"
        className={classNames({
          [classes.contentTabs]: true,
          [classes.contentTabsAllocateQC]: isAssignCompany,
        })}
      >
        <React.Suspense fallback={<></>}>
          <AccountAlerts />
        </React.Suspense>
        <Route path={[APP_TASKS, APP_CL_COMPANIES_COMPANY_TASK]} component={TaskBoardPage} />
        <Route path={APP_CL} component={List} />
        <ContactPages />
      </div>
    </div>
  );
});

const mapDispatchToProps = dispatch => ({
  deselectTaskCategory: () => dispatch({ type: TASK_FEED_DESELECT_TASK_CATEGORY }),
});

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(Index));
