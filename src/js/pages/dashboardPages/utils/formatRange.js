import { addDays, addMonths, addWeeks, addQuarters, format, min } from 'date-fns';
import { compact } from 'lodash';

const formatMonthly = value => format(value, 'MMM y');

const formatQuarterly = value => format(value, 'qqq y');

const formatYear = value => format(value, 'y');

const formatWeek = (value, interval, dateLimited) => {
  const dateFormat = 'dd MMM';
  const start = format(value, dateFormat);

  const add = {
    day: addDays,
    week: addWeeks,
    month: addMonths,
    quarter: addQuarters,
  }[interval];

  let endDate = addDays(add(value, 1), -1);
  endDate = min(compact([endDate, dateLimited]));
  const end = format(endDate, dateFormat);

  if (start === end) {
    return start;
  }

  return `${start} - ${end}`;
};

const formatDay = value => format(value, 'dd MMM');

export const formatRange = (value, interval, dateLimited) => {
  try {
    switch (interval) {
      case 'day':
        return formatDay(value);
      case 'week':
        return formatWeek(value, interval, dateLimited);
      case 'month':
        return formatMonthly(value);
      case 'quarter':
        return formatQuarterly(value);
      case 'year':
        return formatYear(value);
      default:
        throw new Error(`Unknown interval ${interval}`);
    }
  } catch (e) {
    console.error('Error formating range');
    console.error(e);
    return '';
  }
};
