import React, { useMemo, useState } from 'react';
import styles from './cadenceItem.module.css';
import { useCadenceContext } from '../../context/cadenceTable.context';
import { bobjectModel } from '../../../../misc/model/bobjectFieldsModel';
import { NotScheduled, ScheduledCompleted, ScheduledIncomplete } from './CadencePills';
import { useTimeTableContext } from '../context/timetable.context';
import { findActivitiesInStatusForDayData } from './cadenceItem.utils';
import { addDays, getDaysInMonth } from '../../../../utils/dates.utils';
import { useActiveActivitiesFilters } from '../../../../hooks/useActiveActivities';
import { Tooltip } from '@bloobirds-it/bloobirds-platform-component-library';
import { useContactView } from '../../../../hooks';
import { BOBJECT_TYPES } from '../../../../constants/bobject';

const MONTH_ABBREVIATIONS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const CadenceItemView = ({ activityType, color, dayData, multiple, openTaskTab, bobjectType }) => {
  const { state } = useCadenceContext();
  const { setDateFilter, resetTypeFilter } = useActiveActivitiesFilters();
  const { timeTableState } = useTimeTableContext();
  const { setTab } = useContactView();
  const [statusColors, setStatusColors] = useState({
    textColor: undefined,
    backgroundColor: undefined,
  });
  const cellData = dayData[activityType];

  const inboundActivities = useMemo(
    () =>
      timeTableState.inboundActivities &&
      findActivitiesInStatusForDayData(
        state.timeWindowFilter,
        dayData,
        timeTableState.inboundActivities.contents,
      ),
    [state.timeWindowFilter, dayData, timeTableState.inboundActivities],
  );

  const inboundDisplay = useMemo(() => {
    if (timeTableState.inboundActivities) {
      const leadNames = inboundActivities.map(data => {
        const activity = bobjectModel(data);
        const leadId = activity.findByLogicRole('ACTIVITY__LEAD').value;
        const leadData = timeTableState.inboundActivities.referencedBobjects[leadId];
        if (leadData !== undefined) {
          const lead = bobjectModel(leadData);
          return lead.findByLogicRole('LEAD__FULL_NAME').value;
        }

        return '';
      });
      const plural = leadNames.length > 1 ? 'leads' : 'lead';
      return `${leadNames.length} new Inbound ${plural}: ${leadNames.join(', ')}`;
    }
    return '';
  }, [inboundActivities]);

  const companyStatusActivities = useMemo(
    () =>
      timeTableState.companyStatusActivities &&
      state.companyStatusColors &&
      findActivitiesInStatusForDayData(
        state.timeWindowFilter,
        dayData,
        timeTableState.companyStatusActivities.contents,
      ),
    [timeTableState.companyStatusActivities, state.timeWindowFilter, dayData],
  );
  const opportunityStatusActivities = useMemo(
    () =>
      timeTableState.opportunityStatusActivities &&
      state.companyStatusColors &&
      findActivitiesInStatusForDayData(
        state.timeWindowFilter,
        dayData,
        timeTableState.opportunityStatusActivities.contents,
      ),
    [timeTableState.opportunityStatusActivities, state.timeWindowFilter, dayData],
  );

  const statusDisplay = useMemo(() => {
    const statesActivities =
      BOBJECT_TYPES.OPPORTUNITY === bobjectType
        ? opportunityStatusActivities
        : companyStatusActivities;
    if (statesActivities) {
      let to = '';
      let from = '';
      statesActivities.forEach((data, index) => {
        const activity = bobjectModel(data);
        if (index === 0) {
          to = activity.findByLogicRole('ACTIVITY__TYPE_STATUS_CHANGED_TO').value;
          setStatusColors({ ...state.companyStatusColors[to] });
        }
        from = activity.findByLogicRole('ACTIVITY__TYPE_STATUS_CHANGED_FROM').value;
        if (from === undefined) {
          from = activity.findByLogicRole('ACTIVITY__TYPE_STATUS_CHANGED_TO').value;
        }
      });
      const plural = statesActivities.length > 1 ? 'times' : 'time';
      return `${bobjectType} status changed ${
        statesActivities.length
      } ${plural}: from ${from} to ${to}`;
    }
    return '';
  }, [companyStatusActivities, opportunityStatusActivities, bobjectType]);

  const showCompleted =
    cellData.activitiesCompleted === cellData.activitiesCadence && cellData.activitiesCadence > 0;

  const showUncompleted = cellData.activitiesCadence > 0 && !showCompleted;

  const showNotScheduled = cellData.activitiesOutOfCadence > 0;

  const getTooltipDisplayBasic = type => {
    let typeDisplay;
    let display = '';
    if (showCompleted) {
      typeDisplay = cellData.activitiesCompleted > 1 ? `${type}s` : type;
      if (multiple) {
        display = `${display}${cellData.activitiesCompleted}/${
          cellData.activitiesCompleted
        } scheduled ${typeDisplay} completed \n`;
      } else {
        display = `${display}${cellData.activitiesCompleted} scheduled ${typeDisplay} completed \n`;
      }
    }
    if (showUncompleted) {
      typeDisplay = cellData.activitiesCadence > 1 ? `${type}s` : type;
      if (multiple) {
        display = `${display}${cellData.activitiesCompleted}/${
          cellData.activitiesCadence
        } scheduled ${typeDisplay} completed \n`;
      } else {
        display = `${display}${cellData.activitiesCadence} scheduled ${typeDisplay} \n`;
      }
    }
    if (showNotScheduled) {
      typeDisplay = cellData.activitiesOutOfCadence > 1 ? `${type}s` : type;
      display = `${display}${
        cellData.activitiesOutOfCadence
      } non-scheduled ${typeDisplay} completed \n`;
    }
    return display;
  };

  const tooltipTitle = useMemo(() => {
    switch (activityType) {
      case 'PHONE_CALL':
        return getTooltipDisplayBasic('call');
      case 'EMAIL':
        return getTooltipDisplayBasic('email');
      case 'LINKEDIN_MESSAGE':
        return getTooltipDisplayBasic('LinkedIn message');
      case 'NEXT_STEP':
        return getTooltipDisplayBasic('task');
      case 'INBOUND':
        return inboundDisplay;
      case 'COMPANY_STATUS':
        return statusDisplay;
      case 'OPPORTUNITY_STATUS':
        return statusDisplay;
      default:
        return '';
    }
  }, [activityType]);

  const handleClickItem = () => {
    if (activityType === 'NEXT_STEP') {
      openTaskTab();
      setTimeout(() => (window.location.hash = '#taskTab'), 300);
      setTimeout(() => (window.location.hash = ''), 2300);
      return;
    }

    if (state.timeWindowFilter === 'day') {
      const startDate = dayData.date;
      const endDate = dayData.date;
      setDateFilter({ startDate, endDate });
    } else if (state.timeWindowFilter === 'week') {
      const startDate = dayData.drillStart;
      const endDate = addDays(startDate, 6);
      setDateFilter({ startDate, endDate });
    } else if (state.timeWindowFilter === 'month') {
      const monthNumber = MONTH_ABBREVIATIONS.indexOf(dayData.display.substr(0, 3));
      const startDate = new Date(dayData.drillYear, monthNumber, 1);
      const endDate = addDays(startDate, getDaysInMonth(startDate) - 1);
      setDateFilter({ startDate, endDate });
    }
    resetTypeFilter();
    setTab('Activity');
    setTimeout(() => {
      document.querySelector('#activity-tab').scrollIntoView({ behavior: 'smooth' });
    }, 250);
  };

  return (
    <Tooltip position="top" title={tooltipTitle}>
      <div className={styles.root}>
        <div>
          {showUncompleted && (
            <ScheduledIncomplete
              color={color}
              multiple={multiple}
              activitiesCadence={cellData.activitiesCadence}
              activitiesCompleted={cellData.activitiesCompleted}
              together={showNotScheduled}
            />
          )}
          {showCompleted && (
            <ScheduledCompleted
              color={color}
              together={showNotScheduled}
              multiple={multiple}
              number={cellData.activitiesCompleted}
              onClick={handleClickItem}
            />
          )}
        </div>
        {showNotScheduled && (
          <NotScheduled
            color={activityType === 'COMPANY_STATUS' ? statusColors.backgroundColor : color}
            textColor={activityType === 'COMPANY_STATUS' ? statusColors.textColor : 'white'}
            together={showCompleted || showUncompleted}
            number={cellData.activitiesOutOfCadence}
            withMultipleCompleted={showCompleted && multiple}
            onClick={handleClickItem}
          />
        )}
      </div>
    </Tooltip>
  );
};

export default CadenceItemView;
