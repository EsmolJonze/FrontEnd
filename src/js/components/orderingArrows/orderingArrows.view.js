import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './orderingArrows.module.css';

const OrderingArrows = ({ onClickUp, onClickDown, disabledUp, disabledDown }) => (
  <div className={styles._fields_list_order_buttons}>
    <IconButton
      name="chevronUp"
      disabled={disabledUp}
      size={16}
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
        onClickUp();
      }}
    />
    <IconButton
      name="chevronDown"
      disabled={disabledDown}
      size={16}
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
        onClickDown();
      }}
    />
  </div>
);

OrderingArrows.propTypes = {
  disabledDown: PropTypes.bool,
  disabledUp: PropTypes.bool,
  onClickDown: PropTypes.func.isRequired,
  onClickUp: PropTypes.func.isRequired,
};

OrderingArrows.defaultProps = {
  disabledUp: false,
  disabledDown: false,
};

export default OrderingArrows;
