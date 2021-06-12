import React from 'react';
import {
  APP_CL_COMPANIES_COMPANY_TASK,
  APP_TASKS,
  APP_TASKS_ADD_QC,
  APP_TASKS_ASSIGN_QC,
  APP_TASKS_DONE,
  APP_TASKS_INBOUND,
  APP_TASKS_INBOUND_MQL,
  APP_TASKS_WELCOME,
  APP_TASKS_PROSPECT,
  APP_TASKS_SALES,
} from '../../../app/_constants/routes';
import { Redirect, Route, Switch } from 'react-router-dom';
import TaskWorkspace, {
  AddQcWorkspace,
  AssignQcWorkspace,
} from '../../../app/main/board/task/taskBoard';
import {
  SplashNextTask,
  SplashWelcomeTask,
} from '../../../app/main/board/task/taskBoard/finalScreen/SplashTask';
import Inbound from '../../../app/main/board/task/taskBoard/workspace/inbound';
import NoPermissionsView from '../../../pages/noPermissionsPage';
import { TASK_FEED_DESELECT_TASK_CATEGORY } from '../../../actions/dictionary';
import ProspectPage from '../../../pages/prospectPage';
import SalesPage from '../../../pages/salesPage';
import { useUserPermissions, useUserSettings, useUserSettingsContext } from '../hooks';

export const FilterRoutesByUserPermissions = props => {
  const { dispatch, task } = { ...props };
  const { state } = useUserSettingsContext();
  const userPermissions = useUserPermissions();
  const settings = useUserSettings();
  const { dataFetch } = state;

  // refactor when subhomes are done
  if (dataFetch) {
    let content = (
      <Switch>
        <Route
          exact
          path={APP_TASKS}
          render={() => {
            dispatch({ type: TASK_FEED_DESELECT_TASK_CATEGORY });
            return <Redirect to={APP_TASKS_WELCOME} />;
          }}
        />
        <Route path={APP_TASKS_DONE} exact component={SplashNextTask} />
        <Route path={APP_TASKS_WELCOME} exact component={SplashWelcomeTask} />
        <Route path={APP_TASKS_ADD_QC} exact component={AddQcWorkspace} />
        <Route path={APP_TASKS_ASSIGN_QC} exact component={AssignQcWorkspace} />
        <Route path={APP_TASKS_PROSPECT} exact component={ProspectPage} />
        <Route path={APP_TASKS_SALES} exact component={SalesPage} />
        <Route path={APP_TASKS_INBOUND} component={Inbound} />
        <Route
          path={APP_CL_COMPANIES_COMPANY_TASK}
          render={({ match }) => <TaskWorkspace taskId={match.params.id} />}
        />
      </Switch>
    );

    if (
      task.match.path === APP_CL_COMPANIES_COMPANY_TASK &&
      !userPermissions.scheduled &&
      !userPermissions.meeting &&
      !userPermissions.addLeads
    ) {
      content = <NoPermissionsView />;
    }
    if (task.location.pathname === APP_TASKS_PROSPECT && !userPermissions.prospect) {
      content = <NoPermissionsView />;
    }
    if (task.location.pathname === APP_TASKS_ADD_QC && !userPermissions.addQC) {
      content = <NoPermissionsView />;
    }
    if (task.location.pathname === APP_TASKS_ASSIGN_QC && !userPermissions.assign) {
      content = <NoPermissionsView />;
    }
    if (task.location.pathname === APP_TASKS_INBOUND_MQL && !userPermissions.inbound) {
      content = <NoPermissionsView />;
    }
    if (
      task.location.pathname === APP_TASKS_SALES &&
      (!userPermissions.sales || !settings?.account?.features.salesFeature)
    ) {
      content = <NoPermissionsView />;
    }

    return content;
  }
  return <React.Fragment />;
};
