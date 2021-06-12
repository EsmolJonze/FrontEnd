import {
  startOfDay,
  endOfDay,
  subYears,
  startOfYear,
  endOfYear,
  subQuarters,
  startOfQuarter,
  endOfQuarter,
  subMonths,
  endOfMonth,
  startOfMonth,
  format,
  max,
  min,
  startOfWeek,
  endOfWeek,
  subDays,
} from 'date-fns';

export const relativeDates = {
  __today__: 'Today',
  __yesterday__: 'Yesterday',
  __thisWeek__: 'This week',
  __lastWeek__: 'Last week',
  __last7days__: 'Last 7 days',
  __last30days__: 'Last 30 days',
  __thisMonth__: 'This month',
  __lastMonth__: 'Last month',
  __thisQuarter__: 'This quarter',
  __lastQuarter__: 'Last quarter',
  __thisYear__: 'This year',
  __lastYear__: 'Last year',
};

export const getRelativeDateInterval = relativeDate => {
  const now = new Date();
  switch (relativeDate) {
    case relativeDates.__yesterday__:
      return {
        start: startOfDay(subDays(now, 1)),
        end: endOfDay(subDays(now, 1)),
      };
    case relativeDates.__thisWeek__:
      return {
        start: startOfWeek(now, { weekStartsOn: 1 }),
        end: endOfWeek(now, { weekStartsOn: 1 }),
      };
    case relativeDates.__lastWeek__:
      return {
        start: startOfWeek(subDays(now, 7), { weekStartsOn: 1 }),
        end: endOfWeek(subDays(now, 7), { weekStartsOn: 1 }),
      };
    case relativeDates.__last7days__:
      return {
        start: subDays(now, 7),
        end: endOfDay(now),
      };
    case relativeDates.__thisMonth__:
      return {
        start: startOfMonth(now),
        end: endOfMonth(now),
      };
    case relativeDates.__lastMonth__:
      return {
        start: startOfMonth(subMonths(now, 1)),
        end: endOfMonth(subMonths(now, 1)),
      };
    case relativeDates.__last30days__:
      return {
        start: subDays(now, 30),
        end: endOfDay(now),
      };
    case relativeDates.__thisQuarter__:
      return {
        start: startOfQuarter(now),
        end: endOfQuarter(now),
      };
    case relativeDates.__lastQuarter__:
      return {
        start: startOfQuarter(subQuarters(now, 1)),
        end: endOfQuarter(subQuarters(now, 1)),
      };
    case relativeDates.__thisYear__:
      return {
        start: startOfYear(now),
        end: endOfYear(now),
      };
    case relativeDates.__lastYear__:
      return {
        start: startOfYear(subYears(now, 1)),
        end: endOfYear(subYears(now, 1)),
      };
    case relativeDates.__today__:
    default:
      return {
        start: startOfDay(now),
        end: endOfDay(now),
      };
  }
};

export const transformDate = date => format(date, 'yyyy-MM-dd', { awareOfUnicodeTokens: true });

export const dateArrayToIntervalString = values => {
  const valueAsDate = values.map(v => new Date(v));
  let text;
  const f = min(valueAsDate);
  let t = null;
  text = transformDate(f);
  if (valueAsDate.length > 1) {
    t = max(valueAsDate);
    text = `${transformDate(f)} to ${transformDate(t)}`;
  }
  return text;
};
