import { LIST_NAMES } from './inactiveTab.constant';
import { BOBJECT_TYPES } from '../../../constants/bobject';
import { CARD_TYPES } from '../../../constants/card';

export const getOpportunitiesList = activeUser => [
  {
    name: LIST_NAMES.OPPORTUNITIES,
    title: 'Inactive opportunities',
    bobjectType: BOBJECT_TYPES.OPPORTUNITY,
    card: CARD_TYPES.OPPORTUNITY,
    query: {
      OPPORTUNITY__ASSIGNED_TO: [activeUser?.id],
      OPPORTUNITY__WITHOUT_FUTURE_TASKS: ['OPPORTUNITY__WITHOUT_FUTURE_TASKS__YES'],
    },
  },
];
