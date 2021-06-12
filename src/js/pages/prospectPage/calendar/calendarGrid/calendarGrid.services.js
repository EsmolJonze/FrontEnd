import { useEffect } from 'react';
import {
  formatDate,
  getDateRange,
  isAfterToday,
  isBeforeToday,
  isToday,
} from '../../../../utils/dates.utils';
import { useCalendarContext } from '../calendarContext';
import { BobjectApi } from '../../../../misc/api/bobject';
import { calendarActions } from '../calendarContext/calendarContext.types';
import { useUserSettings } from '../../../../components/userPermissions/hooks';
import {
  baseReadyForPropspectQuery,
  buildCalendar,
  fillEmptyDaysOfWeek,
  mapDays,
  mapSingleDay,
  prepareTasksToCalendar,
} from './calendarGrid.utils';
import { useRouter, useActiveUser } from '../../../../hooks';
import { isSalesPage } from '../../../../utils/pages.utils';
import { taskQuery } from '../../../../utils/subhomes.utils';
import {
  DATE_FORMAT,
  OVERDUE_SCHEDULED_DATE,
  READY_SCHEDULED_DATE,
  TODAY_SCHEDULED_DATE,
} from './calendarGrid.constant';
import {
  TASK_FIELDS_LOGIC_ROLE,
  TASK_STATUS_VALUE_LOGIC_ROLE,
  TASK_TYPE,
} from '../../../../constants/task';

export const useAggregationCalendar = (bobjectFields, bobjectPicklistFieldValues) => {
  const { state, dispatch } = useCalendarContext();
  const { pathname } = useRouter();
  const { activeUser } = useActiveUser();
  const settings = useUserSettings();
  const { daysOfMonth } = { ...state };
  const salesFeatureEnabled = settings?.account?.features.salesFeature;
  let otherFields;

  if (salesFeatureEnabled) {
    otherFields = { TASK__OPPORTUNITY: ['__MATCH_EMPTY_ROWS__'] };
    if (isSalesPage(pathname)) {
      otherFields = { TASK__OPPORTUNITY: ['__MATCH_FULL_ROWS__'] };
    }
  }

  const taskRequest = query =>
    BobjectApi.request()
      .Task()
      .aggregation(
        taskQuery({
          aggregations: TASK_FIELDS_LOGIC_ROLE.TASK_TYPE,
          otherFields,
          taskStatus: TASK_STATUS_VALUE_LOGIC_ROLE.TODO,
          userId: activeUser?.id,
          ...query,
        }),
      );

  useEffect(() => {
    const hasToday = daysOfMonth.find(x => isToday(x)) !== undefined;
    const hasBeforeToday = isBeforeToday(daysOfMonth[0]);
    const hasAfterToday = isAfterToday(daysOfMonth[daysOfMonth.length - 1]);
    const requests = [];

    if (hasAfterToday) {
      const filterDate = daysOfMonth
        .filter(x => isAfterToday(x))
        .map(day => formatDate(day, DATE_FORMAT));
      requests.push(
        taskRequest({
          aggregations: TASK_FIELDS_LOGIC_ROLE.SCHEDULED_DATE,
          taskType: [TASK_TYPE.PROSPECT_CADENCE],
          taskScheduledDate: filterDate,
        }).then(mapDays),
      );
    }
    if (hasBeforeToday) {
      const filterDate = daysOfMonth
        .filter(x => isBeforeToday(x))
        .map(day => formatDate(day, DATE_FORMAT));
      requests.push(
        taskRequest({
          aggregations: TASK_FIELDS_LOGIC_ROLE.SCHEDULED_DATE,
          taskType: [TASK_TYPE.PROSPECT_CADENCE, TASK_TYPE.START_CADENCE],
          taskStatus: TASK_STATUS_VALUE_LOGIC_ROLE.COMPLETED,
          taskScheduledDate: filterDate,
        }).then(mapDays),
      );
    }
    if (hasToday) {
      const today = formatDate(new Date(), DATE_FORMAT);
      requests.push(
        taskRequest({
          taskType: [TASK_TYPE.PROSPECT_CADENCE],
          taskScheduledDate: getDateRange(TODAY_SCHEDULED_DATE),
        }).then(mapSingleDay(today)),
      );
      requests.push(
        taskRequest({
          taskType: [TASK_TYPE.NEXT_STEP],
          taskScheduledDate: getDateRange(TODAY_SCHEDULED_DATE),
        }).then(mapSingleDay(today)),
      );
      requests.push(
        taskRequest({
          taskType: [TASK_TYPE.CONTACT_BEFORE_MEETING],
          taskScheduledDate: getDateRange(TODAY_SCHEDULED_DATE),
        }).then(mapSingleDay(today)),
      );
      requests.push(
        taskRequest({
          taskType: [TASK_TYPE.PROSPECT_CADENCE],
          taskStatus: TASK_STATUS_VALUE_LOGIC_ROLE.OVERDUE,
          taskScheduledDate: getDateRange(OVERDUE_SCHEDULED_DATE),
        }).then(mapSingleDay(today)),
      );
      requests.push(
        taskRequest({
          taskType: [TASK_TYPE.CONTACT_BEFORE_MEETING],
          taskScheduledDate: getDateRange(OVERDUE_SCHEDULED_DATE),
        }).then(mapSingleDay(today)),
      );
      requests.push(
        taskRequest({
          taskType: [TASK_TYPE.NEXT_STEP],
          taskScheduledDate: getDateRange(OVERDUE_SCHEDULED_DATE),
        }).then(mapSingleDay(today)),
      );
      requests.push(
        taskRequest({
          aggregations: TASK_FIELDS_LOGIC_ROLE.STATUS,
          taskType: [TASK_TYPE.START_CADENCE],
          otherFields: {
            ...baseReadyForPropspectQuery({ bobjectFields, bobjectPicklistFieldValues }),
            ...otherFields,
          },
          taskScheduledDate: getDateRange(READY_SCHEDULED_DATE),
        }).then(mapSingleDay(today)),
      );
    }

    Promise.all(requests).then(responses => {
      dispatch({
        type: calendarActions.CALENDAR_SET_TASKS,
        payload: prepareTasksToCalendar(responses),
      });
    });
  }, [daysOfMonth, settings, bobjectFields, bobjectPicklistFieldValues]);

  return state.taskPerDay;
};

export const buildCalendarService = ({
  daysOfMonth,
  schema,
  lastWeekOfPrevMonth,
  firstWeekOfNextMonth,
  tasks,
}) =>
  fillEmptyDaysOfWeek({
    calendar: buildCalendar({
      schema,
      daysOfMonth,
      tasks,
    }),
    firstWeekOfNextMonth,
    lastWeekOfPrevMonth,
  });
