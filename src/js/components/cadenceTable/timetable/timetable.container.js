import React, { useEffect } from 'react';
import TimetableView from './timetable.view';
import { useCadenceContext } from '../context/cadenceTable.context';
import { useMediaQuery } from '../../../hooks';
import { getColumnsForWidth, getDateRangeFromDisplayData } from './timetable.utils';
import {
  getCompanyStatusActivities,
  getInboundActivities,
  getOpportunityStatusActivities,
} from './timetable.service';
import { timeTableContextWrapper } from './context/timetable.context.provider';
import { useTimeTableContext } from './context/timetable.context';
import { timeTableActions as actions } from './context/timetable.types';

const TimetableContainer = props => {
  const { state, updateDisplayPositions, updateDaysShown, refreshDisplay } = useCadenceContext();
  const { timeTableDispatch } = useTimeTableContext();
  const extraDays = state.extraDays;

  const { windowDimensions } = useMediaQuery();

  useEffect(() => {
    updateDaysShown(getColumnsForWidth(windowDimensions.width));
  }, [windowDimensions]);

  useEffect(() => {
    const data = state[`${state.timeWindowFilter}Data`];
    if (state.displayData.length === 0) {
      updateDisplayPositions(data.todayPosition, data.todayPosition + extraDays);
    } else {
      refreshDisplay();
    }
  }, [state.dayData, state.weekData, state.monthData]);

  const dates = getDateRangeFromDisplayData(state.displayData, state.timeWindowFilter);

  const onNewInboundActivity = response => {
    timeTableDispatch({
      type: actions.TIMETABLE_SET_ACTIVITIES_INBOUND,
      payload: response,
    });
  };

  const onNewCompanyStatusActivity = response => {
    timeTableDispatch({
      type: actions.TIMETABLE_SET_COMPANY_STATUS_ACTIVITIES,
      payload: response,
    });
  };
  const onNewOpportunityStatusActivity = response => {
    timeTableDispatch({
      type: actions.TIMETABLE_SET_OPPORTUNITY_STATUS_ACTIVITIES,
      payload: response,
    });
  };

  if (state.opportunity) {
    getOpportunityStatusActivities(
      dates,
      state.opportunity?.id.value,
      onNewOpportunityStatusActivity,
    );
  }
  if (state.company) {
    getCompanyStatusActivities(dates, state.company.id.value, onNewCompanyStatusActivity);
  }
  getInboundActivities(dates, state.company, state.lead, onNewInboundActivity);

  const handleClickEnd = () => {
    let position = 0;
    const timeWindow = state.timeWindowFilter;
    const timeWindowData = state[`${timeWindow}Data`];
    timeWindowData.data.forEach((day, index) => {
      if (day.isEndCadence) {
        position = index;
      }
    });
    if (position >= extraDays + 1) {
      updateDisplayPositions(position - extraDays + 1, position + 1);
    }
  };

  const handleClickStart = () => {
    let position = 0;
    const timeWindow = state.timeWindowFilter;
    const timeWindowData = state[`${timeWindow}Data`];
    timeWindowData.data.forEach((day, index) => {
      if (day.isStartCadence) {
        position = index;
      }
    });
    updateDisplayPositions(position, position + extraDays);
  };

  const handleClickNext = () => {
    let position = 0;
    let found = false;
    let index = 0;
    const timeWindow = state.timeWindowFilter;
    const timeWindowData = state[`${timeWindow}Data`];
    const reversed = [...state.displayData].reverse();
    reversed.forEach(dayData => {
      if (timeWindowData.activityPositions.includes(dayData.dayNumber) && !found) {
        found = true;
        index = timeWindowData.activityPositions.indexOf(dayData.dayNumber);
      }
    });
    position = timeWindowData.activityPositions[index + 1];
    if (position && found) {
      updateDisplayPositions(position - extraDays + 1, position + 1);
    }
  };

  const handleClickPrev = () => {
    let position = 0;
    let found = false;
    let activityIndex = 0;
    const timeWindow = state.timeWindowFilter;
    const timeWindowData = state[`${timeWindow}Data`];
    state.displayData.forEach(dayData => {
      if (timeWindowData.activityPositions.includes(dayData.dayNumber) && !found) {
        found = true;
        activityIndex = timeWindowData.activityPositions.indexOf(dayData.dayNumber);
      }
    });
    position = timeWindowData.activityPositions[activityIndex - 1];

    if (!found) {
      position = Math.max(...timeWindowData.activityPositions);
    }

    if (!position) {
      position = timeWindowData.activityPositions[0];
    }

    updateDisplayPositions(position, position + extraDays);
  };

  const handleClickFirst = () => {
    let position = 0;
    const timeWindow = state.timeWindowFilter;
    const timeWindowData = state[`${timeWindow}Data`];
    position = Math.min(...timeWindowData.activityPositions);
    updateDisplayPositions(position, position + extraDays);
  };

  const handleClickLast = () => {
    let position = 0;
    const timeWindow = state.timeWindowFilter;
    const timeWindowData = state[`${timeWindow}Data`];
    position = Math.max(...timeWindowData.activityPositions);

    if (position >= extraDays + 1) {
      updateDisplayPositions(position - extraDays + 1, position + 1);
    }
  };

  const newProps = {
    ...props,
    data: state.displayData,
    handleClickLast,
    handleClickFirst,
    handleClickPrev,
    handleClickNext,
    handleClickStart,
    handleClickEnd,
  };
  return <TimetableView {...newProps} />;
};

export default timeTableContextWrapper(TimetableContainer);
