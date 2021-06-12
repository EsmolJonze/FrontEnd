import React from 'react';
import styles from './reportingDelay.module.css';
import { getPrettyDelay } from '../utils/getPrettyDelay';
import { Icon, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { useReportingDelay } from '../../../hooks';

const ReportingDelay = () => {
  const { reportingDelay, setWarningVisible } = useReportingDelay();
  let delay = {};
  if (reportingDelay?.delay && reportingDelay?.needsToNotify) {
    delay = {
      boldText: `All activity until ${getPrettyDelay(
        reportingDelay?.delay,
      )} ago has been processed. `,
      regularText: 'The remaining activity is still being added to the dashboards.',
    };
  }

  const handleClick = () => {
    setWarningVisible(false);
  };
  return (
    <>
      {reportingDelay?.needsToNotify && reportingDelay?.warningVisible && (
        <div className={styles.alert__container}>
          <div className={styles.text__container}>
            <Text size="s" inline weight="bold">
              {delay?.boldText}
            </Text>
            <Text size="s" inline>
              {delay?.regularText}
            </Text>
          </div>
          <div onClick={handleClick} className={styles.cross_icon}>
            <Icon name="cross" size={24} color="banana" />
          </div>
        </div>
      )}
    </>
  );
};

export default ReportingDelay;
