import {
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfQuarter,
  endOfQuarter,
  startOfYear,
  endOfYear,
  addDays,
  addWeeks,
  addMonths,
  addYears,
  addQuarters,
  min,
} from 'date-fns';

const WEEK_STARTS_ON_MONDAY = { weekStartsOn: 1 };
const START_OF_TIME = new Date('2018-01-01');

const getRangeByType = type => {
  const now = Date.now();
  let start;
  let end;
  switch (type) {
    case 'today':
      start = startOfDay(now);
      end = endOfDay(now);
      break;
    case 'this_week':
      start = startOfWeek(now, WEEK_STARTS_ON_MONDAY);
      end = endOfWeek(now, { weekStartsOn: 1 });
      break;
    case 'this_month':
      start = startOfMonth(now);
      end = endOfMonth(now);
      break;
    case 'this_quarter':
      start = startOfQuarter(now);
      end = endOfQuarter(now);
      break;
    case 'this_year':
      start = startOfYear(now);
      end = endOfYear(now);
      break;
    case 'all_time':
      start = START_OF_TIME;
      end = endOfDay(now);
      break;
    default:
      throw new Error(`getRangeByType: unknown type: ${type}`);
  }
  end = min([end, now]);
  return {
    start,
    end,
  };
};

const adjustRange = (range, type, interval) => {
  const { start, end } = range;

  if (type === 'today' && interval === 'day') {
    return {
      start: addDays(start, -5),
      end,
    };
  }

  if (type === 'this_week' && interval === 'week') {
    return {
      start: addWeeks(start, -5),
      end,
    };
  }

  if (type === 'this_month' && interval === 'month') {
    return {
      start: addMonths(start, -5),
      end,
    };
  }

  if (type === 'this_quarter' && interval === 'quarter') {
    return {
      start: addQuarters(start, -5),
      end,
    };
  }

  if (type === 'this_year' && interval === 'year') {
    return {
      start: addYears(start, -5),
      end,
    };
  }

  return range;
};

export const getDashboardTimeRange = ({ interval, type, start, end, withPadding = true }) => {
  if (type === 'custom') {
    return { start, end };
  }

  const range = getRangeByType(type);

  if (!withPadding) {
    return range;
  }

  return adjustRange(range, type, interval);
};
