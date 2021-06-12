import React from 'react';
import ContactLayout from '../../../layouts/contactLayout';
import { BOBJECT_TYPES } from '../../../constants/bobject';
import { useParams } from 'react-router';
import {
  useActiveCompany,
  useActiveLeads,
  useActiveOpportunities,
  useActiveUser,
  useDocumentTitle,
} from '../../../hooks';
import CompanyCard from '../../../layouts/contactLayout/companyCard';
import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { onNewLeads } from '../../../layouts/contactLayout/utils/leads.utils';
import { getValueFromLogicRole } from '../../../utils/bobjects.utils';

const getCompanyName = company => getValueFromLogicRole(company, 'COMPANY__NAME');

const CompanyPage = () => {
  const params = useParams();

  const { company, isLoaded: isCompanyLoaded } = useActiveCompany();
  const { updateActiveLeads } = useActiveLeads();
  const { getBobjectId, activeAccount } = useActiveUser();
  useActiveOpportunities(getBobjectId(params.id, BOBJECT_TYPES.COMPANY));
  useDocumentTitle(getCompanyName(company));

  SubscriptionHooks.useBobjectSubscription(
    'Lead',
    {
      query: { LEAD__COMPANY: [getBobjectId(params?.id, BOBJECT_TYPES.COMPANY)] },
      formFields: true,
      pageSize: 200,
      injectReferences: true,
    },
    onNewLeads(updateActiveLeads),
    () => {},
    !!params?.id && !!activeAccount,
  );

  return (
    <ContactLayout
      bobjectType={BOBJECT_TYPES.COMPANY}
      id={params.id}
      isLoaded={isCompanyLoaded}
      bobject={company}
      InfoCard={CompanyCard}
    />
  );
};

export default CompanyPage;
