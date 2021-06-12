import React from 'react';
import {
  TASK_FEED_FETCH_DATA_INBOUND_COUNT_SUCCESS,
  TASK_FEED_FETCH_DATA_MEETING_OVERDUE_COUNT_SUCCESS,
  TASK_FEED_FETCH_DATA_MEETING_TODAY_COUNT_SUCCESS,
  TASK_FEED_FETCH_DATA_NEXT_STEP_OVERDUE_COUNT_SUCCESS,
  TASK_FEED_FETCH_DATA_NEXT_STEP_TODAY_COUNT_SUCCESS,
  TASK_FEED_FETCH_DATA_PROSPECT_OVERDUE_COUNT_SUCCESS,
  TASK_FEED_FETCH_DATA_PROSPECT_TODAY_COUNT_SUCCESS,
  TASK_FEED_FETCH_DATA_READY_TO_PROSPECT_TODAY_AND_PAST_COUNT_SUCCESS,
  TASK_FEED_FETCH_DATA_SUCCESS,
} from '../../../../../actions/dictionary';
import { getDateRange } from '../../../../../utils/dates.utils';
import { useUserSettings } from '../../../../../components/userPermissions/hooks';
import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { useActiveUser } from '../../../../../hooks';
import {
  readyToProspectQuery,
  overdueActiveProspectQuery,
  todayTasksByTypeAndStatusQuery,
} from '../../../../../misc/utils/prospectionQueries';

export const useTasks = (bobjectFields, bobjectPicklistFieldValues, dispatch) => {
  const settings = useUserSettings();
  const { activeUser } = useActiveUser();
  const salesFeatureEnabled = settings?.account?.features.salesFeature;

  const taskRequest = React.useMemo(
    () => ({
      query: {
        TASK__ASSIGNED_TO: [activeUser?.id],
        TASK__SCHEDULED_DATE: getDateRange({
          startingDate: new Date(),
          pastRange: 90,
          futureRange: 0,
        }),
        TASK__STATUS: ['TASK__STATUS__TODO'],
        TASK__TASK_TYPE: [
          'ADD_LEADS_TO_QC',
          'START_CADENCE',
          'CONTACT_BEFORE_MEETING',
          'NEXT_STEP',
          'PROSPECT_CADENCE',
        ],
        ...(salesFeatureEnabled && { TASK__OPPORTUNITY: ['__MATCH_EMPTY_ROWS__'] }),
      },
      aggregations: ['TASK__TASK_TYPE'],
      injectReferences: true,
      formFields: true,
      page: 0,
      pageSize: 5000,
    }),
    [settings],
  );

  const prospectTodayRequest = React.useMemo(
    () =>
      todayTasksByTypeAndStatusQuery(
        activeUser?.id,
        ['TASK__TASK_TYPE'],
        ['PROSPECT_CADENCE'],
        ['TASK__STATUS__TODO'],
        false,
        salesFeatureEnabled,
      ),
    [settings],
  );
  const overdueProspectRequest = React.useMemo(
    () =>
      overdueActiveProspectQuery(
        activeUser?.id,
        'TASK__STATUS__OVERDUE',
        'PROSPECT_CADENCE',
        ['TASK__TASK_TYPE'],
        false,
        salesFeatureEnabled,
      ),
    [settings],
  );

  const overdueNextStepRequest = React.useMemo(
    () =>
      overdueActiveProspectQuery(
        activeUser?.id,
        'TASK__STATUS__TODO',
        'NEXT_STEP',
        ['TASK__TASK_TYPE'],
        false,
        salesFeatureEnabled,
      ),
    [settings],
  );

  const overdueMeetingRequest = React.useMemo(
    () =>
      overdueActiveProspectQuery(
        activeUser?.id,
        'TASK__STATUS__TODO',
        'CONTACT_BEFORE_MEETING',
        ['TASK__TASK_TYPE'],
        false,
        salesFeatureEnabled,
      ),
    [settings],
  );
  const readyToProspectRequest = React.useMemo(
    () => readyToProspectQuery(bobjectFields, bobjectPicklistFieldValues, activeUser?.id, false),
    [settings],
  );
  const nextStepRequest = React.useMemo(
    () =>
      todayTasksByTypeAndStatusQuery(
        activeUser?.id,
        ['TASK__TASK_TYPE'],
        ['NEXT_STEP'],
        ['TASK__STATUS__TODO'],
        false,
        salesFeatureEnabled,
      ),
    [settings],
  );
  const meetingRequest = React.useMemo(
    () =>
      todayTasksByTypeAndStatusQuery(
        activeUser?.id,
        ['TASK__TASK_TYPE'],
        ['CONTACT_BEFORE_MEETING'],
        ['TASK__STATUS__TODO'],
        false,
        salesFeatureEnabled,
      ),
    [settings],
  );
  SubscriptionHooks.useBobjectAggSubscription('Task', taskRequest, response => {
    dispatch({ type: TASK_FEED_FETCH_DATA_SUCCESS, payload: response });
  });
  SubscriptionHooks.useBobjectAggSubscription(
    'Lead',
    {
      query: {
        LEAD__IS_MQL_OR_SAL_REQUIRED: ['LEAD__IS_MQL_OR_SAL_REQUIRED__YES'],
      },
      aggregations: ['LEAD__IS_MQL_OR_SAL_REQUIRED'],
    },
    response => {
      dispatch({ type: TASK_FEED_FETCH_DATA_INBOUND_COUNT_SUCCESS, payload: response });
    },
  );
  SubscriptionHooks.useBobjectAggSubscription('Task', prospectTodayRequest, response => {
    dispatch({ type: TASK_FEED_FETCH_DATA_PROSPECT_TODAY_COUNT_SUCCESS, payload: response });
  });
  SubscriptionHooks.useBobjectAggSubscription('Task', overdueProspectRequest, response => {
    dispatch({ type: TASK_FEED_FETCH_DATA_PROSPECT_OVERDUE_COUNT_SUCCESS, payload: response });
  });
  SubscriptionHooks.useBobjectAggSubscription('Task', overdueNextStepRequest, response => {
    dispatch({ type: TASK_FEED_FETCH_DATA_NEXT_STEP_OVERDUE_COUNT_SUCCESS, payload: response });
  });
  SubscriptionHooks.useBobjectAggSubscription('Task', overdueMeetingRequest, response => {
    dispatch({ type: TASK_FEED_FETCH_DATA_MEETING_OVERDUE_COUNT_SUCCESS, payload: response });
  });
  SubscriptionHooks.useBobjectSubscription('Task', readyToProspectRequest, response => {
    dispatch({
      type: TASK_FEED_FETCH_DATA_READY_TO_PROSPECT_TODAY_AND_PAST_COUNT_SUCCESS,
      payload: response,
    });
  });
  SubscriptionHooks.useBobjectAggSubscription('Task', nextStepRequest, response => {
    dispatch({ type: TASK_FEED_FETCH_DATA_NEXT_STEP_TODAY_COUNT_SUCCESS, payload: response });
  });
  SubscriptionHooks.useBobjectAggSubscription('Task', meetingRequest, response => {
    dispatch({ type: TASK_FEED_FETCH_DATA_MEETING_TODAY_COUNT_SUCCESS, payload: response });
  });
};
