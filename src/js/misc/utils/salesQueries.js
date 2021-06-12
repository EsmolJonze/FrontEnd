import { getDateRange } from '../../utils/dates.utils';

export const generateQuery = ({
  aggregations,
  otherFields,
  pageAndForm = false,
  taskScheduledDate,
  taskStatus,
  taskType,
  userId,
}) => {
  const query = {
    query: {
      TASK__ASSIGNED_TO: [userId],
      TASK__TASK_TYPE: taskType,
      TASK__STATUS: [taskStatus],
      TASK__SCHEDULED_DATE: taskScheduledDate,
      ...otherFields,
    },
  };
  if (pageAndForm) {
    query.injectReferences = true;
    query.formFields = true;
    query.page = 0;
    query.pageSize = 5000;
  }
  if (aggregations) query.aggregations = [aggregations];
  return { ...query };
};

const baseReadyForSales = (
  bobjectFields,
  bobjectPicklistFieldValues,
  userId,
  isCompleted = false,
) => {
  const query = {};
  if (!isCompleted) {
    const bobjectField = bobjectFields?.findBy('logicRole')('TASK__COMPANY');
    const bobjectFieldSubquery = bobjectFields?.findBy('logicRole')('COMPANY__STATUS');
    const bobjectFieldSubqueryValue = bobjectPicklistFieldValues?.findBy('logicRole')(
      'COMPANY__STATUS__READY_TO_PROSPECT',
    );
    const subquery = {};
    if (bobjectField && bobjectFieldSubqueryValue && bobjectFieldSubquery) {
      subquery[bobjectFieldSubquery.id] = {
        query: [bobjectFieldSubqueryValue.id],
        searchMode: null,
      };
      query[bobjectField.id] = { query: subquery, searchMode: 'SUBQUERY__SEARCH' };
    }
  }
  return {
    TASK__ASSIGNED_TO: [userId],
    TASK__TASK_TYPE: ['START_CADENCE'],
    ...query,
  };
};

export const baseQueryReadyForProspect = (
  bobjectFields,
  bobjectPicklistFieldValues,
  userId,
  isCompleted = false,
) => baseReadyForSales(bobjectFields, bobjectPicklistFieldValues, userId, isCompleted);

export const todayTasksByTypeAndStatusQuery = (
  userId,
  aggregations,
  taskType,
  taskStatus,
  pageAndForm = false,
  salesFeatureEnabled,
) => {
  const query = {
    query: {
      TASK__ASSIGNED_TO: [userId],
      TASK__TASK_TYPE: taskType,
      TASK__STATUS: taskStatus,
      TASK__SCHEDULED_DATE: getDateRange({
        startingDate: new Date(),
        includeToday: true,
        futureRange: 0,
        pastRange: 0,
      }),
      ...(salesFeatureEnabled && { TASK__OPPORTUNITY: ['__MATCH_FULL_ROWS__'] }),
    },
  };
  if (pageAndForm) {
    query.injectReferences = true;
    query.formFields = true;
    query.page = 0;
    query.pageSize = 5000;
  }
  if (aggregations) query.aggregations = aggregations;
  return { ...query };
};

export const readyToProspectQuery = (
  bobjectFields,
  bobjectPicklistFieldValues,
  userId,
  pageAndForm = false,
  aggregations,
  salesFeatureEnabled,
) => {
  const query = {
    query: {
      ...baseReadyForSales(bobjectFields, bobjectPicklistFieldValues, userId),
      TASK__STATUS: ['TASK__STATUS__TODO'],
      TASK__SCHEDULED_DATE: getDateRange({
        startingDate: new Date(),
        includeToday: true,
        futureRange: 0,
        pastRange: 365,
      }),
      ...(salesFeatureEnabled && { TASK__OPPORTUNITY: ['__MATCH_FULL_ROWS__'] }),
    },
  };
  if (pageAndForm) {
    query.formFields = true;
    query.injectReferences = false;
    query.page = 0;
    query.pageSize = 10;
  }
  if (aggregations) query.aggregations = aggregations;
  return { ...query };
};
