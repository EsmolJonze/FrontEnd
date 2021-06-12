import {
  formatDate,
  getDayAndWeekNumberFromDate,
  getDayOfWeekStartingFromMonday,
  isWeekend,
} from '../../../../utils/dates.utils';
import { DATE_FORMAT } from './calendarGrid.constant';
import { TASK_FIELDS_LOGIC_ROLE } from '../../../../constants/task';
import {
  COMPANY_FIELDS_LOGIC_ROLE,
  COMPANY_STATUS_LOGIC_ROLE,
} from '../../../../constants/company';

export const baseReadyForPropspectQuery = ({
  bobjectFields,
  bobjectPicklistFieldValues,
  isCompleted = false,
}) => {
  const query = {};
  if (!isCompleted) {
    const bobjectField = bobjectFields?.findBy('logicRole')(TASK_FIELDS_LOGIC_ROLE.COMPANY);
    const bobjectFieldSubquery = bobjectFields?.findBy('logicRole')(
      COMPANY_FIELDS_LOGIC_ROLE.STATUS,
    );
    const bobjectFieldSubqueryValue = bobjectPicklistFieldValues?.findBy('logicRole')(
      COMPANY_STATUS_LOGIC_ROLE.READY_TO_PROSPECT,
    );
    const subquery = {};
    if (bobjectField && bobjectFieldSubqueryValue && bobjectFieldSubquery) {
      subquery[bobjectFieldSubquery.id] = {
        query: [bobjectFieldSubqueryValue.id],
        searchMode: null,
      };
      query[bobjectField.id] = { query: subquery, searchMode: 'SUBQUERY__SEARCH' };
    }
  }
  return query;
};

export const mapDays = tasksResponse => {
  const taskPerDay = tasksResponse.contents;
  const tasks = {};
  taskPerDay.forEach((task, index) => {
    task.fieldDataList.forEach(field => {
      tasks[field.value.split('T')[0]] = taskPerDay[index].value;
    });
  });
  return tasks;
};
export const mapSingleDay = day => response => {
  if (response.contents.length > 0) {
    return { [day]: response.contents[0]?.value };
  }
  return { [day]: 0 };
};
export const prepareTasksToCalendar = tasksResponses =>
  tasksResponses.reduce((a, b) => {
    const n = { ...a };
    Object.keys(b).forEach(k => {
      if (n[k] !== undefined) {
        n[k] += b[k];
      } else {
        n[k] = b[k];
      }
    });
    return n;
  }, {});

const numberOfTasksInDay = ({ tasks, date }) => {
  const dateFormated = formatDate(date, DATE_FORMAT);
  return tasks && tasks[dateFormated] ? tasks[dateFormated] : 0;
};

const dayBuilder = ({ date, currentMonth, tasks }) => ({
  value: date,
  day: {
    number: formatDate(date, 'd'),
  },
  isWeekend: isWeekend(date),
  isCurrentMonth: currentMonth,
  tasks: {
    number: numberOfTasksInDay({ tasks, date }),
  },
});

export const buildCalendar = ({ schema, daysOfMonth, tasks }) =>
  daysOfMonth.reduce((prev, curr) => {
    const schemaReduce = [...prev];
    const { dayNumber, weekNumber } = getDayAndWeekNumberFromDate({ date: curr });
    schemaReduce[weekNumber][dayNumber] = dayBuilder({ date: curr, currentMonth: true, tasks });
    return schemaReduce;
  }, schema);

const fillEmptyDaysOfFirstWeek = ({ calendar, lastWeekOfPrevMonth }) => {
  const newCalendar = [...calendar];
  const calendarHasEmptyDayOnFirstWeek = cal => cal[0].reduce(prev => prev + 1, 0) !== 7;

  if (calendarHasEmptyDayOnFirstWeek(newCalendar)) {
    return lastWeekOfPrevMonth.reduce((prev, curr) => {
      const cal = [...prev];
      cal[0][getDayOfWeekStartingFromMonday(curr)] = dayBuilder({
        date: curr,
        currentMonth: false,
      });
      return cal;
    }, newCalendar);
  }

  return calendar;
};

const fillEmptyDaysOfLastWeek = ({ calendar, firstWeekOfNextMonth }) => {
  const newCalendar = [...calendar];
  const calendarHasEmptyDayOnLastWeek = cal =>
    cal[calendar.length - 1].reduce(prev => prev + 1, 0) !== 7;

  if (calendarHasEmptyDayOnLastWeek(newCalendar)) {
    return firstWeekOfNextMonth.reduce((prev, curr) => {
      const cal = [...prev];
      cal[calendar.length - 1][getDayOfWeekStartingFromMonday(curr)] = dayBuilder({
        date: curr,
        currentMonth: false,
      });
      return cal;
    }, newCalendar);
  }
  return calendar;
};

export const fillEmptyDaysOfWeek = ({ calendar, firstWeekOfNextMonth, lastWeekOfPrevMonth }) =>
  fillEmptyDaysOfFirstWeek({
    calendar: fillEmptyDaysOfLastWeek({ calendar, firstWeekOfNextMonth }),
    lastWeekOfPrevMonth,
  });
