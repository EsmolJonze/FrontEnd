import { subDays, addDays } from 'date-fns';
import { listsNames } from './tasksTab.constants';
import { getSimpleDate } from '../../utils/dates.utils';
import { BOBJECT_TYPES } from '../../constants/bobject';
import { CARD_TYPES } from '../../constants/card';

const makeQueryDate = ({ days, future }) => {
  const today = new Date();

  const dates = [];
  const changeDate = future ? addDays : subDays;

  for (let i = 1; i < days; i += 1) {
    const date = getSimpleDate(changeDate(today, i));
    dates.push(date);
  }

  return { TASK__SCHEDULED_DATE: dates };
};

const commonTaskListConfig = {
  card: CARD_TYPES.COMPANY_TASK,
  bobjectType: BOBJECT_TYPES.TASK,
};

const commonTaskQuery = (companyId, leadId, opportunityId, salesFeatureEnabled) => ({
  ...(companyId ? { TASK__COMPANY: [companyId] } : {}),
  ...(salesFeatureEnabled && opportunityId
    ? { TASK__OPPORTUNITY: [opportunityId] }
    : { TASK__OPPORTUNITY: ['__MATCH_EMPTY_ROWS__'] }),
  ...(leadId ? { TASK__LEAD: [leadId] } : {}),
});

export const tasksLists = (companyId, leadId, opportunityId, salesFeatureEnabled) => [
  {
    name: listsNames.OVERDUE,
    title: 'Overdue',
    ...commonTaskListConfig,
    query: [
      {
        ...commonTaskQuery(companyId, leadId, opportunityId, salesFeatureEnabled),
        TASK__STATUS: ['TASK__STATUS__OVERDUE', 'TASK__STATUS__TODO'],
        ...makeQueryDate({ days: 300, future: false }),
      },
    ],
  },
  {
    name: listsNames.TODAY,
    title: 'Today',
    ...commonTaskListConfig,
    date: new Date(),
    query: [
      {
        ...commonTaskQuery(companyId, leadId, opportunityId, salesFeatureEnabled),
        TASK__SCHEDULED_DATE: [getSimpleDate(new Date())],
        TASK__STATUS: ['TASK__STATUS__TODO'],
      },
    ],
  },
  {
    name: listsNames.FUTURE_TASKS,
    title: 'Future tasks',
    ...commonTaskListConfig,
    query: {
      ...commonTaskQuery(companyId, leadId, opportunityId, salesFeatureEnabled),
      TASK__STATUS: ['TASK__STATUS__TODO'],
      ...makeQueryDate({ days: 300, future: true }),
    },
  },
  {
    name: listsNames.COMPLETED,
    title: 'Completed',
    ...commonTaskListConfig,
    query: {
      ...commonTaskQuery(companyId, leadId, opportunityId, salesFeatureEnabled),
      TASK__STATUS: [
        'TASK__STATUS__COMPLETED',
        'TASK__STATUS__REJECTED',
        'TASK__STATUS__COMPLETED_OVERDUE',
      ],
    },
    mandatorySort: {
      value: {
        field: 'TASK__COMPLETED_DATE',
        direction: 'DESC',
      },
    },
  },
];
