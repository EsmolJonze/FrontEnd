import React from 'react';
import { Icon } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './leftActions.module.css';
import CustomTooltip from '../../../CustomTooltip';
import PropTypes from 'prop-types';

const LeftActionsView = props => {
  const { onClickPrev, onClickFirst, onClickFlag } = props;

  return (
    <div className={[styles.tableRow, styles.actionsCell].join(' ')}>
      <CustomTooltip placement="top" title="First activity">
        <span
          data-intercom="visual-cadence-button-step-first"
          className={styles.icon}
          onClick={onClickFirst}
        >
          <Icon name="chevronFirst" color="darkBloobirds" size={16} />
        </span>
      </CustomTooltip>
      <CustomTooltip placement="top" title="Previous activity">
        <span
          data-intercom="visual-cadence-button-previous-step"
          className={styles.icon}
          onClick={onClickPrev}
        >
          <Icon name="chevronLeft" color="darkBloobirds" size={16} />
        </span>
      </CustomTooltip>
      <CustomTooltip placement="top" title="First cadence day">
        <span
          data-intercom="visual-cadence-button-first-cadence-day"
          className={styles.icon}
          onClick={onClickFlag}
        >
          <Icon name="flag" color="darkBloobirds" size={16} />
        </span>
      </CustomTooltip>
    </div>
  );
};

LeftActionsView.propTypes = {
  onClickFirst: PropTypes.func,
  onClickFlag: PropTypes.func,
  onClickPrev: PropTypes.func,
};

export default LeftActionsView;
