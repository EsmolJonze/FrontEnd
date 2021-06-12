import React, { useState } from 'react';
import styles from './timetable.module.css';
import { Icon } from '@bloobirds-it/bloobirds-platform-component-library';
import CadenceItem from './cadenceItem';
import LeftActions from './leftActions';
import RightActions from './rightActions';
import { useCadenceContext } from '../context/cadenceTable.context';
import ClickableHeader from './clickableHeader';
import { rows } from './timetable.variables';
import classNames from 'clsx';
import { CSSTransition } from 'react-transition-group';
import './timetable.animations.css';
import { showRow } from './timetable.utils';

const TimetableView = props => {
  const {
    showNavigation,
    data,
    handleClickStart,
    handleClickEnd,
    handleClickNext,
    handleClickPrev,
    handleClickLast,
    handleClickFirst,
    bobjectType,
  } = props;
  const { state } = useCadenceContext();
  const [currentDisplayData, setCurrentDisplayData] = useState([]);
  let multiple = false;
  if (state.timeWindowFilter !== 'day') {
    multiple = true;
  }

  const compareDisplayData = () => JSON.stringify(data) === JSON.stringify(currentDisplayData);

  const tableCellClass = multiple ? styles.tableCellMultiple : styles.tableCell;

  const tableHeadClasses = dayData =>
    classNames(styles.headTableCell, tableCellClass, {
      [styles.todayDay]: dayData.isToday,
      [styles.taskDay]: dayData.isTaskDate && !dayData.isToday,
    });
  return (
    <div className={styles.root}>
      <div className={styles.leftColumn}>
        <div className={styles.tableRow} />
        {Object.values(rows).map(
          row =>
            showRow(row.text, bobjectType) && (
              <div data-intercom={row.dataIntercom} className={styles.tableRow} key={row.text}>
                <span className={styles.leftColumnSpan}>
                  <span className={styles.rowIcon}>
                    <Icon name={row.iconName} color={row.iconColor} size={20} />
                  </span>
                  {row.text}
                </span>
              </div>
            ),
        )}
      </div>
      {showNavigation && (
        <div className={styles.actions}>
          <LeftActions
            onClickPrev={handleClickPrev}
            onClickFirst={handleClickFirst}
            onClickFlag={handleClickStart}
          />
          {[...new Array(6).keys()].map(i => (
            <div className={styles.tableRow} key={i} />
          ))}
        </div>
      )}
      <div className={styles.table}>
        <CSSTransition
          in={compareDisplayData()}
          timeout={200}
          classNames={'timetableHeader'}
          onExit={() => !compareDisplayData() && setCurrentDisplayData([...data])}
        >
          <div className={styles.scrollingTable}>
            <div className={styles.tableRow}>
              {data.map((dayData, index) => (
                <ClickableHeader
                  key={dayData.display}
                  dayData={dayData}
                  index={index}
                  tableHeadClasses={tableHeadClasses}
                  timeWindow={state.timeWindowFilter}
                  multiple={multiple}
                />
              ))}
            </div>
            {Object.keys(rows).map(
              key =>
                showRow(rows[key].text, bobjectType) && (
                  <div
                    data-test={`TableRow-${rows[key].text}`}
                    className={styles.tableRow}
                    key={key}
                  >
                    {data.map(dayData => {
                      const cellData = dayData[key];
                      if (cellData === undefined) {
                        return (
                          <div
                            key={dayData.display}
                            className={classNames(tableCellClass, {
                              [styles.pausedDay]: dayData.pausedDay && !multiple,
                              [styles.nonWorkingDay]: !dayData.workingDay,
                            })}
                          />
                        );
                      }
                      return (
                        <div
                          key={dayData.display}
                          className={classNames(tableCellClass, {
                            [styles.pausedDay]: dayData.pausedDay && !multiple,
                            [styles.nonWorkingDay]: !dayData.workingDay,
                          })}
                        >
                          <CadenceItem
                            dayData={dayData}
                            color={rows[key].colorItem}
                            multiple={multiple}
                            activityType={key}
                            bobjectType={bobjectType}
                          />
                        </div>
                      );
                    })}
                  </div>
                ),
            )}
          </div>
        </CSSTransition>
      </div>
      {showNavigation && (
        <div className={styles.actions}>
          <RightActions
            onClickNext={handleClickNext}
            onClickLast={handleClickLast}
            onClickFlag={handleClickEnd}
          />
          {[...new Array(6).keys()].map(i => (
            <div className={styles.tableRow} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TimetableView;
