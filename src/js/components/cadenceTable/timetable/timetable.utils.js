import format from 'date-fns/format';
import eachDay from 'date-fns/eachDayOfInterval';
import lastDayOfMonth from 'date-fns/fp/lastDayOfMonth';
import { BOBJECT_TYPES } from '../../../constants/bobject';

export const getColumnsForWidth = width => {
  let columns;
  if (width >= 1440) {
    columns = 9;
  } else if (width >= 1320) {
    columns = 8;
  } else if (width >= 1200) {
    columns = 7;
  } else if (width >= 1080) {
    columns = 6;
  } else if (width >= 960) {
    columns = 5;
  } else if (width >= 840) {
    columns = 4;
  } else if (width >= 720) {
    columns = 3;
  } else if (width >= 600) {
    columns = 2;
  } else if (width >= 480) {
    columns = 1;
  } else {
    columns = 0;
  }
  return columns;
};

export const showRow = (rowName, bobjectType) => {
  if (
    (rowName === 'OPP. STATUS' && bobjectType === BOBJECT_TYPES.COMPANY) ||
    (rowName === 'QC. STATUS' && bobjectType === BOBJECT_TYPES.OPPORTUNITY)
  ) {
    return false;
  }
  return true;
};

export const getDateRangeFromDisplayData = (displayData, timeWindowFilter) => {
  let dates = [];
  if (displayData.length > 0) {
    const firstDay = displayData[0];
    const lastDay = displayData[displayData.length - 1];
    if (timeWindowFilter === 'day') {
      dates = eachDay({ start: firstDay.date, end: lastDay.date });
    }
    if (timeWindowFilter === 'week') {
      dates = eachDay({ start: firstDay.drillStart, end: lastDay.drillEnd });
    }
    if (timeWindowFilter === 'month') {
      const monthDate1 = new Date(firstDay.display);
      const monthDate2 = new Date(lastDay.display);
      const last = lastDayOfMonth(monthDate2);
      dates = eachDay({ start: monthDate1, end: last });
    }
  }

  return dates.map(date => format(date, 'yyyy-MM-dd'));
};
