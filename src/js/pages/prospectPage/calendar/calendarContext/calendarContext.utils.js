import { getWeeksInMonth } from '../../../../utils/dates.utils';

export const schemaBuilder = ({ date }) =>
  [...Array(getWeeksInMonth(date, { weekStartsOn: 1 }))].map(() => Array(7));
