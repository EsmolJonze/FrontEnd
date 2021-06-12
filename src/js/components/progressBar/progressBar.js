import React from 'react';
import styles from './progressBar.module.css';
import PropTypes from 'prop-types';

const ProgressBar = ({ completed }) => {
  const isMinimumCompleted = completed > 5;

  const fillerStyles = {
    height: '100%',
    width: `${isMinimumCompleted ? completed : 5}%`,
    backgroundColor: '#43a3fd',
    transition: 'width 1s ease-in',
    borderRadius: 'inherit',
    textAlign: 'right',
  };
  return (
    <div className={styles._containerStyles}>
      <div style={fillerStyles} />
    </div>
  );
};

ProgressBar.propTypes = {
  completed: PropTypes.number,
};

export default ProgressBar;
