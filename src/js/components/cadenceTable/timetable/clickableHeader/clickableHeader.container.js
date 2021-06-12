import React from 'react';
import ClickableHeaderView from './clickableHeader.view';
import { useCadenceContext } from '../../context/cadenceTable.context';
import { cadenceTableActions } from '../../context/cadenceTable.types';

const ClickableHeaderContainer = props => {
  const { state, dispatch } = useCadenceContext();

  const handleClick = dayData => {
    if (state.timeWindowFilter === 'month') {
      dispatch({
        type: cadenceTableActions.CADENCE_TABLE_DRILLDOWN_MONTH_TO_WEEK,
        payload: { drill: dayData.drillStart, drillYear: dayData.drillYear },
      });
    } else if (state.timeWindowFilter === 'week') {
      dispatch({
        type: cadenceTableActions.CADENCE_TABLE_DRILLDOWN_WEEK_TO_DAY,
        payload: { drill: dayData.drillStart, drillYear: dayData.drillYear },
      });
    }
  };

  return <ClickableHeaderView {...props} handleClick={handleClick} />;
};

export default ClickableHeaderContainer;
