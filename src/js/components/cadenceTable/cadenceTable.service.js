import { ServiceApi } from '../../misc/api/service';
import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';

export const loadCadenceByTargetMarket = targetMarketName => {
  const props = {
    url: '/service/view/cadence/targetMarket',
    method: 'GET',
    requestParams: {
      targetMarketName,
    },
  };

  return ServiceApi.request(props);
};

export const loadRecomendedCadenceOpportunity = () => {
  const props = {
    url: '/service/view/cadence/opportunityRecommended',
    method: 'GET',
  };
  return ServiceApi.request(props);
};

export const loadCadenceById = cadenceName => {
  const props = {
    url: `/service/view/cadence/${cadenceName}`,
    method: 'GET',
  };

  return ServiceApi.request(props);
};

export const loadActivityAggregation = (queryActivity, onNewData) =>
  SubscriptionHooks.useBobjectAggSubscription(
    'Activity',
    {
      query: queryActivity,
      formFields: true,
      aggregations: ['ACTIVITY__TYPE', 'ACTIVITY__TIME'],
    },
    onNewData,
  );
export const loadProspectTasksStatus = (query, onNewData, shouldCreateSubscription) =>
  SubscriptionHooks.useBobjectSubscription(
    'Task',
    {
      query,
      formFields: true,
      injectReferences: false,
      sort: [
        {
          field: 'TASK__SCHEDULED_DATE',
          direction: 'ASC',
        },
      ],
      pageSize: 1000,
    },
    onNewData,
    () => {},
    shouldCreateSubscription,
  );
export const loadActivityAggregationStatus = (
  queryActivity,
  onNewData,
  shouldCreateSubscription,
) => {
  SubscriptionHooks.useBobjectAggSubscription(
    'Activity',
    {
      query: queryActivity,
      formFields: true,
      aggregations: ['ACTIVITY__TYPE', 'ACTIVITY__TIME', 'ACTIVITY__TYPE_STATUS'],
    },
    onNewData,
    () => {},
    shouldCreateSubscription,
  );
};

export const loadTaskAggregation = (queryTask, onNewData, shouldCreateSubscription) =>
  SubscriptionHooks.useBobjectAggSubscription(
    'Task',
    {
      query: queryTask,
      formFields: true,
      aggregations: ['TASK__STATUS', 'TASK__SCHEDULED_DATETIME'],
    },
    onNewData,
    () => {},
    shouldCreateSubscription,
  );
