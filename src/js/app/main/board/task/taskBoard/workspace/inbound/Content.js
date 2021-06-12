import React from 'react';
import { Route, withRouter } from 'react-router';
import { APP_TASKS_INBOUND_MQL, APP_TASKS_INBOUND_SAL } from '../../../../../../_constants/routes';
import { MqlLeadTable, SalLeadTable } from '../../../../../../../components/bobjectTable';

const Content = () => (
  <>
    <Route path={APP_TASKS_INBOUND_MQL} exact component={MqlLeadTable} />
    <Route path={APP_TASKS_INBOUND_SAL} exact component={SalLeadTable} />
  </>
);

export default withRouter(Content);
