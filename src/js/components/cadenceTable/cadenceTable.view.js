import React from 'react';
import classnames from 'clsx';
import Timetable from './timetable';
import PropTypes from 'prop-types';
import CadenceFilters from './cadenceFilters';
import styles from './cadenceTable.module.css';
import { Button, Icon, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { useActiveOpportunities, useCadence } from '../../hooks';
import { STEPS } from '../../layouts/contactLayout/cadenceControlModal/cadenceControlModal.machine';

const CadenceTableView = props => {
  const {
    activityFilters,
    handleClickTitle,
    name,
    onChangeActivityFilters,
    showHeader,
    showNavigation,
    timeWindowFilter,
    bobjectType,
    bobject,
  } = props;
  const { selectedOpportunity } = useActiveOpportunities();
  const { hasStarted } = useCadence(bobject);

  return (
    <div data-intercom="visual-cadence-component">
      {showHeader && (
        <div className={styles._cadence_title__wrapper}>
          <div className={styles._cadence_name__wrapper}>
            <Text size="s" color="softPeanut" inline>
              {selectedOpportunity ? 'Sales Cadence' : 'Prospect Cadence'}:
            </Text>
            <span
              className={classnames(styles._cadence_status, {
                [styles._cadence_status_started]: hasStarted,
              })}
            />
            <div
              data-test="cadence-name-wrapper"
              className={classnames(styles._cadence_name__link, {
                [styles._cadence_name__link_disabled]: !hasStarted,
              })}
              onClick={() => hasStarted && handleClickTitle()}
            >
              <Text dataTest="Button-prospectCadenceName" size="s" color="bloobirds" inline>
                {name}
              </Text>
              {hasStarted && <Icon name="settings" size={16} />}
            </div>
            {!hasStarted && (
              <Button
                dataTest="cadenceStart"
                size="small"
                variant="secondary"
                iconLeft="play"
                onClick={() => handleClickTitle(STEPS.CONFIGURE_CADENCE)}
              >
                Start cadence
              </Button>
            )}
          </div>
          <CadenceFilters
            timeWindowFilter={timeWindowFilter}
            activityFilters={activityFilters}
            handleChange={onChangeActivityFilters}
          />
        </div>
      )}
      <Timetable showNavigation={showNavigation} bobjectType={bobjectType} />
    </div>
  );
};

CadenceTableView.propTypes = {
  activityFilters: PropTypes.any,
  name: PropTypes.string,
  onChangeActivityFilters: PropTypes.func.isRequired,
  timeWindowFilter: PropTypes.string,
};

export default CadenceTableView;
