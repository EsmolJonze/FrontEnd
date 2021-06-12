import {
  addDays,
  addMinutes as addMinutesFn,
  addMonths,
  addSeconds,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  formatDistance as formatDistanceFn,
  getDate,
  getDay,
  getWeeksInMonth as getWeeksInMonthFn,
  isAfter,
  isBefore,
  isSameDay as isSameDayFn,
  isWeekend as isWeekendFn,
  isYesterday,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subDays,
  subMonths,
} from 'date-fns';

export const getSimpleDate = date => {
  if (!date) {
    throw new Error('Date parameter is required');
  }
  return format(date, 'yyyy-LL-dd');
};

export const getDateRange = ({
  startingDate,
  pastRange = 15,
  futureRange = 3,
  includeToday = true,
}) => {
  const pastDays = Array.from({ length: pastRange }, (v, k) => k + 1).map(i =>
    subDays(startingDate, i),
  );
  const thisDay = includeToday ? [startingDate] : [];
  const futureDays = Array.from({ length: futureRange }, (v, k) => k + 1).map(i =>
    addDays(startingDate, i),
  );
  return pastDays.concat(thisDay, futureDays).map(d => getSimpleDate(d));
};

export const getWeeksInMonth = (date, dirtyOptions) => getWeeksInMonthFn(date, dirtyOptions);

const getTimeZoneLocationPosition = completeTimeZone =>
  completeTimeZone.split(' ', 3).join(' ').length;

const getWeekOfMonth = (date, dirtyOptions) => {
  const options = dirtyOptions || {};
  const weekStartsOn = options.weekStartsOn == null ? 0 : options.weekStartsOn;

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  const currentDayOfMonth = getDate(date);
  if (Number.isNaN(currentDayOfMonth)) {
    return currentDayOfMonth;
  }

  const startWeekDay = getDay(startOfMonth(date));
  let lastDayOfFirstWeek;

  if (startWeekDay >= weekStartsOn) {
    lastDayOfFirstWeek = weekStartsOn + 7 - startWeekDay;
  } else {
    lastDayOfFirstWeek = weekStartsOn - startWeekDay;
  }

  let weekNumber = 1;

  if (currentDayOfMonth > lastDayOfFirstWeek) {
    const remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek;
    weekNumber += Math.ceil(remainingDaysAfterFirstWeek / 7);
  }
  return weekNumber;
};

export const getDayOfWeekStartingFromMonday = date =>
  getDay(date) - 1 === -1 ? 6 : getDay(date) - 1;
export const getDayAndWeekNumberFromDate = ({ date }) => {
  const numbers = { dayNumber: 0, weekNumber: 0 };
  numbers.dayNumber = getDayOfWeekStartingFromMonday(date);
  numbers.weekNumber = getWeekOfMonth(date, { weekStartsOn: 1 }) - 1;
  return numbers;
};

export const isToday = date => isSameDayFn(date, new Date());
export const isTomorrow = date => isSameDayFn(date, addDays(new Date(), 1));
export const isBeforeToday = date => isBefore(date, startOfDay(new Date()));
export const isAfterToday = date => isAfter(date, startOfDay(new Date()));
export const isAfterTomorrow = date => isAfter(date, addDays(startOfDay(new Date()), 1));
export const isWeekend = date => isWeekendFn(date);
const isSameDay = (date1, date2) => isSameDayFn(date1, date2);

export const intervalDaysOfMonth = ({ date }) =>
  eachDayOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  });

export const intervalDaysOfMonthWithFormat = ({ date, format: f }) =>
  intervalDaysOfMonth({ date }).map(d => format(d, f));

export const lastWeekOfPrevMonth = ({ date }) => {
  const start = startOfWeek(startOfMonth(date), { weekStartsOn: 1 });
  const end = subDays(startOfMonth(date), 1);
  return isBefore(end, start)
    ? []
    : eachDayOfInterval({
        start,
        end,
      });
};

export const firstWeekOfNextMonth = ({ date }) => {
  const start = addDays(endOfMonth(date), 1);
  const end = endOfWeek(endOfMonth(date), { weekStartsOn: 1 });
  return isAfter(start, end)
    ? []
    : eachDayOfInterval({
        start,
        end,
      });
};

export { addDays, getDaysInMonth, differenceInDays } from 'date-fns';
export const isAfterDate = (dateToCompare, date) => isAfter(dateToCompare, date);
export const isSameDayDate = (dateLeft, dateRight) => isSameDay(dateLeft, dateRight);
export const addMonth = (date, numberOfMonth = 1) => addMonths(date, numberOfMonth);
export const addMinutes = (date, minutes) => addMinutesFn(date, minutes);
export const subMonth = (date, numberOfMonth = 1) => subMonths(date, numberOfMonth);
export const formatDate = (date, formatString) => {
  if (!date) {
    throw new Error('date parameter is required');
  }

  return format(date, formatString);
};
export const formatDistance = (date1, date2) => {
  if (!date1 || !date2) {
    throw new Error('date parameter is required');
  }
  return formatDistanceFn(date1, date2);
};

export const formatSecondToElapsedTime = seconds => {
  const helperDate = addSeconds(new Date(1970, 0, 1), seconds);
  return format(helperDate, 'HH:mm:ss');
};

export const today = () =>
  new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0);

export const transformCalendarEventDate = (dateTime, applyTZOffset = true) => {
  let day = dateTime.getDate();
  let hour = dateTime.getHours();
  let min = dateTime.getMinutes();
  let month = dateTime.getMonth() + 1;
  const year = dateTime.getFullYear();

  if (applyTZOffset) {
    hour += dateTime.getTimezoneOffset() / 60;
  }

  month = `0${month}`.slice(-2);
  hour = `0${hour}`.slice(-2);
  min = `0${min}`.slice(-2);
  day = `0${day}`.slice(-2);
  return {
    year,
    month,
    hour,
    min,
    day,
  };
};

export const parseTimeToDatetime = timeToParse => {
  const unitTime = timeToParse.substr(-1);
  const time = timeToParse.substr(0, timeToParse.length - 1);
  const todayTime = new Date().getTime();
  let convert = 60 * 1000;

  if (unitTime === 'M') {
    return addMonths(new Date(), time);
  }

  if (unitTime === 'h') {
    convert = 60 * 60 * 1000;
  }
  if (unitTime === 'd') {
    convert = 24 * 60 * 60 * 1000;
  }
  return new Date(todayTime + convert * time);
};

export const getDateFormated = date => {
  if (date.indexOf('T') > 0) {
    return `${date
      .split('T')[0]
      .split('-')
      .map(x => {
        if (x.length <= 1) {
          return (x = `0${x}`);
        }
        return x;
      })
      .join('-')}T${date
      .split('T')[1]
      .split(':')
      .map(x => {
        if (x.length <= 1) {
          return (x = `0${x}`);
        }
        return x;
      })
      .join(':')}`;
  }
  return date
    .split('-')
    .map(x => {
      if (x.length <= 1) {
        return (x = `0${x}`);
      }
      return x;
    })
    .join('-');
};

export const formatDateAsText = (text, patternFormat = 'MMMM do, yyyy') =>
  text ? format(new Date(text), patternFormat) : 'never';

export const generateDatePrefix = date => {
  if (isToday(date)) {
    return 'Today ';
  }
  if (isYesterday(date)) {
    return 'Yesterday ';
  }
  return '';
};

export const getDateTimestampString = date =>
  new Date(date.getFullYear(), date.getMonth(), date.getDay()).getTime().toString();

export const getLocationFromCompleteTimeZone = timezone => {
  const positionValue = getTimeZoneLocationPosition(timezone);
  return timezone.substring(positionValue + 1).replace(' ', '_');
};

export const getUTCFromCompleteTimeZone = timeZone => {
  const positionValue = getTimeZoneLocationPosition(timeZone);
  return timeZone.substring(0, positionValue);
};

export const convertLocationToHourMinutes = timeZoneLocation => {
  const timeZoneOptions = {
    timeZone: timeZoneLocation,
    hour: '2-digit',
    minute: '2-digit',
  };
  const timeZoneFormatter = Intl.DateTimeFormat([], timeZoneOptions);
  return timeZoneFormatter.format(new Date());
};

export const getUTCDate = date =>
  new Date(new Date(date).getTime() - new Date(date).getTimezoneOffset() * 60000);
