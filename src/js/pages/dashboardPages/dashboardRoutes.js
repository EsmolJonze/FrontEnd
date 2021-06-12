import React from 'react';
import { Redirect, Route } from 'react-router';
import {
  APP_DASHBOARD,
  APP_DASHBOARD_PROSPECTING,
  APP_DASHBOARD_PROSPECTING_SECTION,
  APP_DASHBOARD_SALES,
  APP_DASHBOARD_SALES_SECTION,
} from '../../app/_constants/routes';
import useIsSalesDashboardEnabled from '../../hooks/useIsSalesDashboardEnabled';
import DashboardPage from './dashboardPage';

const DashboardRoutes = () => {
  const isSalesDashboardEnabled = useIsSalesDashboardEnabled();

  return (
    <>
      <Route
        exact
        path={APP_DASHBOARD}
        render={() => <Redirect to={`${APP_DASHBOARD_PROSPECTING}/overview`} />}
      />
      <Route path={APP_DASHBOARD_PROSPECTING_SECTION} component={DashboardPage} />
      {isSalesDashboardEnabled && (
        <>
          <Route
            exact
            path={APP_DASHBOARD_SALES}
            render={() => <Redirect to={`${APP_DASHBOARD_SALES}/overview`} />}
          />
          <Route path={APP_DASHBOARD_SALES_SECTION} component={DashboardPage} />
        </>
      )}
    </>
  );
};

export default DashboardRoutes;
