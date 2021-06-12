import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  useActiveCompany,
  useActiveLeads,
  useActiveOpportunities,
  useActiveUser,
  useDocumentTitle,
} from '../../../hooks';
import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { onNewLeads } from '../../../layouts/contactLayout/utils/leads.utils';
import ContactLayout from '../../../layouts/contactLayout';
import { BOBJECT_TYPES } from '../../../constants/bobject';
import OpportunityCard from '../../../layouts/contactLayout/opportunityCard';
import { getValueFromLogicRole } from '../../../utils/bobjects.utils';

const getOpportunityName = opp => getValueFromLogicRole(opp, 'OPPORTUNITY__NAME');

const OpportunityPage = () => {
  const params = useParams();
  const [error, setError] = useState(null);

  const { isLoaded: isCompanyLoaded } = useActiveCompany();
  const { activeAccount, getBobjectId } = useActiveUser();
  const { updateActiveLeads } = useActiveLeads();
  const {
    selectedOpportunity: opportunity,
    updateSelectedOpportunity,
    opportunities,
    isLoaded: opportunitiesLoaded,
  } = useActiveOpportunities(getBobjectId(params.id, BOBJECT_TYPES.COMPANY));

  useDocumentTitle(getOpportunityName(opportunity));

  useLayoutEffect(() => {
    if (activeAccount) {
      updateSelectedOpportunity(getBobjectId(params.opportunityId, BOBJECT_TYPES.OPPORTUNITY));
    }
  }, [params.opportunityId, opportunities]);

  SubscriptionHooks.useBobjectSubscription(
    'Lead',
    {
      query: {
        LEAD__COMPANY: [getBobjectId(params.id, BOBJECT_TYPES.COMPANY)],
        LEAD__OPPORTUNITY: [getBobjectId(params.opportunityId, BOBJECT_TYPES.OPPORTUNITY)],
      },
      formFields: true,
      pageSize: 50,
      injectReferences: true,
    },
    onNewLeads(updateActiveLeads),
    () => {},
    !!activeAccount,
  );

  useEffect(() => {
    if (opportunitiesLoaded && !opportunity) {
      setError({ status: '404', is400: true });
    } else if (opportunitiesLoaded && opportunity) {
      setError(null);
    }
  }, [opportunitiesLoaded, opportunity]);

  return (
    <ContactLayout
      bobjectType={BOBJECT_TYPES.OPPORTUNITY} // TODO: Change it back to opportunity when we have opportunity tasks
      id={params.opportunityId}
      isLoaded={isCompanyLoaded}
      bobject={opportunity}
      InfoCard={OpportunityCard}
      error={error}
    />
  );
};

export default OpportunityPage;
