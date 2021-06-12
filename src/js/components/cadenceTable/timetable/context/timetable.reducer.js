import { useReducer } from 'react';
import { timeTableActions as actions } from './timetable.types';

const initialState = {
  inboundActivities: undefined,
  companyStatusActivities: undefined,
  opportunityStatusActivities: undefined,
};

const timeTableReducer = (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case actions.TIMETABLE_SET_ACTIVITIES_INBOUND:
      newState.inboundActivities = action.payload;
      return newState;
    case actions.TIMETABLE_SET_COMPANY_STATUS_ACTIVITIES:
      newState.companyStatusActivities = action.payload;
      return newState;
    case actions.TIMETABLE_SET_OPPORTUNITY_STATUS_ACTIVITIES:
      newState.opportunityStatusActivities = action.payload;
      return newState;
    default:
      return { ...state };
  }
};

export const useTimeTableReducer = () => useReducer(timeTableReducer, { ...initialState });
