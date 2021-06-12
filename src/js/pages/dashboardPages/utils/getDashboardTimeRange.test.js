import { getDashboardTimeRange } from './getDashboardTimeRange';
import { format } from 'date-fns';

const originalDateNow = Date.now;
const setup = () => {
  Date.now = jest.fn(() => {
    return new Date(2021, 1, 3);
  });
};

const teardown = () => {
  Date.now = originalDateNow;
};

expect.extend({
  toMatchDate(received, expected) {
    const receivedFormatted = format(received, 'yyyy-MM-dd');
    const pass = receivedFormatted === expected;

    return {
      actual: receivedFormatted,
      pass,
      message: () => `Expected ${expected}, but got ${receivedFormatted}`,
    };
  },
});

describe('getDashboardTimeRange', () => {
  beforeEach(setup);
  afterEach(teardown);

  describe('ranges based on type', () => {
    it('returns current day for today', () => {
      const { start, end } = getDashboardTimeRange({ type: 'today' });

      expect(start).toMatchDate('2021-02-03');
      expect(end).toMatchDate('2021-02-03');
    });

    it('returns current week for this_week', () => {
      Date.now = jest.fn(() => {
        return new Date(2021, 1, 7);
      });

      const { start, end } = getDashboardTimeRange({ type: 'this_week' });

      expect(start).toMatchDate('2021-02-01');
      expect(end).toMatchDate('2021-02-07');
    });

    it('returns current month for this_month', () => {
      Date.now = jest.fn(() => {
        return new Date(2021, 1, 28);
      });

      const { start, end } = getDashboardTimeRange({ type: 'this_month' });

      expect(start).toMatchDate('2021-02-01');
      expect(end).toMatchDate('2021-02-28');
    });

    it('returns current quarter for this_quarter', () => {
      Date.now = jest.fn(() => {
        return new Date(2021, 2, 31);
      });

      const { start, end } = getDashboardTimeRange({ type: 'this_quarter' });

      expect(start).toMatchDate('2021-01-01');
      expect(end).toMatchDate('2021-03-31');
    });

    it('returns current year for this_year', () => {
      Date.now = jest.fn(() => {
        return new Date(2021, 11, 31);
      });

      const { start, end } = getDashboardTimeRange({ type: 'this_year' });

      expect(start).toMatchDate('2021-01-01');
      expect(end).toMatchDate('2021-12-31');
    });
  });

  describe('when interval is too big it adds padding at the start of the range', () => {
    it('with five days at the start for type today + interval day', () => {
      const { start, end } = getDashboardTimeRange({ type: 'today', interval: 'day' });

      expect(start).toMatchDate('2021-01-29');
      expect(end).toMatchDate('2021-02-03');
    });

    it('with five weeks at the start for type this_week + interval week', () => {
      Date.now = jest.fn(() => {
        return new Date(2021, 1, 7);
      });

      const { start, end } = getDashboardTimeRange({ type: 'this_week', interval: 'week' });

      expect(start).toMatchDate('2020-12-28');
      expect(end).toMatchDate('2021-02-07');
    });

    it('with five months at the start for type this_month + interval month', () => {
      Date.now = jest.fn(() => {
        return new Date(2021, 1, 28);
      });

      const { start, end } = getDashboardTimeRange({
        type: 'this_month',
        interval: 'month',
      });

      expect(start).toMatchDate('2020-09-01');
      expect(end).toMatchDate('2021-02-28');
    });
  });
});
