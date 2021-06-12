import React, { useState } from 'react';
import { injectReferencesSearchProcess } from '../../../misc/api/bobject';
import { getDateRange, getSimpleDate } from '../../../utils/dates.utils';
import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { useActiveUser } from '../../../hooks';
import { subDays } from 'date-fns';
import { BOBJECT_TYPES } from '../../../constants/bobject';

const makeQuery = ({ query, sort, bobject, bobjectType, salesFeatureEnable }) => {
  const [tasks, setTasks] = useState([]);
  const [loadingTasks, setLoadingTasks] = useState(true);
  const { activeUser } = useActiveUser();
  let taskOwningFilter;
  if (bobjectType === BOBJECT_TYPES.COMPANY) {
    taskOwningFilter = {
      TASK__COMPANY: [bobject?.id.value],
      ...(salesFeatureEnable && { TASK__OPPORTUNITY: ['__MATCH_EMPTY_ROWS__'] }),
    };
  } else if (bobjectType === BOBJECT_TYPES.LEAD) {
    taskOwningFilter = {
      TASK__LEAD: [bobject?.id.value],
      ...(salesFeatureEnable && { TASK__OPPORTUNITY: ['__MATCH_EMPTY_ROWS__'] }),
    };
  } else if (bobjectType === BOBJECT_TYPES.OPPORTUNITY) {
    taskOwningFilter = { TASK__OPPORTUNITY: [bobject?.id.value] };
  }
  const taskRequest = React.useMemo(() => {
    setLoadingTasks(true);
    return {
      query: {
        TASK__ASSIGNED_TO: [activeUser?.id],
        ...taskOwningFilter,
        ...query,
      },
      injectReferences: true,
      formFields: true,
      page: 0,
      pageSize: 100,
      sort,
    };
  }, [activeUser.id, bobject?.id.value]);

  SubscriptionHooks.useBobjectSubscription(
    'Task',
    taskRequest,
    response => {
      injectReferencesSearchProcess(response);
      setTasks(response.contents);
      setLoadingTasks(false);
    },
    () => {},
    !!bobject,
  );

  return { tasks, loadingTasks };
};

export const useTaskToday = (bobject, bobjectType, salesFeatureEnable) =>
  makeQuery({
    query: {
      TASK__SCHEDULED_DATE: [getSimpleDate(new Date())],
    },
    bobject,
    bobjectType,
    salesFeatureEnable,
  });

const pastDateRange = () =>
  getDateRange({
    startingDate: subDays(new Date(), 1),
    pastRange: 90,
    futureRange: 0,
  });

export const useTaskOverdueProspect = (bobject, bobjectType, salesFeatureEnable) =>
  makeQuery({
    query: {
      TASK__TASK_TYPE: ['PROSPECT_CADENCE'],
      TASK__STATUS: ['TASK__STATUS__OVERDUE'],
      TASK__SCHEDULED_DATE: pastDateRange(),
    },
    sort: [{ field: 'TASK__SCHEDULED_DATE', direction: 'DESC' }],
    bobject,
    bobjectType,
    salesFeatureEnable,
  });

export const useTaskPast = (bobject, bobjectType, salesFeatureEnable) =>
  makeQuery({
    query: {
      TASK__TASK_TYPE: ['NEXT_STEP', 'CONTACT', 'CONTACT_BEFORE_MEETING', 'START_CADENCE'],
      TASK__STATUS: ['TASK__STATUS__TODO'],
      TASK__SCHEDULED_DATE: pastDateRange(),
    },
    sort: [{ field: 'TASK__SCHEDULED_DATE', direction: 'DESC' }],
    bobject,
    bobjectType,
    salesFeatureEnable,
  });
