import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';

export const getInboundActivities = (dates, company, lead, onNewData) => {
  const query = {
    ACTIVITY__TIME: dates,
    ACTIVITY__TYPE: ['ACTIVITY__TYPE__INBOUND'],
  };

  if (company) {
    query.ACTIVITY__COMPANY = [company.id.value];
  }

  if (lead) {
    query.ACTIVITY__LEAD = [lead.id.value];
  }
  return SubscriptionHooks.useBobjectSubscription(
    'Activity',
    {
      query,
      formFields: true,
      injectReferences: true,
      page: 0,
      pageSize: 5000,
    },
    onNewData,
  );
};

export const getCompanyStatusActivities = (dates, companyId, onNewData) =>
  SubscriptionHooks.useBobjectSubscription(
    'Activity',
    {
      query: {
        ACTIVITY__TIME: dates,
        ACTIVITY__TYPE_STATUS: ['ACTIVITY__TYPE_STATUS__COMPANY_STATUS_CHANGED'],
        ACTIVITY__COMPANY: [companyId],
      },
      formFields: true,
      injectReferences: true,
      page: 0,
      pageSize: 5000,
      sort: [{ field: 'ACTIVITY__TIME', direction: 'DESC' }],
    },
    onNewData,
  );

export const getOpportunityStatusActivities = (dates, opportunityId, onNewData) =>
  SubscriptionHooks.useBobjectSubscription(
    'Activity',
    {
      query: {
        ACTIVITY__TIME: dates,
        ACTIVITY__TYPE_STATUS: ['ACTIVITY__TYPE_STATUS__OPPORTUNITY_STATUS_CHANGED'],
        ACTIVITY__OPPORTUNITY: [opportunityId],
      },
      formFields: true,
      injectReferences: true,
      page: 0,
      pageSize: 5000,
      sort: [{ field: 'ACTIVITY__TIME', direction: 'DESC' }],
    },
    onNewData,
  );
