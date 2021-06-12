import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './metrics.module.css';

const Metrics = ({ children }) => {
  useEffect(() => {
    if (children?.length > 4) {
      throw new Error('There can be no more than four metrics');
    }
  }, []);

  return (
    <div className={styles._container}>
      {children.map((child, index) => {
        const params = {
          key: `metric-${index}`,
          ...(index < 2 && { secondLevel: true }),
        };

        return React.cloneElement(child, params);
      })}
    </div>
  );
};

Metrics.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Metrics;
