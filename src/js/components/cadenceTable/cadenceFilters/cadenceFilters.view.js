import React from 'react';
import { Select, Item, Button } from '@bloobirds-it/bloobirds-platform-component-library';
import { bobjectModel } from '../../../misc/model/bobjectFieldsModel';
import styles from './cadenceFilters.module.css';
import { useCadenceContext } from '../context/cadenceTable.context';
import PropTypes from 'prop-types';
import { useActiveLeads } from '../../../hooks/useActiveLeads';

const CadenceFiltersView = ({ timeWindowFilter, activityFilters, handleChange }) => {
  const { handleChangeActivityTimewindow, goToToday } = useCadenceContext();
  const { leads } = useActiveLeads();

  return (
    <div className={styles.activityFilters}>
      Show:
      <div data-intercom="visual-cadence-time-window" className={styles.elementWrapper}>
        <Select
          size="small"
          width="80px"
          value={timeWindowFilter}
          onChange={value => handleChangeActivityTimewindow(value)}
        >
          <Item value="day">Daily</Item>
          <Item value="week">Weekly</Item>
          <Item value="month">Monthly</Item>
        </Select>
      </div>
      <div className={styles.elementWrapper}>
        <Select
          size="small"
          width="80px"
          value={activityFilters.kind}
          onChange={handleChange('kind')}
        >
          <Item value="anyKind">Any Type</Item>
          <Item value="attempts">Attempts</Item>
          <Item value="touches">Touches</Item>
          <Item value="incoming">Incoming</Item>
          <Item value="outgoing">Outgoing</Item>
        </Select>
      </div>
      <div className={styles.elementWrapper}>
        <Select
          size="small"
          width="80px"
          value={activityFilters.lead}
          onChange={handleChange('lead')}
        >
          <Item value="any">Any Lead</Item>
          <Item value="__MATCH_EMPTY_ROWS__">
            <em>No lead assigned</em>
          </Item>
          {leads?.map(lead => (
            <Item value={lead.id.value} key={`${lead.id.value}`}>
              {bobjectModel(lead).find('LEAD__FULL_NAME').text}
            </Item>
          ))}
        </Select>
      </div>
      <div className={styles.elementWrapper}>
        <Button variant="tertiary" size="small" onClick={goToToday}>
          Today
        </Button>
      </div>
    </div>
  );
};

CadenceFiltersView.propTypes = {
  activityFilters: PropTypes.any,
  handleChange: PropTypes.func,
  timeWindowFilter: PropTypes.string,
};

export default CadenceFiltersView;
