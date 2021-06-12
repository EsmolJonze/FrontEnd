import { parseISO } from 'date-fns';
import { isIntervalSelectable } from './isIntervalSelectable';

const SELECT_VALUES = ['day', 'week', 'month', 'quarter'];

const getAvailableIntervals = (type, start, end) => {
  return SELECT_VALUES.filter(interval =>
    isIntervalSelectable({
      type,
      interval,
      start,
      end,
    }),
  );
};

describe('isIntervalSelectable', () => {
  describe('for Today', () => {
    it('only "daily" is available', () => {
      expect(getAvailableIntervals('today')).toEqual(['day']);
    });
  });

  describe('for This Week', () => {
    it('"daily" and "weekly" are available', () => {
      expect(getAvailableIntervals('this_week')).toEqual(['day', 'week']);
    });
  });

  describe('for This Month', () => {
    it('"daily", "weekly", and "monthly" are available', () => {
      expect(getAvailableIntervals('this_month')).toEqual(['day', 'week', 'month']);
    });
  });

  describe('for This Quarter', () => {
    it('"daily", "weekly", "monthly" and "quarter" are available', () => {
      expect(getAvailableIntervals('this_quarter')).toEqual(['day', 'week', 'month', 'quarter']);
    });
  });

  describe('for This Year', () => {
    it('"daily", "weekly", "monthly" and "quarter" are available', () => {
      expect(getAvailableIntervals('this_year')).toEqual(['day', 'week', 'month', 'quarter']);
    });
  });

  describe('for All Time', () => {
    it('"daily", "weekly", "monthly" and "quarter" are available', () => {
      expect(getAvailableIntervals('all_time')).toEqual(['month', 'quarter']);
    });
  });

  describe('for a custom time range', () => {
    it('returns only daily for ranges under 2 weeks', () => {
      const result = getAvailableIntervals(
        'custom',
        parseISO('2020-01-01'),
        parseISO('2020-01-10'),
      );

      expect(result).toEqual(['day']);
    });

    it('returns only daily and weekly for ranges longer than 2 weeks but shorter than two months', () => {
      const result = getAvailableIntervals(
        'custom',
        parseISO('2020-01-01'),
        parseISO('2020-02-10'),
      );

      expect(result).toEqual(['day', 'week']);
    });

    it('returns only daily, weekly, and monthly for ranges longer than 2 months but shorter than six months', () => {
      const result = getAvailableIntervals(
        'custom',
        parseISO('2020-01-01'),
        parseISO('2020-04-10'),
      );

      expect(result).toEqual(['day', 'week', 'month']);
    });

    it('returns only daily, weekly, monthly, and quarter for ranges longer than 6 months but shorter than six months', () => {
      const result = getAvailableIntervals(
        'custom',
        parseISO('2020-01-01'),
        parseISO('2020-10-10'),
      );

      expect(result).toEqual(['day', 'week', 'month', 'quarter']);
    });
  });
});
