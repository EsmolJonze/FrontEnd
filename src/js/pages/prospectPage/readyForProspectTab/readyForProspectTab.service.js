import SessionManagerFactory from '../../../misc/session';
import { BOBJECT_TYPES } from '../../../constants/bobject';
import { CARD_TYPES } from '../../../constants/card';
import { LIST_NAMES } from './readyForProspectTab.constant';
import { getDateRange, getSimpleDate } from '../../../utils/dates.utils';
import { baseQueryReadyForProspect } from '../../../misc/utils/prospectionQueries';

const SessionManager = SessionManagerFactory();

export const showList = (name, list, filters) => {
  const { hideCompleted } = filters;

  if (name === LIST_NAMES.COMPLETED) {
    return !hideCompleted.value;
  }

  return true;
};

export const tasksLists = (bobjectFields, bobjectPicklistFieldValues) => () => [
  {
    name: LIST_NAMES.START_CADENCE,
    title: 'Companies ready to prospect',
    card: CARD_TYPES.TASK,
    bobjectType: BOBJECT_TYPES.TASK,
    query: {
      ...baseQueryReadyForProspect(
        bobjectFields,
        bobjectPicklistFieldValues,
        SessionManager?.getUser()?.id,
      ),
      TASK__SCHEDULED_DATE: getDateRange({
        startingDate: new Date(),
        includeToday: true,
        pastRange: 365,
        futureRange: 0,
      }),
      TASK__STATUS: ['TASK__STATUS__TODO'],
    },
  },
  {
    name: LIST_NAMES.FUTURE_READY,
    title: 'Future ready',
    card: CARD_TYPES.TASK,
    bobjectType: BOBJECT_TYPES.TASK,
    query: {
      ...baseQueryReadyForProspect(
        bobjectFields,
        bobjectPicklistFieldValues,
        SessionManager?.getUser()?.id,
      ),
      TASK__STATUS: ['TASK__STATUS__TODO'],
      TASK__SCHEDULED_DATE: getDateRange({
        startingDate: new Date(),
        includeToday: false,
        pastRange: 0,
        futureRange: 365,
      }),
    },
  },
  {
    name: LIST_NAMES.COMPLETED,
    title: 'Completed tasks',
    card: CARD_TYPES.TASK,
    bobjectType: BOBJECT_TYPES.TASK,
    query: {
      ...baseQueryReadyForProspect(
        bobjectFields,
        bobjectPicklistFieldValues,
        SessionManager?.getUser()?.id,
        true,
      ),
      TASK__STATUS: ['TASK__STATUS__COMPLETED'],
      TASK__COMPLETED_DATE: [getSimpleDate(new Date())],
    },
  },
];
