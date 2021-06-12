import { BOBJECT_TYPES } from '../../../constants/bobject';
import { CARD_TYPES } from '../../../constants/card';
import { addDays } from 'date-fns';
import { getDateRange, getSimpleDate } from '../../../utils/dates.utils';
import { LIST_NAMES } from './onCadenceTab.constant';

const baseQuery = (salesFeatureEnabled, activeUser) => ({
  TASK__ASSIGNED_TO: [activeUser?.id],
  ...(salesFeatureEnabled && { TASK__OPPORTUNITY: ['__MATCH_FULL_ROWS__'] }),
  TASK__TASK_TYPE: ['PROSPECT_CADENCE'],
});

const makeQueryDate = (sumDate, logicRole = 'TASK__SCHEDULED_DATE') => {
  const date = new Date();
  const newDate = addDays(date, sumDate);
  const query = {};
  query[logicRole] = [getSimpleDate(newDate)];
  return query;
};

export const overdueTasksQuery = (salesFeatureEnabled, activeUser) => ({
  ...baseQuery(salesFeatureEnabled, activeUser),
  TASK__STATUS: ['TASK__STATUS__OVERDUE'],
  TASK__SCHEDULED_DATE: getDateRange({
    startingDate: new Date(),
    includeToday: false,
    pastRange: 60,
    futureRange: 0,
  }),
});

export const todayQuery = (salesFeatureEnabled, activeUser) => ({
  ...baseQuery(salesFeatureEnabled, activeUser),
  ...makeQueryDate(0),
  TASK__STATUS: ['TASK__STATUS__TODO'],
});

export const tasksLists = (salesFeatureEnabled, activeUser) => [
  {
    name: LIST_NAMES.OVERDUE,
    title: 'Overdue',
    dataIntercom: 'subhomes-on-cadence-overdue-list',
    bobjectType: BOBJECT_TYPES.TASK,
    card: CARD_TYPES.TASK,
    pageSize: 50,
    query: overdueTasksQuery(salesFeatureEnabled, activeUser),
  },
  {
    name: LIST_NAMES.TODAY,
    title: 'Today',
    dataIntercom: 'subhomes-on-cadence-today-list',
    bobjectType: BOBJECT_TYPES.TASK,
    card: CARD_TYPES.TASK,
    pageSize: 50,
    date: new Date(),
    query: todayQuery(salesFeatureEnabled, activeUser),
  },
  {
    name: LIST_NAMES.TOMORROW,
    title: 'Tomorrow',
    dataIntercom: 'subhomes-on-cadence-tomorrow-list',
    bobjectType: BOBJECT_TYPES.TASK,
    card: CARD_TYPES.TASK,
    date: addDays(new Date(), 1),
    query: {
      ...baseQuery(salesFeatureEnabled, activeUser),
      ...makeQueryDate(1),
      TASK__STATUS: ['TASK__STATUS__TODO'],
    },
  },
  {
    name: LIST_NAMES.TWO_DAYS,
    title: 'In 2 days',
    dataIntercom: 'subhomes-on-cadence-2days-list',
    bobjectType: BOBJECT_TYPES.TASK,
    card: CARD_TYPES.TASK,
    date: addDays(new Date(), 2),
    query: {
      ...baseQuery(salesFeatureEnabled, activeUser),
      ...makeQueryDate(2),
      TASK__STATUS: ['TASK__STATUS__TODO'],
    },
    isCompleted: false,
  },
  {
    name: LIST_NAMES.THREE_DAYS,
    title: 'In 3 days',
    dataIntercom: 'subhomes-on-cadence-3days-list',
    bobjectType: BOBJECT_TYPES.TASK,
    card: CARD_TYPES.TASK,
    date: addDays(new Date(), 3),
    query: {
      ...baseQuery(salesFeatureEnabled, activeUser),
      ...makeQueryDate(3),
      TASK__STATUS: ['TASK__STATUS__TODO'],
    },
  },
  {
    name: LIST_NAMES.FOUR_DAYS,
    title: 'In 4 days',
    dataIntercom: 'subhomes-on-cadence-4days-list',
    bobjectType: BOBJECT_TYPES.TASK,
    card: CARD_TYPES.TASK,
    date: addDays(new Date(), 4),
    query: {
      ...baseQuery(salesFeatureEnabled, activeUser),
      ...makeQueryDate(4),
      TASK__STATUS: ['TASK__STATUS__TODO'],
    },
  },
  {
    name: LIST_NAMES.FIVE_DAYS,
    title: 'In 5 days',
    dataIntercom: 'subhomes-on-cadence-5days-list',
    bobjectType: BOBJECT_TYPES.TASK,
    card: CARD_TYPES.TASK,
    date: addDays(new Date(), 5),
    query: {
      ...baseQuery(salesFeatureEnabled, activeUser),
      ...makeQueryDate(5),
      TASK__STATUS: ['TASK__STATUS__TODO'],
    },
    isCompleted: false,
  },
  {
    name: LIST_NAMES.SIX_DAYS,
    title: 'In 6 days',
    dataIntercom: 'subhomes-on-cadence-6days-list',
    bobjectType: BOBJECT_TYPES.TASK,
    card: CARD_TYPES.TASK,
    date: addDays(new Date(), 5),
    query: {
      ...baseQuery(salesFeatureEnabled, activeUser),
      ...makeQueryDate(6),
      TASK__STATUS: ['TASK__STATUS__TODO'],
    },
  },
  {
    name: LIST_NAMES.COMPLETED,
    title: 'Completed tasks',
    dataIntercom: 'subhomes-on-cadence-completed-list',
    bobjectType: BOBJECT_TYPES.TASK,
    card: CARD_TYPES.TASK,
    query: {
      ...baseQuery(salesFeatureEnabled, activeUser),
      TASK__STATUS: [
        'TASK__STATUS__COMPLETED',
        'TASK__STATUS__COMPLETED_OVERDUE',
        'TASK__STATUS__REJECTED',
      ],
      ...makeQueryDate(0),
    },
  },
];

export const showList = (name, lists, filters) => {
  const { date, hideCompleted } = filters;

  if (name === LIST_NAMES.COMPLETED) {
    return !hideCompleted.value;
  }

  const dateFilter = date.value;

  if (dateFilter.length === 0) {
    return true;
  }

  switch (name) {
    case LIST_NAMES.OVERDUE:
      return dateFilter.includes('OVERDUE');
    case LIST_NAMES.TODAY:
      return dateFilter.includes('TODAY');
    case LIST_NAMES.TOMORROW:
      return dateFilter.includes('TOMORROW');
    case LIST_NAMES.TWO_DAYS:
    case LIST_NAMES.THREE_DAYS:
    case LIST_NAMES.FOUR_DAYS:
    case LIST_NAMES.FIVE_DAYS:
    case LIST_NAMES.SIX_DAYS:
      return dateFilter.includes('NEXT_7_DAYS');
    default:
      return false;
  }
};
