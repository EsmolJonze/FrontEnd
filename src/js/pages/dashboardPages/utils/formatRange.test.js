import { formatRange } from './formatRange';

describe('formatRange', () => {
  describe('for weekly interval', () => {
    it('returns the range based on the weekly interval', () => {
      const timestamp = 1615799459042;
      const interval = 'week';

      expect(formatRange(timestamp, interval)).toEqual('15 Mar - 21 Mar');
    });

    it('limits the end of the range', () => {
      const timestamp = 1615799459042;
      const interval = 'week';
      const dateLimited = 1616010000000;

      expect(formatRange(timestamp, interval, dateLimited)).toEqual('15 Mar - 17 Mar');
    });
  });

  describe('for monthly interval', () => {
    it('displays the year and the month', () => {
      const timestamp = 1614639600000;
      const interval = 'month';

      expect(formatRange(timestamp, interval)).toEqual('Mar 2021');
    });
  });

  describe('for quarterly interval', () => {
    it('displays the year and the quarter', () => {
      const timestamp = 1614639600000;
      const interval = 'quarter';

      expect(formatRange(timestamp, interval)).toEqual('Q1 2021');
    });
  });

  describe('for yearly interval', () => {
    it('displays the year and the quarter', () => {
      const timestamp = 1614639600000;
      const interval = 'year';

      expect(formatRange(timestamp, interval)).toEqual('2021');
    });
  });
});
