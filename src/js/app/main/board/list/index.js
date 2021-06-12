import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  APP_CL,
  APP_CL_ACTIVITIES,
  APP_CL_COMPANIES,
  APP_CL_LEADS,
  APP_CL_LISTS,
  APP_CL_MEETINGS,
  APP_CL_TASKS,
  APP_CL_IMPORT_HISTORY,
  APP_CL_IMPORT,
  APP_CL_OPPORTUNITIES,
} from '../../../_constants/routes';
import {
  ActivityTable,
  CompanyTable,
  LeadTable,
  MeetingTable,
  OpportunityTable,
  TaskTable,
} from '../../../../components/bobjectTable';
import { withWrappers } from '../../../../misc/utils';
import ViewTable from '../../../../components/viewTable';
import ImportHistory from '../../../../components/importHistory';
import ImportForm from '../../../../components/importForm';
import NoPermissionsView from '../../../../pages/noPermissionsPage';
import { useUserSettings } from '../../../../components/userPermissions/hooks';

const style = {
  container: {
    paddingTop: '40px',
    backgroundColor: '#f0f4f6',
    minHeight: 'calc(100% - 40px)',
  },
  backButton: {
    width: '100%',
    margin: '0 auto',
    maxWidth: '1280px',
    justifyContent: 'space-around',
  },
  '@media (max-width: 1500px)': {
    backButton: {
      width: 'calc(100% - 40px)',
      maxWidth: '1172px',
    },
  },
};

const Index = () => {
  const settings = useUserSettings();

  return (
    <>
      <Route exact path={APP_CL} render={() => <Redirect to={APP_CL_COMPANIES} />} />
      <Route exact path={APP_CL_COMPANIES} render={() => <CompanyTable />} />
      <Route exact path={APP_CL_ACTIVITIES} render={() => <ActivityTable />} />
      <Route exact path={APP_CL_MEETINGS} render={() => <MeetingTable viewActions={false} />} />
      <Route exact path={APP_CL_TASKS} render={() => <TaskTable />} />
      <Route
        exact
        path={APP_CL_OPPORTUNITIES}
        render={() =>
          settings?.account?.features.salesFeature ? <OpportunityTable /> : <NoPermissionsView />
        }
      />
      <Route exact path={APP_CL_LEADS} render={() => <LeadTable />} />
      <Route exact path={APP_CL_LISTS} render={() => <ViewTable />} />
      <Route exact path={APP_CL_IMPORT_HISTORY} render={() => <ImportHistory />} />
      <Route exact path={APP_CL_IMPORT} render={() => <ImportForm />} />
    </>
  );
};

export default withWrappers({
  style,
  router: true,
})(Index);
