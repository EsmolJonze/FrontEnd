import React, { useEffect, useState } from 'react';
import { Route, useParams, Redirect } from 'react-router';
import {
  APP_CL_COMPANIES_COMPANY,
  APP_CL_COMPANIES_COMPANY_OPPORTUNITY,
  APP_CL_LEADS_LEAD,
  companyIdUrl,
} from '../../app/_constants/routes';
import CompanyPage from './companyPage';
import OpportunityPage from './opportunityPage';
import LeadWithoutCompanyPage from './leadWithoutCompanyPage';
import { useActiveLeads } from '../../hooks';
import { getValueFromLogicRole } from '../../utils/bobjects.utils';
import { LEAD_FIELDS_LOGIC_ROLE } from '../../constants/lead';
import { Spinner } from '@bloobirds-it/bloobirds-platform-component-library';

const Routes = () => (
  <>
    <React.Suspense fallback={<Spinner name="loadingCircle" />}>
      <Route exact path={APP_CL_COMPANIES_COMPANY} component={CompanyPage} />
      <Route exact path={APP_CL_COMPANIES_COMPANY_OPPORTUNITY} component={OpportunityPage} />
      <Route
        exact
        path={APP_CL_LEADS_LEAD}
        component={routerProps => {
          const { id: leadId } = useParams();
          const [companyId, setCompanyId] = useState();
          const { updateSingleLead, leads } = useActiveLeads();

          useEffect(() => {
            if (leadId) {
              updateSingleLead(leadId);
            }
          }, [leadId]);

          useEffect(() => {
            if (leads) {
              setCompanyId(getValueFromLogicRole(leads[0], LEAD_FIELDS_LOGIC_ROLE.COMPANY));
            }
          }, [leads]);

          return leads && companyId ? (
            <Redirect to={`${companyIdUrl(companyId)}?leadId=${leads[0].id.value}`} />
          ) : (
            <LeadWithoutCompanyPage {...routerProps} />
          );
        }}
      />
    </React.Suspense>
  </>
);

export default Routes;
