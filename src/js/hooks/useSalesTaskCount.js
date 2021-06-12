import { atom, useRecoilState } from 'recoil';
import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { useActiveUser } from './useActiveUser';
import { useUserSettings } from '../components/userPermissions/hooks';
import { taskQuery, baseQuery } from '../utils/subhomes.utils';
import { getDateRange } from '../utils/dates.utils';
import { OVERDUE_SCHEDULED_DATE } from '../constants/subhomes';

const onCadenceTodayCountAtom = atom({
  key: 'onCadenceTodayCountAtom',
  default: 0,
});
const onCadenceOverdueCountAtom = atom({
  key: 'onCadenceOverdueCountAtom',
  default: 0,
});
const scheduledTodayCountAtom = atom({
  key: 'scheduledTodayCountAtom',
  default: 0,
});
const scheduledOverdueCountAtom = atom({
  key: 'scheduledOverdueCountAtom',
  default: 0,
});
const meetingTodayCountAtom = atom({
  key: 'meetingTodayCountAtom',
  default: 0,
});
const meetingOverdueCountAtom = atom({
  key: 'meetingOverdueCountAtom',
  default: 0,
});
const inactiveCountAtom = atom({
  key: 'inactiveCountAtom',
  default: 0,
});

export const useSalesTasksCount = ({ shouldCreateSubscription }) => {
  const [onCadenceTodayCount, setOnCadenceTodayCount] = useRecoilState(onCadenceTodayCountAtom);
  const [onCadenceOverdueCount, setOnCadenceOverdueCount] = useRecoilState(
    onCadenceOverdueCountAtom,
  );
  const [scheduledTodayCount, setScheduledTodayCount] = useRecoilState(scheduledTodayCountAtom);
  const [scheduledOverdueCount, setScheduledOverdueCount] = useRecoilState(
    scheduledOverdueCountAtom,
  );
  const [meetingTodayCount, setMeetingTodayCount] = useRecoilState(meetingTodayCountAtom);
  const [meetingOverdueCount, setMeetingOverdueCount] = useRecoilState(meetingOverdueCountAtom);
  const [inactiveCount, setInactiveCount] = useRecoilState(inactiveCountAtom);
  const { activeUser } = useActiveUser();
  const settings = useUserSettings();

  const salesFeatureEnabled = settings?.account?.features.salesFeature;
  const otherFields = salesFeatureEnabled ? { TASK__OPPORTUNITY: ['__MATCH_FULL_ROWS__'] } : null;

  const queryOnCadenceToday = taskQuery(baseQuery({ otherFields, activeUser }));
  SubscriptionHooks.useBobjectAggSubscription(
    'Task',
    queryOnCadenceToday,
    response => {
      setOnCadenceTodayCount(response.contents[0]?.value || 0);
    },
    () => {},
    !!queryOnCadenceToday && shouldCreateSubscription,
  );

  const queryOnCadenceOverdue = taskQuery({
    ...baseQuery({ otherFields, activeUser }),
    taskScheduledDate: getDateRange(OVERDUE_SCHEDULED_DATE),
    taskStatus: 'TASK__STATUS__OVERDUE',
    userId: activeUser.id,
  });
  SubscriptionHooks.useBobjectAggSubscription(
    'Task',
    queryOnCadenceOverdue,
    response => {
      setOnCadenceOverdueCount(response.contents[0]?.value || 0);
    },
    () => {},
    !!queryOnCadenceOverdue && shouldCreateSubscription,
  );

  const queryScheduledToday = taskQuery({
    ...baseQuery({ otherFields, activeUser }),
    taskType: ['NEXT_STEP'],
  });
  SubscriptionHooks.useBobjectAggSubscription(
    'Task',
    queryScheduledToday,
    response => {
      setScheduledTodayCount(response.contents[0]?.value || 0);
    },
    () => {},
    !!queryScheduledToday && shouldCreateSubscription,
  );

  const queryScheduledOverdue = taskQuery({
    ...baseQuery({ otherFields, activeUser }),
    taskScheduledDate: getDateRange(OVERDUE_SCHEDULED_DATE),
    taskType: ['NEXT_STEP'],
  });
  SubscriptionHooks.useBobjectAggSubscription(
    'Task',
    queryScheduledOverdue,
    response => {
      setScheduledOverdueCount(response.contents[0]?.value || 0);
    },
    () => {},
    !!queryScheduledOverdue && shouldCreateSubscription,
  );

  const queryMeetingToday = taskQuery({
    ...baseQuery({ otherFields, activeUser }),
    taskType: ['MEETING'],
  });
  SubscriptionHooks.useBobjectAggSubscription(
    'Task',
    queryMeetingToday,
    response => {
      setMeetingTodayCount(response.contents[0]?.value || 0);
    },
    () => {},
    !!queryMeetingToday && shouldCreateSubscription,
  );

  const queryMeetingOverdue = taskQuery({
    ...baseQuery({ otherFields, activeUser }),
    taskScheduledDate: getDateRange(OVERDUE_SCHEDULED_DATE),
    taskType: ['MEETING'],
  });
  SubscriptionHooks.useBobjectAggSubscription(
    'Task',
    queryMeetingOverdue,
    response => {
      setMeetingOverdueCount(response.contents[0]?.value || 0);
    },
    () => {},
    !!queryMeetingOverdue && shouldCreateSubscription,
  );

  const queryInactive = {
    formFields: true,
    injectReferences: false,
    page: 0,
    pageSize: 10,
    query: {
      OPPORTUNITY__ASSIGNED_TO: [activeUser.id],
      OPPORTUNITY__WITHOUT_FUTURE_TASKS: ['OPPORTUNITY__WITHOUT_FUTURE_TASKS__YES'],
    },
    aggregations: ['OPPORTUNITY__WITHOUT_FUTURE_TASKS'],
  };

  SubscriptionHooks.useBobjectAggSubscription('Opportunity', queryInactive, response => {
    setInactiveCount(response.contents[0]?.value || 0);
  });

  return {
    onCadenceTodayCount,
    onCadenceOverdueCount,
    scheduledTodayCount,
    scheduledOverdueCount,
    meetingTodayCount,
    meetingOverdueCount,
    inactiveCount,
  };
};
