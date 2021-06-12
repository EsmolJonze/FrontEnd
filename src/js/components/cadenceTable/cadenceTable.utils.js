import { bobjectModel } from '../../misc/model/bobjectFieldsModel';
import getWeek from 'date-fns/getWeek';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';
import setWeek from 'date-fns/setWeek';
import endOfWeek from 'date-fns/endOfWeek';
import startOfWeek from 'date-fns/startOfWeek';
import setYear from 'date-fns/setYear';
import format from 'date-fns-tz/esm/format';
import isWithinInterval from 'date-fns/isWithinInterval';
import isSameMonth from 'date-fns/isSameMonth';
import { today } from '../../utils/dates.utils';
import { BOBJECT_TYPES } from '../../constants/bobject';

export const getDisplayPositionAfterTimewindowFilterChange = (
  oldFilter,
  newFilter,
  displayData,
  newTimeWindowData,
) => {
  let newPosition;
  const currentFirstDay = displayData[0];
  if (oldFilter === 'day' && newFilter === 'week') {
    newTimeWindowData.forEach((week, index) => {
      if (isWithinInterval(currentFirstDay.date, { start: week.drillStart, end: week.drillEnd })) {
        newPosition = index;
      }
    });
  }

  if (oldFilter === 'week' && newFilter === 'month') {
    newTimeWindowData.forEach((month, index) => {
      const monthDate = new Date(month.display);
      if (isSameMonth(currentFirstDay.drillStart, monthDate)) {
        newPosition = index;
      }
    });
  }

  if (oldFilter === 'day' && newFilter === 'month') {
    newTimeWindowData.forEach((month, index) => {
      const monthDate = new Date(month.display);
      if (isSameMonth(currentFirstDay.date, monthDate)) {
        newPosition = index;
      }
    });
  }

  if (oldFilter === 'month' && newFilter === 'week') {
    newTimeWindowData.forEach((week, index) => {
      const start = getWeek(week.drillStart, { weekStartsOn: 1 });
      if (start === currentFirstDay.drillStart && week.drillYear === currentFirstDay.drillYear) {
        newPosition = index;
      }
    });
  }

  if (oldFilter === 'month' && newFilter === 'day') {
    let found = false;
    newTimeWindowData.forEach((day, index) => {
      const monthDate = new Date(currentFirstDay.display);
      if (isSameMonth(day.date, monthDate) && !found) {
        newPosition = index;
        found = true;
      }
    });
  }

  if (oldFilter === 'week' && newFilter === 'day') {
    let found = false;
    newTimeWindowData.forEach((day, index) => {
      if (
        isWithinInterval(day.date, {
          start: currentFirstDay.drillStart,
          end: currentFirstDay.drillEnd,
        }) &&
        !found
      ) {
        newPosition = index;
        found = true;
      }
    });
  }

  if (newPosition === undefined) {
    newPosition = currentFirstDay.dayNumber;
  }
  return newPosition;
};

export const buildFiltersActivity = ({
  leadId,
  companyId,
  filters,
  opportunityId,
  salesFeatureEnabled,
}) => {
  const f = {};
  if (leadId !== undefined) {
    f.ACTIVITY__LEAD = [leadId];
  }

  if (opportunityId !== undefined) {
    f.ACTIVITY__OPPORTUNITY = [opportunityId];
  }

  if (companyId !== undefined) {
    f.ACTIVITY__COMPANY = [companyId];
    if (salesFeatureEnabled && opportunityId === undefined) {
      f.ACTIVITY__OPPORTUNITY = ['__MATCH_EMPTY_ROWS__'];
    }
  }

  if (filters?.lead !== 'any') {
    f.ACTIVITY__LEAD = [filters.lead];
  }
  if (filters?.kind === 'attempts') {
    f.ACTIVITY__IS_ATTEMPT = ['Yes'];
  }
  if (filters?.kind === 'touches') {
    f.ACTIVITY__IS_TOUCH = ['Yes'];
  }
  if (filters?.kind === 'incoming') {
    f.ACTIVITY__DIRECTION = ['ACTIVITY__DIRECTION__INCOMING'];
  }
  if (filters?.kind === 'outgoing') {
    f.ACTIVITY__DIRECTION = ['ACTIVITY__DIRECTION__OUTGOING'];
  }
  return f;
};

const dateTextToDate = dateText => {
  const date = new Date(dateText);
  date.setHours(0, 0, 0);
  return date;
};
export const buildFiltersCadenceTask = ({ bobjectId, bobjectType, salesFeatureEnabled }) => {
  if (bobjectType === BOBJECT_TYPES.COMPANY) {
    const query = {
      TASK__TASK_TYPE: ['PROSPECT_CADENCE', 'START_CADENCE'],
      TASK__COMPANY: bobjectId,
    };
    if (salesFeatureEnabled) {
      query.TASK__OPPORTUNITY = '__MATCH_EMPTY_ROWS__';
    }

    return query;
  }
  return {
    TASK__TASK_TYPE: ['PROSPECT_CADENCE'],
    TASK__OPPORTUNITY: bobjectId,
  };
};

export const buildFiltersTask = ({
  leadId,
  companyId,
  filters,
  opportunityId,
  bobjectType,
  salesFeatureEnabled,
}) => {
  const f = { TASK__TASK_TYPE: ['NEXT_STEP'] };
  if (leadId !== undefined) {
    f.TASK__LEAD = [leadId];
  }
  if (opportunityId !== undefined) {
    f.TASK__OPPORTUNITY = [opportunityId];
  }
  if (companyId !== undefined) {
    f.TASK__COMPANY = [companyId];
    if (bobjectType === BOBJECT_TYPES.COMPANY && salesFeatureEnabled) {
      f.TASK__OPPORTUNITY = ['__MATCH_EMPTY_ROWS__'];
    }
  }
  if (filters?.lead !== 'any') {
    f.TASK__LEAD = [filters.lead];
  }
  return f;
};

const activityLogicRolesToNames = {
  ACTIVITY__TYPE__LINKEDIN_MESSAGE: 'LINKEDIN_MESSAGE',
  ACTIVITY__TYPE__EMAIL: 'EMAIL',
  ACTIVITY__TYPE__CALL: 'PHONE_CALL',
  ACTIVITY__TYPE__INBOUND: 'INBOUND',
  ACTIVITY__TYPE_STATUS__COMPANY_STATUS_CHANGED: 'COMPANY_STATUS',
  ACTIVITY__TYPE_STATUS__OPPORTUNITY_STATUS_CHANGED: 'OPPORTUNITY_STATUS',
};

const nonWorkingDays = cadence => {
  const days = [];
  if (!cadence.includesMonday) {
    days.push(1);
  }
  if (!cadence.includesTuesday) {
    days.push(2);
  }
  if (!cadence.includesWednesday) {
    days.push(3);
  }
  if (!cadence.includesThursday) {
    days.push(4);
  }
  if (!cadence.includesFriday) {
    days.push(5);
  }
  if (!cadence.includesSaturday) {
    days.push(6);
  }
  if (!cadence.includesSunday) {
    days.push(0);
  }
  return days;
};

const addActivity = (data, date, activityType, slug, value) => {
  if (data[date] === undefined) {
    data[date] = { date };
  }
  if (data[date][activityType] === undefined) {
    data[date][activityType] = {};
  }
  if (slug !== undefined) {
    data[date][activityType][slug] = value;
  } else {
    data[date][activityType] = value;
  }
};

const addDays = (date, days) => {
  const newDate = new Date(date.valueOf());
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

const isWorkingDay = (day, cadence) => nonWorkingDays(cadence).indexOf(day.getDay()) === -1;

const isPausedDay = (day, uniqueDates) => uniqueDates?.has(day);

const addActivityData = (activitySummary, data) => {
  activitySummary.forEach(c => {
    const dateParts = c.fieldDataList.find(f => f.logicRole === 'ACTIVITY__TIME').text.split('+');
    const date = new Date(dateParts[0]);

    let activityTypeLogicRole = c.fieldDataList.find(f => f.logicRole === 'ACTIVITY__TYPE')
      .valueLogicRole;
    if (activityTypeLogicRole === 'ACTIVITY__TYPE__STATUS') {
      activityTypeLogicRole = c.fieldDataList.find(f => f.logicRole === 'ACTIVITY__TYPE_STATUS')
        ?.valueLogicRole;
    }

    const activityName = activityLogicRolesToNames[activityTypeLogicRole];
    if (
      activityName !== undefined &&
      c.value > 0 &&
      (activityTypeLogicRole !== 'ACTIVITY__TYPE_STATUS__OPPORTUNITY_STATUS_CHANGED' ||
        activityTypeLogicRole !== 'ACTIVITY__TYPE_STATUS__COMPANY_STATUS_CHANGED')
    ) {
      addActivity(
        data,
        date,
        activityLogicRolesToNames[activityTypeLogicRole],
        'activity',
        c.value,
      );
    }
    if (
      activityName !== undefined &&
      c.value > 0 &&
      (activityTypeLogicRole === 'ACTIVITY__TYPE_STATUS__OPPORTUNITY_STATUS_CHANGED' ||
        activityTypeLogicRole === 'ACTIVITY__TYPE_STATUS__COMPANY_STATUS_CHANGED')
    ) {
      addActivity(
        data,
        date,
        activityLogicRolesToNames[activityTypeLogicRole],
        'activity',
        c.value,
      );
    }
  });
};
const addProspectingData = (tasks, data) => {
  tasks.forEach(task => {
    const date = dateTextToDate(task.fields.find(x => x.logicRole === 'TASK__SCHEDULED_DATE').text);
    const description = task.fields.find(x => x.logicRole === 'TASK__DESCRIPTION')?.text;
    if (description) {
      addActivity(data, date, 'cadenceDescription', undefined, description);
    }
    const hasLinkedInMessage = task.fields.find(
      x => x.logicRole === 'TASK__IS_ACTION_LINKEDIN_MESSAGE',
    )?.text;
    const hasCallMessage = task.fields.find(x => x.logicRole === 'TASK__IS_ACTION_CALL')?.text;
    const hasEmailMessage = task.fields.find(x => x.logicRole === 'TASK__IS_ACTION_EMAIL')?.text;
    if (hasLinkedInMessage) {
      addActivity(data, date, 'LINKEDIN_MESSAGE', 'cadence', true);
    }
    if (hasCallMessage) {
      addActivity(data, date, 'PHONE_CALL', 'cadence', true);
    }
    if (hasEmailMessage) {
      addActivity(data, date, 'EMAIL', 'cadence', true);
    }
    if (!hasLinkedInMessage && !hasCallMessage && !hasEmailMessage) {
      addActivity(data, date, 'LINKEDIN_MESSAGE', 'cadence', true);
      addActivity(data, date, 'PHONE_CALL', 'cadence', true);
      addActivity(data, date, 'EMAIL', 'cadence', true);
    }
  });
};
const addTaskData = (taskSummary, data) => {
  taskSummary.forEach(c => {
    const dateParts = c.fieldDataList.find(f => f.logicRole === 'TASK__SCHEDULED_DATETIME');
    const date = new Date(dateParts.text.split('+')[0]);
    const status = c.fieldDataList.find(f => f.logicRole === 'TASK__STATUS').valueLogicRole;
    if (c.value > 0 && status !== 'TASK__STATUS__REJECTED') {
      addActivity(data, date, 'NEXT_STEP', 'cadence', c.value);
    }
    if (status === 'TASK__STATUS__COMPLETED') {
      addActivity(data, date, 'NEXT_STEP', 'activity', c.value);
    }
  });
};

const getTaskDate = selectedTask => {
  if (selectedTask === undefined) {
    return undefined;
  }
  const model = bobjectModel(selectedTask);
  const dateField = model.find('TASK__SCHEDULED_DATE');
  if (dateField !== undefined && dateField.text !== undefined) {
    const d = dateField.text;
    return new Date(d);
  }
  return undefined;
};

const addCadenceData = (cadence, bobject, bobjectType) => {
  if (bobject) {
    const model = bobjectModel(bobject);
    const cadenceData = model.findByLogicRole(`${bobjectType.toUpperCase()}__CADENCE_DATA`);
    if (cadenceData && cadenceData.text && cadenceData.text !== 'null') {
      const cadenceFromBobject = JSON.parse(cadenceData.text);
      return {
        name: cadenceFromBobject.name,
        lastEntityUpdate: cadenceFromBobject.lastEntityUpdate,
      };
    }
  }
  return { name: cadence.name, lastEntityUpdate: cadence.lastEntityUpdate };
};

const daysBetween = (date1, date2) => {
  // Get 1 day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Convert both dates to milliseconds
  const date1Ms = date1.getTime();
  const date2Ms = date2.getTime();

  // Calculate the difference in milliseconds
  const differenceMs = date2Ms - date1Ms;

  // Convert back to days and return
  return Math.round(differenceMs / oneDay);
};

const MINIMUM_DAYS_IN_TIMETABLE = 744;
const getStartCadenceDate = (bobject, activityDates, bobjectType) => {
  const firstActivityDate =
    activityDates.length > 0 ? new Date(Math.min.apply(null, activityDates)) : undefined;
  if (bobject) {
    const model = bobjectModel(bobject);
    const startCadenceField = model.find(`${bobjectType.toUpperCase()}__START_CADENCE`);
    if (startCadenceField?.text !== undefined) {
      return dateTextToDate(startCadenceField.text);
    }
  }
  return firstActivityDate || today();
};

const activityTypes = [
  'EMAIL',
  'PHONE_CALL',
  'LINKEDIN_MESSAGE',
  'INBOUND',
  'NEXT_STEP',
  'COMPANY_STATUS',
  'OPPORTUNITY_STATUS',
];

const transformItems = (data, groupingType, dayNumber) => {
  const { array } = data;
  let display;
  let tooltipDisplay;
  let drillStart;
  let drillEnd;
  const drillYear = getYear(array[0].date);
  if (groupingType === 'week') {
    const start = startOfWeek(array[0].date, { weekStartsOn: 1 });
    const end = endOfWeek(array[0].date, { weekStartsOn: 1 });
    display = `${format(start, 'MMM')} ${format(start, 'dd')} - ${format(end, 'dd')}`;
    tooltipDisplay = `${display} ${format(end, 'yyyy')}`;
    drillStart = start;
    drillEnd = end;
  } else {
    drillStart = getWeek(array[0].date, { weekStartsOn: 1 });
    drillEnd = drillStart;
    display = `${format(array[0].date, 'MMM yyyy')}`;
    tooltipDisplay = display;
  }

  const final = {
    display,
    tooltipDisplay,
    isStartCadence: false,
    isEndCadence: false,
    isToday: false,
    workingDay: true,
    pausedDay: array.filter(e => e.pausedDay).length > 0,
    drillStart,
    drillEnd,
    drillYear,
    dayNumber,
  };

  array.forEach(e => {
    activityTypes.forEach(type => {
      if (e.isStartCadence) final.isStartCadence = true;
      if (e.isEndCadence) final.isEndCadence = true;
      if (e.isToday) final.isToday = true;
      if (e[type]) {
        if (!final[type]) {
          final[type] = {
            activitiesCompleted: 0,
            activitiesCadence: 0,
            activitiesOutOfCadence: 0,
          };
        }
        final[type].activitiesCadence += e[type].activitiesCadence;
        final[type].activitiesCompleted += e[type].activitiesCompleted;
        final[type].activitiesOutOfCadence += e[type].activitiesOutOfCadence;
      }
    });
  });
  return final;
};

const compareMonths = (a, b) => {
  const dateA = new Date();
  dateA.setFullYear(a.year, a.month, 1);
  const dateB = new Date();
  dateB.setFullYear(b.year, b.month, 1);
  if (dateA > dateB) {
    return 1;
  }
  if (dateB > dateA) {
    return -1;
  }
  return 0;
};

const compareWeeks = (a, b) => {
  let dateA = new Date();
  dateA = setYear(dateA, a.year);
  dateA = setWeek(dateA, a.week);
  let dateB = new Date();
  dateB = setYear(dateB, b.year);
  dateB = setWeek(dateB, b.week);
  if (dateA > dateB) {
    return 1;
  }
  if (dateB > dateA) {
    return -1;
  }
  return 0;
};

const transformGroupToItems = (groupData, groupType) => {
  const array = Object.values(groupData);
  array.sort(groupType === 'week' ? compareWeeks : compareMonths);
  const activityPositions = [];
  let todayPosition = 0;
  const data = array.map((value, index) => {
    const transformedItem = transformItems(value, groupType, index);
    activityTypes.forEach(type => {
      if (
        transformedItem[type] &&
        (transformedItem[type].activitiesCadence || transformedItem[type].activitiesOutOfCadence) &&
        !activityPositions.includes(index)
      ) {
        activityPositions.push(index);
      }
    });

    if (transformedItem.isToday) {
      todayPosition = index;
    }
    return transformedItem;
  });
  return { data, activityPositions, todayPosition };
};

const groupByWeek = data => {
  const weeksData = {};
  data.forEach(date => {
    const week = getWeek(date.date, { weekStartsOn: 1 });
    const end = endOfWeek(date.date, { weekStartsOn: 1 });
    const start = startOfWeek(date.date, { weekStartsOn: 1 });
    let year = getYear(start, { weekStartsOn: 1 });
    if (getYear(end, { weekStartsOn: 1 }) > getYear(start, { weekStartsOn: 1 })) {
      year = getYear(end, { weekStartsOn: 1 });
    }
    if (!weeksData[`${week}${year}`]) {
      weeksData[`${week}${year}`] = {
        array: [],
        year,
        week,
      };
    }
    weeksData[`${week}${year}`].array.push(date);
  });

  return transformGroupToItems(weeksData, 'week');
};

const groupByMonth = data => {
  const monthsData = {};
  data.forEach(date => {
    const month = getMonth(date.date);
    const year = getYear(date.date);
    if (!monthsData[`${year}${month}`]) {
      monthsData[`${year}${month}`] = {
        array: [],
        month,
        year,
      };
    }
    monthsData[`${year}${month}`].array.push(date);
  });

  return transformGroupToItems(monthsData, 'month');
};

const transformSingleItems = (array, offsetDays) => {
  const activityPositions = [];
  let todayPosition = 0;
  const newArray = array.map((dayData, index) => {
    dayData.display = format(dayData.date, 'MMM dd');
    dayData.tooltipDisplay = `${format(dayData.date, 'MMM dd')} ${format(dayData.date, 'yyyy')}`;
    activityTypes.forEach(type => {
      if (dayData[type]) {
        const data = dayData[type];
        const activityInfo = {
          activitiesCompleted: 0,
          activitiesCadence: 0,
          activitiesOutOfCadence: 0,
        };
        if (data.activity && !data.cadence) {
          activityInfo.activitiesOutOfCadence += data.activity;
        } else if (data.activity && data.cadence) {
          activityInfo.activitiesCadence += 1;
          activityInfo.activitiesCompleted += 1;
          activityInfo.activitiesOutOfCadence += data.activity - 1;
        } else if (data.cadence && !data.activity) {
          activityInfo.activitiesCadence += 1;
        }
        dayData[type] = activityInfo;
        if (!activityPositions.includes(index)) {
          activityPositions.push(index);
        }
      }
    });
    if (dayData.isToday) {
      todayPosition = index;
    }
    return dayData;
  });
  return {
    data: newArray,
    activityPositions,
    todayPosition: Math.max(0, todayPosition + offsetDays),
  };
};
const ONE_DAY = 1000 * 60 * 60 * 24;
const extractEndDate = tasks => {
  const dates = tasks
    .map(x => x.fields.find(y => y.logicRole?.startsWith('TASK__SCHEDULED_DATE')).text)
    .filter(x => x)
    .map(x => dateTextToDate(x));
  const maxTimestamp = Math.max(...dates);
  return new Date(maxTimestamp + ONE_DAY);
};

export const processData = (
  cadence,
  activitySummary,
  taskSummary,
  prospectingTasks,
  bobject,
  selectedTask,
  offsetDays,
  bobjectType,
  periods,
) => {
  const data = {};
  addActivityData(activitySummary, data);
  const activityDates = Object.keys(data).map(d => new Date(d));
  const startCadenceDate = getStartCadenceDate(bobject, activityDates, bobjectType);
  // use the last prospecting task todo
  const endCadenceDate = extractEndDate(prospectingTasks);
  const { name, lastEntityUpdate } = addCadenceData(cadence, bobject, bobjectType);
  addTaskData(taskSummary, data);
  addProspectingData(prospectingTasks, data);
  const thisDay = today();
  const dates = Object.keys(data).map(d => new Date(d));
  const minDate = new Date(Math.min.apply(null, [...dates, thisDay]));
  const maxDate = new Date(Math.max.apply(null, [...dates, thisDay]));
  let length = MINIMUM_DAYS_IN_TIMETABLE;
  const taskDate = getTaskDate(selectedTask);
  if (daysBetween(minDate, maxDate) >= MINIMUM_DAYS_IN_TIMETABLE) {
    length = daysBetween(minDate, maxDate);
  }
  const array = [];
  for (let i = 0; i < length; i += 1) {
    const day = addDays(minDate, i);
    const dayData = data[day] || {};
    dayData.dayNumber = i;
    dayData.date = day;
    if (thisDay.getTime() === day.getTime()) {
      dayData.isToday = true;
    }
    if (startCadenceDate.getTime() === day.getTime()) {
      dayData.isStartCadence = true;
    }
    if (endCadenceDate.getTime() === day.getTime()) {
      dayData.isEndCadence = true;
    }
    if (taskDate?.getTime() === day.getTime()) {
      dayData.isTaskDate = true;
    }
    dayData.workingDay = isWorkingDay(day, cadence);
    dayData.pausedDay = isPausedDay(day.toISODate(), periods?.uniqueDates);
    array.push(dayData);
  }
  const finalData = transformSingleItems(array, offsetDays);
  const finalDataWeek = groupByWeek(array);
  const finalDataMonth = groupByMonth(array);
  return {
    dayData: finalData,
    weekData: finalDataWeek,
    monthData: finalDataMonth,
    name,
    lastEntityUpdate,
  };
};
