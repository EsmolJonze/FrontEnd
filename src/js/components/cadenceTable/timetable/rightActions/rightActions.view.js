import React from 'react';
import styles from './rightActions.module.css';
import { Icon } from '@bloobirds-it/bloobirds-platform-component-library';
import CustomTooltip from '../../../CustomTooltip';
import PropTypes from 'prop-types';

const RightActionsView = props => {
  const { onClickNext, onClickLast, onClickFlag } = props;
  return (
    <div className={[styles.tableRow, styles.actionsCell].join(' ')}>
      <CustomTooltip placement="top" title="Last cadence day">
        <span className={styles.icon} onClick={onClickFlag}>
          <Icon name="flagFilled" color="darkBloobirds" size={16} />
        </span>
      </CustomTooltip>
      <CustomTooltip placement="top" title="Next activity">
        <span className={styles.icon} onClick={onClickNext}>
          <Icon name="chevronRight" color="darkBloobirds" size={16} />
        </span>
      </CustomTooltip>
      <CustomTooltip placement="top" title="Last activity">
        <span className={styles.icon} onClick={onClickLast}>
          <Icon name="chevronLast" color="darkBloobirds" size={16} />
        </span>
      </CustomTooltip>
    </div>
  );
};

RightActionsView.propTypes = {
  onClickFlag: PropTypes.func,
  onClickLast: PropTypes.func,
  onClickNext: PropTypes.func,
};

export default RightActionsView;
