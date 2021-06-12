import React, { useState } from 'react';
import styles from './cadenceSettings.module.css';
import { Button, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import PauseCadenceModal from './pauseCadenceModal';
import { usePausePeriods, usePausePeriodsModal } from '../../../hooks/usePausePeriods';
import PauseCadenceCard from './pauseCadenceCard';
import { useActiveUser } from '../../../hooks';

const CadenceSettings = () => {
  const [showPast, setShowPast] = useState(false);
  const { activeUser } = useActiveUser();
  const { periods } = usePausePeriods({ userId: activeUser.id });
  const { open, handleClose, openCreatePauseModal } = usePausePeriodsModal();
  const hasFinishedPeriods = periods.list.filter(period => period.finished).length > 0;
  const hasPeriods = periods.list.length > 0;

  return (
    <div className={styles._container} data-intercom="user-settings-page-cadence">
      <PauseCadenceModal open={open} handleClose={handleClose} />
      <div className={styles._content__box}>
        <div className={styles._section__box}>
          <div className={styles._title__container}>
            <div className={styles._title__content}>
              <Text size="m" color="softPeanut" htmlTag="span">
                Active pauses
              </Text>
            </div>
            <div className={styles._add_pause__container}>
              <Button
                dataTest={'pauseCadence'}
                iconLeft="plus"
                size="small"
                onClick={openCreatePauseModal}
              >
                Pause Cadence
              </Button>
            </div>
          </div>
          <div className={styles._subSection__container}>
            {periods && hasPeriods ? (
              periods.list.map(
                period => !period.finished && <PauseCadenceCard key={period._id} {...period} />,
              )
            ) : (
              <>
                <Text color="softPeanut" size="l">
                  No pauses so far!
                </Text>
                <div className={styles._description__text}>
                  <Text align="center">
                    {' '}
                    Going on holiday for a few days? 🌴 <br />
                    Pause your cadences for the days you'll be out.
                    <br />
                    You can resume them when you're back!
                  </Text>
                </div>
              </>
            )}
          </div>
          <div
            className={styles._past__periods__button__container}
            onClick={() => setShowPast(!showPast)}
          >
            {hasFinishedPeriods && (
              <Text size="m" weight="bold" color="bloobirds">
                {showPast ? 'HIDE' : 'SHOW'} PAST PAUSES
              </Text>
            )}
          </div>
          <div className={styles._subSection__container}>
            {periods &&
              showPast &&
              periods.list.map(
                period =>
                  period.finished && <PauseCadenceCard completed key={period.id} {...period} />,
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadenceSettings;
