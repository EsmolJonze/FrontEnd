import React from 'react';
import PropTypes from 'prop-types';
import styles from './tabLayout.module.css';

const TabLayout = ({ contentLeft, contentRight, infoComponent }) => (
  <div className={styles._container}>
    {infoComponent && <div className={styles._info_box}>{infoComponent}</div>}
    <div className={styles._content}>
      <div className={styles._content_left}>{contentLeft}</div>
      <div className={styles._content_right}>{contentRight}</div>
    </div>
  </div>
);

TabLayout.propTypes = {
  contentLeft: PropTypes.node,
  contentRight: PropTypes.node,
  infoComponent: PropTypes.node,
};

export default TabLayout;
