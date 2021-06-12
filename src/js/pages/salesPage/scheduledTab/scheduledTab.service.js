import { BOBJECT_TYPES } from '../../../constants/bobject';
import { CARD_TYPES } from '../../../constants/card';
import { LIST_NAMES } from './scheduledTab.constant';
import { getDateRange, getSimpleDate } from '../../../utils/dates.utils';
import { addDays } from 'date-fns';

const baseQuery = (salesFeatureEnabled, activeUser) => ({
  TASK__ASSIGNED_TO: [activeUser?.id],
  TASK__TASK_TYPE: ['NEXT_STEP'],
  ...(salesFeatureEnabled && { TASK__OPPORTUNITY: ['__MATCH_FULL_ROWS__'] }),
});

const makeQueryDate = (sumDate, logicRole = 'TASK__SCHEDULED_DATE') => {
  const date = new Date();
  const newDate = addDays(date, sumDate);
  const query = {};
  query[logicRole] = [getSimpleDate(newDate)];
  return query;
};

export const overdueNextSteps = (salesFeatureEnabled, activeUser) => ({
  ...baseQuery(salesFeatureEnabled, activeUser),
  TASK__STATUS: ['TASK__STATUS__TODO'],
  TASK__SCHEDULED_DATE: getDateRange({
    startingDate: new Date(),
    includeToday: false,
    pastRange: 60,
    futureRange: 0,
  }),
});

export const todayNextSteps = (salesFeatureEnabled, activeUser) => ({
  ...baseQuery(salesFeatureEnabled, activeUser),
  ...makeQueryDate(0),
  TASK__STATUS: ['TASK__STATUS__TODO'],
});

export const tasksLists = (salesFeatureEnabled, activeUser) => [
  {
    name: LIST_NAMES.OVERDUE,
    title: 'Overdue',
    dataIntercom: 'subhomes-prospecting-nextsteps-overdue-list',
    bobjectType: BOBJECT_TYPES.TASK,
    card: CARD_TYPES.TASK,
    pageSize: 50,
    query: overdueNextSteps(salesFeatureEnabled, activeUser),
  },
  {
    name: LIST_NAMES.TODAY,
    title: 'Today',
    dataIntercom: 'subhomes-prospecting-nextsteps-today-list',
    bobjectType: BOBJECT_TYPES.TASK,
    card: CARD_TYPES.TASK,
    pageSize: 50,
    date: new Date(),
    query: todayNextSteps(salesFeatureEnabled, activeUser),
  },
  {
    name: LIST_NAMES.TOMORROW,
    title: 'Tomorrow',
    dataIntercom: 'subhomes-prospecting-nextsteps-tomorrow-list',
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
    dataIntercom: 'subhomes-prospecting-nextsteps-2days-list',
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
    dataIntercom: 'subhomes-prospecting-nextsteps-3days-list',
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
    dataIntercom: 'subhomes-prospecting-nextsteps-4days-list',
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
    dataIntercom: 'subhomes-prospecting-nextsteps-5days-list',
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
    dataIntercom: 'subhomes-prospecting-nextsteps-6days-list',
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
    dataIntercom: 'subhomes-prospecting-nextsteps-completed-list',
    bobjectType: BOBJECT_TYPES.TASK,
    card: CARD_TYPES.TASK,
    query: {
      ...baseQuery(salesFeatureEnabled, activeUser),
      TASK__STATUS: [
        'TASK__STATUS__COMPLETED',
        'TASK__STATUS__COMPLETED_OVERDUE',
        'TASK__STATUS__REJECTED',
      ],
      ...makeQueryDate(0, 'TASK__COMPLETED_DATE'),
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
