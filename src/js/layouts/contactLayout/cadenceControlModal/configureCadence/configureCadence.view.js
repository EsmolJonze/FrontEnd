import React, { useEffect, useState } from 'react';
import {
  Button,
  Callout,
  DateTimePicker,
  Item,
  ModalContent,
  ModalFooter,
  Select,
  Text,
  Tooltip,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { useCadence, useCadenceControl, useEntity, useLeads } from '../../../../hooks';
import CadenceIcon from '../cadenceIcon';
import styles from './configureCadence.module.css';
import { isBefore, startOfDay } from 'date-fns';
import { BOBJECT_TYPES } from '../../../../constants/bobject';

const parseDate = date => new Date(date.getTime() - date.getTimezoneOffset() * 60000);

const ConfigureCadenceStep = ({ handleBack, handleNext }) => {
  const { bobject, cadenceControl, saveCadence, isOpportunity } = useCadenceControl();
  const { isStarted: cadenceStarted } = useCadence();
  const { leads, updateLeadsByCompany, updateLeadsByOpportunity } = useLeads('cadenceControl');
  const [selectedCadence, setSelectedCadence] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const bobjectPicklistFieldValues = useEntity('bobjectPicklistFieldValues');
  const bobjectGlobalPicklist = useEntity('bobjectGlobalPicklists');
  const cadenceGlobalPicklist = bobjectGlobalPicklist?.findByLogicRole('CADENCE');
  const { currentCadenceName, currentStartDate, defaultCadence } = cadenceControl;
  const cadencesList = bobjectPicklistFieldValues.filterBy(
    'bobjectGlobalPicklist',
    cadenceGlobalPicklist?.id,
  );

  const findCadenceByName = cadenceName =>
    cadencesList?.find(cadence => cadence.value === cadenceName);
  const currentCadence = findCadenceByName(currentCadenceName);
  const hasData = !!(selectedCadence && selectedDate);
  const dateHasChanged = selectedDate?.getTime() !== new Date(currentStartDate)?.getTime();
  const cadenceHasChanged = selectedCadence !== currentCadence?.id;

  useEffect(() => {
    const cadence = findCadenceByName(defaultCadence);
    if (defaultCadence && cadence) {
      setSelectedCadence(cadence?.id);
    }
  }, [defaultCadence, findCadenceByName(defaultCadence)]);

  useEffect(() => {
    if (currentCadence) {
      setSelectedCadence(currentCadence?.id);
    }
  }, [currentCadence]);

  useEffect(() => {
    if (currentStartDate) {
      setSelectedDate(new Date(currentStartDate));
    }
  }, [currentStartDate]);

  useEffect(() => {
    if (bobject) {
      if (bobject?.id.typeName === BOBJECT_TYPES.COMPANY) {
        updateLeadsByCompany(bobject?.id.value);
      } else if (bobject?.id.typeName === BOBJECT_TYPES.OPPORTUNITY) {
        updateLeadsByOpportunity(bobject?.id.value);
      }
    }
  }, [bobject]);

  const disableButton = !hasData || (!(dateHasChanged || cadenceHasChanged) && cadenceStarted);

  return (
    <>
      <ModalContent>
        <div className={styles._section_title__wrapper}>
          <Text size="m" weight="medium" color="peanut">
            Which cadence do you want to use?
          </Text>
        </div>
        <div className={styles._section__wrapper}>
          <div className={styles._list__wrapper}>
            {cadencesList?.length > 0 && (
              <Select
                dataTest="COMPANY__CADENCE"
                defaultValue={findCadenceByName(defaultCadence)?.id}
                value={selectedCadence}
                placeholder={`${isOpportunity ? 'Opportunity' : 'Company'} cadence *`}
                width="100%"
                onChange={value => {
                  setSelectedCadence(value);
                }}
              >
                {cadencesList.map(cadence => (
                  <Item value={cadence.id} key={cadence.id} dataTest={`${cadence.value}`}>
                    {cadence.value}
                  </Item>
                ))}
              </Select>
            )}
          </div>
          <div className={styles._date_picker__wrapper}>
            <DateTimePicker
              dataTest="cadenceDatetimePicker"
              value={selectedDate}
              placeholder="Start cadence date *"
              withTimePicker={false}
              onChange={date => setSelectedDate(date)}
            />
          </div>
        </div>
        {(selectedCadence === findCadenceByName(defaultCadence)?.id ||
          (selectedDate && !isOpportunity)) && (
          <Callout variant="alert" width="100%" withoutIcon>
            <div className={styles._message__wrapper}>
              <CadenceIcon />
              <div>
                <span role="img" aria-label="hand">
                  👉
                </span>{' '}
                {selectedCadence === findCadenceByName(defaultCadence)?.id && (
                  <b>
                    This is your recommended {isOpportunity ? <>sales</> : <>prospecting</>}{' '}
                    cadence!
                  </b>
                )}{' '}
                {!selectedDate && <>Select a date to continue.</>}
                {selectedDate && !isOpportunity && (
                  <>
                    Remember if you change the cadence{' '}
                    {!isBefore(selectedDate, startOfDay(new Date())) && (
                      <>
                        to the future the company will change to <b>READY TO PROSPECT</b>
                      </>
                    )}
                    {isBefore(selectedDate, startOfDay(new Date())) && (
                      <>
                        to the past will change to <b>ON PROSPECTION</b>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </Callout>
        )}
      </ModalContent>
      <ModalFooter>
        <div className={styles._buttons__wrapper}>
          <Button variant="clear" onClick={handleBack}>
            Back
          </Button>
          {/* <Button variant="secondary" onClick={handleSkip}>
            Skip
          </Button> */}
          <div>
            <Tooltip
              title={
                disableButton && 'Remember to change the start cadence date to start a new cadence'
              }
            >
              <Button
                dataTest={leads?.length > 0 ? 'formNext' : 'formSave'}
                disabled={disableButton}
                onClick={() => {
                  saveCadence(
                    selectedCadence,
                    () => handleNext(leads?.length > 0),
                    parseDate(selectedDate),
                  );
                }}
              >
                {leads?.length > 0 ? 'Next' : 'Save'}
              </Button>
            </Tooltip>
          </div>
        </div>
      </ModalFooter>
    </>
  );
};

export default ConfigureCadenceStep;
