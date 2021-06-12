import { differenceInDays } from 'date-fns';

function getIntervalFromCustomRange(start, end) {
  const ellapsedDays = differenceInDays(end, start) + 1;

  if (ellapsedDays <= 28) {
    return 'day';
  }

  if (ellapsedDays <= 30 * 4) {
    return 'week';
  }

  return 'month';
}

/**
 *
 * Maps interval to time unit
 *
 *    - today -> day
 *    - this_week -> week
 *    - this_month -> month
 *    - all_time -> month
 */
export const getIntervalFromType = (type, start, end) => {
  if (type.startsWith('this_')) {
    return type.replace(/this_/, '');
  }

  if (type === 'today') {
    return 'day';
  }

  if (type === 'all_time') {
    return 'month';
  }

  if (type === 'custom') {
    return getIntervalFromCustomRange(start, end);
  }

  throw new Error(`Unknown type interval type ${type}`);
};
