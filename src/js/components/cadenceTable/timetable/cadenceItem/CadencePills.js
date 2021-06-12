import styles from './cadenceItem.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'clsx';

export const ScheduledIncomplete = props => {
  const { color, multiple, activitiesCadence, activitiesCompleted, together } = props;

  const itemClass = classNames(styles.item, {
    [styles.itemMultiple]: multiple,
  });

  return (
    <div
      className={classNames({
        [styles.together]: together && !multiple,
      })}
    >
      <span
        className={itemClass}
        style={{ border: `1px dashed ${color}`, color, cursor: 'default' }}
      >
        {multiple ? `${activitiesCompleted} / ${activitiesCadence}` : ' '}
      </span>
    </div>
  );
};

export const ScheduledCompleted = props => {
  const { multiple, number, color, together, onClick } = props;

  const rootClasses = classNames(styles.completedTasks, {
    [styles.together]: together && !multiple,
  });
  const itemClass = classNames(styles.item, {
    [styles.itemMultiple]: multiple,
    [styles.itemBig]: number > 9,
  });
  const dashesClass = multiple ? styles.completedDashesMultiple : styles.completedDashes;
  const completedClass = multiple ? styles.completedMultiple : styles.completed;

  return (
    <div className={rootClasses}>
      <span
        className={classNames([itemClass, dashesClass])}
        style={{ border: `1px dashed ${color}` }}
      >
        {' '}
      </span>
      <span
        className={classNames([itemClass, completedClass])}
        style={{
          backgroundColor: color,
          border: `1px solid ${color}`,
        }}
        onClick={onClick}
      >
        {multiple ? `${number} / ${number}` : number}
      </span>
    </div>
  );
};

export const NotScheduled = props => {
  const { color, together, number, withMultipleCompleted, onClick, textColor } = props;

  const rootClasses = classNames(styles.notScheduledTasks, {
    [styles.togetherNotScheduledMultiple]: withMultipleCompleted,
    [styles.togetherNotScheduled]: together,
  });
  const itemClass = number > 9 ? styles.itemBig : styles.item;

  return (
    <div className={rootClasses}>
      <span
        className={itemClass}
        style={{
          backgroundColor: color,
          border: `1px solid ${color}`,
          color: textColor,
        }}
        onClick={onClick}
      >
        {number}
      </span>
    </div>
  );
};

ScheduledCompleted.propTypes = {
  color: PropTypes.string,
  multiple: PropTypes.bool,
  number: PropTypes.number,
  onClick: PropTypes.func,
  together: PropTypes.bool,
};

ScheduledIncomplete.propTypes = {
  activitiesCadence: PropTypes.number,
  activitiesCompleted: PropTypes.number,
  color: PropTypes.string,
  multiple: PropTypes.bool,
  together: PropTypes.bool,
};

NotScheduled.propTypes = {
  color: PropTypes.string,
  number: PropTypes.number,
  onClick: PropTypes.func,
  textColor: PropTypes.string,
  together: PropTypes.bool,
  withMultipleCompleted: PropTypes.bool,
};
