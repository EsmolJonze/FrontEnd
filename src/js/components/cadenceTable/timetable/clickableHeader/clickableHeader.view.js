import React from 'react';
import CustomTooltip from '../../../CustomTooltip';
import { useCadenceContext } from '../../context/cadenceTable.context';
import PropTypes from 'prop-types';
import { Icon } from '@bloobirds-it/bloobirds-platform-component-library';

const ClickableHeaderView = props => {
  const { multiple, dayData, tableHeadClasses, index, handleClick } = props;
  const { state } = useCadenceContext();
  const showPauseIcon =
    (state.timeWindowFilter === 'week' || state.timeWindowFilter === 'month') && dayData.pausedDay;

  const tooltipTitle = () => {
    if (!multiple) {
      return [
        dayData.tooltipDisplay,
        dayData.isToday ? '(Today)' : '',
        dayData.isStartCadence ? '(Cadence Starts)' : '',
        dayData.isEndCadence ? '(Cadence Ends)' : '',
        dayData.isTaskDate ? '(Task Date)' : '',
      ].join(' ');
    }
    if (state.timeWindowFilter === 'week') {
      return [
        dayData.tooltipDisplay,
        dayData.isToday ? '(Current Week)' : '',
        dayData.isStartCadence ? '(Cadence Starts)' : '',
        dayData.isEndCadence ? '(Cadence Ends)' : '',
      ].join(' ');
    }
    return [
      dayData.tooltipDisplay,
      dayData.isToday ? '(Current Month)' : '',
      dayData.isStartCadence ? '(Cadence Starts)' : '',
      dayData.isEndCadence ? '(Cadence Ends)' : '',
    ].join(' ');
  };

  const tooltipDisplay = () => {
    if (!multiple) {
      return dayData.isToday ? 'Today' : dayData.display;
    }
    return dayData.display;
  };

  return (
    <CustomTooltip
      placement="top"
      key={`tootlip-${dayData.display}`}
      title={tooltipTitle()}
      className={tableHeadClasses(dayData)}
    >
      <span
        id={`day-${index}`}
        style={{ cursor: multiple ? 'pointer' : 'auto', display: 'flex', alignItems: 'center' }}
        onClick={() => handleClick(dayData)}
      >
        {tooltipDisplay()}
        {showPauseIcon && <Icon name="pause" color="verySoftBanana" size={20} />}
      </span>
    </CustomTooltip>
  );
};

ClickableHeaderView.propTypes = {
  dayData: PropTypes.any,
  index: PropTypes.number,
  multiple: PropTypes.bool,
  tableHeadClasses: PropTypes.any,
};

export default ClickableHeaderView;
