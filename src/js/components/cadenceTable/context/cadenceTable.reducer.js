import { useReducer } from 'react';
import { cadenceTableActions as actions } from './cadenceTable.types';
import { getWeek, isSameDay } from 'date-fns';
import { getDisplayPositionAfterTimewindowFilterChange } from '../cadenceTable.utils';

const initialState = {
  cadence: undefined,
  company: undefined,
  opportunity: undefined,
  activitySummary: undefined,
  taskSummary: undefined,
  timeWindowFilter: 'day',
  dayData: undefined,
  weekData: undefined,
  monthData: undefined,
  displayPosition: 0,
  displayData: [],
  leads: undefined,
  lastEntityUpdate: undefined,
  cadenceName: undefined,
  companyStatusColors: undefined,
  extraDays: 9,
  lead: undefined,
};

const cadenceTableReducer = (state, action) => {
  const newState = { ...state };
  let position;
  let found = false;
  switch (action.type) {
    case actions.CADENCE_TABLE_CADENCE_LOADED:
      newState.cadence = action.payload.cadence;
      newState.company = action.payload.company;
      newState.opportunity = action.payload.opportunity;
      newState.lead = action.payload.lead;
      return newState;
    case actions.CADENCE_TABLE_CHANGE_TIMEWINDOW_FILTER:
      newState.timeWindowFilter = action.payload;
      position = getDisplayPositionAfterTimewindowFilterChange(
        state.timeWindowFilter,
        action.payload,
        state.displayData,
        state[`${action.payload}Data`].data,
      );
      newState.displayData = newState[`${newState.timeWindowFilter}Data`].data.slice(
        position,
        position + state.extraDays,
      );
      newState.displayPosition = position;

      return newState;
    case actions.CADENCE_TABLE_LOAD_DATA:
      newState.dayData = action.payload.dayData;
      newState.weekData = action.payload.weekData;
      newState.monthData = action.payload.monthData;
      newState.lastEntityUpdate = action.payload.lastEntityUpdate;
      newState.cadenceName = action.payload.cadenceName;
      return newState;
    case actions.CADENCE_TABLE_DRILLDOWN_MONTH_TO_WEEK:
      newState.timeWindowFilter = 'week';
      state.weekData.data.forEach((week, index) => {
        const start = getWeek(week.drillStart, { weekStartsOn: 1 });
        if (start === action.payload.drill && week.drillYear === action.payload.drillYear) {
          newState.displayData = newState[`${newState.timeWindowFilter}Data`].data.slice(
            index,
            index + state.extraDays,
          );
          newState.displayPosition = index;
        }
      });
      return newState;
    case actions.CADENCE_TABLE_DRILLDOWN_WEEK_TO_DAY:
      newState.timeWindowFilter = 'day';
      state.dayData.data.forEach((day, index) => {
        if (isSameDay(day.date, action.payload.drill)) {
          newState.displayData = newState[`${newState.timeWindowFilter}Data`].data.slice(
            index,
            index + state.extraDays,
          );
          found = true;
          newState.displayPosition = index;
        }
      });
      if (!found) {
        newState.displayData = newState[`${newState.timeWindowFilter}Data`].data.slice(
          0,
          state.extraDays,
        );
        newState.displayPosition = 0;
      }
      return newState;
    case actions.CADENCE_TABLE_LOAD_COMPANY_STATUS_COLORS:
      newState.companyStatusColors = action.payload;
      return newState;
    case actions.CADENCE_TABLE_GO_TODAY:
      newState.displayData = newState[`${newState.timeWindowFilter}Data`].data.slice(
        newState[`${state.timeWindowFilter}Data`].todayPosition,
        newState[`${state.timeWindowFilter}Data`].todayPosition + state.extraDays,
      );
      newState.displayPosition = newState[`${state.timeWindowFilter}Data`].todayPosition;
      return newState;
    case actions.CADENCE_TABLE_UPDATE_POSITIONS:
      newState.displayData = newState[`${newState.timeWindowFilter}Data`].data.slice(
        action.payload.start,
        action.payload.end,
      );
      newState.displayPosition = action.payload.start;
      return newState;
    case actions.CADENCE_TABLE_SET_EXTRA_DAYS:
      newState.extraDays = action.payload;
      newState.displayData = newState[`${newState.timeWindowFilter}Data`].data.slice(
        newState.displayPosition,
        newState.displayPosition + newState.extraDays,
      );
      return newState;
    case actions.CADENCE_TABLE_REFRESH:
      newState.displayData = newState[`${newState.timeWindowFilter}Data`].data.slice(
        newState.displayPosition,
        newState.displayPosition + newState.extraDays,
      );
      return newState;
    default:
      return state;
  }
};

export const useCadenceReducer = () => useReducer(cadenceTableReducer, { ...initialState });
