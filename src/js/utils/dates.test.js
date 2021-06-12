import {
  getSimpleDate,
  getDateRange,
  getDayOfWeekStartingFromMonday,
  getDayAndWeekNumberFromDate,
  intervalDaysOfMonth,
  lastWeekOfPrevMonth,
  firstWeekOfNextMonth,
  formatDistance,
  formatSecondToElapsedTime,
  generateDatePrefix,
  getLocationFromCompleteTimeZone,
  getUTCFromCompleteTimeZone,
} from './dates.utils';

test('change date format into YYYY-mm-dd format', () => {
  expect(getSimpleDate(new Date('2020-12-10'))).toBe('2020-12-10');
});

test('create range of dates from a given date and specific past & future steps', () => {
  const outputMap = getDateRange({
    startingDate: new Date('2020-12-10'),
    pastRange: 2,
    futureRange: 2,
    includeToday: true,
  });
  const expectedMap = {
    0: '2020-12-08',
    1: '2020-12-09',
    2: '2020-12-10',
    3: '2020-12-11',
    4: '2020-12-12',
  };
  let bool = true;
  if (Object.keys(outputMap).length !== Object.keys(expectedMap).length) {
    bool = false;
  }
  for (const value of Object.values(expectedMap)) {
    if (Object.values(outputMap).includes(value) === false) {
      bool = false;
    }
  }
  expect(bool).toBe(true);
});

test('get number of day starting from Monday (Monday is 1 and Sunday is 0)', () => {
  const monday = getDayOfWeekStartingFromMonday(new Date('2020-12-08')) === 1;
  const tuesday = getDayOfWeekStartingFromMonday(new Date('2020-12-09')) === 2;
  const wednesday = getDayOfWeekStartingFromMonday(new Date('2020-12-10')) === 3;
  const thursday = getDayOfWeekStartingFromMonday(new Date('2020-12-11')) === 4;
  const friday = getDayOfWeekStartingFromMonday(new Date('2020-12-12')) === 5;
  const saturday = getDayOfWeekStartingFromMonday(new Date('2020-12-13')) === 6;
  const sunday = getDayOfWeekStartingFromMonday(new Date('2020-12-14')) === 0;
  expect(monday && tuesday && wednesday && thursday && friday && saturday && sunday).toBe(true);
});

// We only check the week number since the week day is checked on the previous test
test('get day of week and number of week in that month', () => {
  const week0 = getDayAndWeekNumberFromDate({ date: new Date('2020-12-02') }).weekNumber === 0;
  const week1 = getDayAndWeekNumberFromDate({ date: new Date('2020-12-08') }).weekNumber === 1;
  const week2 = getDayAndWeekNumberFromDate({ date: new Date('2020-12-15') }).weekNumber === 2;
  const week3 = getDayAndWeekNumberFromDate({ date: new Date('2020-12-22') }).weekNumber === 3;
  const week4 = getDayAndWeekNumberFromDate({ date: new Date('2020-12-29') }).weekNumber === 4;
  expect(week0 && week1 && week2 && week3 && week4).toBe(true);
});

test('gives an interval of each day of the month provided through the date', () => {
  const january = intervalDaysOfMonth({ date: new Date('2020-01-02') }).length === 31;
  const february = intervalDaysOfMonth({ date: new Date('2020-02-02') }).length === 29;
  const march = intervalDaysOfMonth({ date: new Date('2020-03-02') }).length === 31;
  const april = intervalDaysOfMonth({ date: new Date('2020-04-02') }).length === 30;
  const may = intervalDaysOfMonth({ date: new Date('2020-05-02') }).length === 31;
  const june = intervalDaysOfMonth({ date: new Date('2020-06-02') }).length === 30;
  const july = intervalDaysOfMonth({ date: new Date('2020-07-02') }).length === 31;
  const august = intervalDaysOfMonth({ date: new Date('2020-08-02') }).length === 31;
  const september = intervalDaysOfMonth({ date: new Date('2020-09-02') }).length === 30;
  const october = intervalDaysOfMonth({ date: new Date('2020-10-02') }).length === 31;
  const november = intervalDaysOfMonth({ date: new Date('2020-11-02') }).length === 30;
  const december = intervalDaysOfMonth({ date: new Date('2020-12-02') }).length === 31;
  expect(
    january &&
      february &&
      march &&
      april &&
      may &&
      june &&
      july &&
      august &&
      september &&
      october &&
      november &&
      december,
  ).toBe(true);
});

test('gives an interval of the days from the last week of the previous month given', () => {
  const decemberLastWeek = Object.values(lastWeekOfPrevMonth({ date: new Date('2020-01-02') }));
  const octoberLastWeek = Object.values(lastWeekOfPrevMonth({ date: new Date('2020-11-02') }));
  expect(decemberLastWeek.length === 2 && octoberLastWeek.length === 6).toBe(true);
});

test('gives an interval of the days from the first week of the following month given', () => {
  const februaryFirstWeek = Object.values(firstWeekOfNextMonth({ date: new Date('2020-01-02') }));
  const novemberFirstWeek = Object.values(firstWeekOfNextMonth({ date: new Date('2020-10-02') }));
  const aprilFirstWeek = Object.values(firstWeekOfNextMonth({ date: new Date('2020-03-02') }));
  expect(
    februaryFirstWeek.length === 2 && novemberFirstWeek.length === 1 && aprilFirstWeek.length === 5,
  ).toBe(true);
});

test('gives the amount of days between two dates or an approximation of months if it is more than 1 month', () => {
  const elevenDays = formatDistance(new Date('2020-11-12'), new Date('2020-11-23'));
  const twentyDays = formatDistance(new Date('2020-11-12'), new Date('2020-12-02'));
  expect(elevenDays === '11 days' && twentyDays === '20 days').toBe(true);
});

test('converts seconds to format time HH:mm:ss. It is module 86400, i.e, each 24 hours it gets reset', () => {
  expect(
    formatSecondToElapsedTime(86399) === '23:59:59' &&
      formatSecondToElapsedTime(86400) === '00:00:00',
  ).toBe(true);
});

test('given a date returns Today if it is today', () => {
  expect(generateDatePrefix(new Date())).toBe('Today ');
});

test('given a date returns empty string if it is neither today nor yesterday', () => {
  expect(generateDatePrefix(new Date('2020-11-02'))).toBe('');
});

test('given a date returns Yesterday if it is yesterday', () => {
  const date = new Date();
  expect(generateDatePrefix(new Date(date.setDate(date.getDate() - 1)))).toBe('Yesterday ');
});

test('given a string with a complete timezone description we get the location', () => {
  const timeZoneLocation = getLocationFromCompleteTimeZone('UTC + 06:00 America/Los Angeles');
  expect(timeZoneLocation).toBe('America/Los_Angeles');
});

test('given a string with a complete timezone description we get the UTC info', () => {
  const timeZoneLocation = getUTCFromCompleteTimeZone('UTC + 06:00 America/Los Angeles');
  expect(timeZoneLocation).toBe('UTC + 06:00');
});
