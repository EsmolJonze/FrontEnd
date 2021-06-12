import React from 'react';
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalCloseIcon,
  ModalFooterButtons,
  Button,
  Icon,
  Text,
  Input,
  DateTimePicker,
  Spinner,
} from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './pauseCadenceModal.module.css';
import { Controller, useForm } from 'react-hook-form';
import { usePausePeriods, usePausePeriodsModal } from '../../../../hooks/usePausePeriods';
import { useActiveUser } from '../../../../hooks';

const REQUIRED_ERROR = 'This is a mandatory field';

const PauseCadenceModal = () => {
  const { handleSubmit, control, errors, getValues } = useForm();
  const { activeUser } = useActiveUser();
  const { addNewPeriod, updatePeriod, isSubmitting } = usePausePeriods({ userId: activeUser.id });
  const { open, handleClose, pausePeriod } = usePausePeriodsModal();
  const startDate = new Date(
    new Date(pausePeriod.startDate).getTime() +
      new Date(pausePeriod.startDate).getTimezoneOffset() * 60000,
  );
  const startDateDisabled = startDate?.setHours(23, 59, 59, 999) < new Date();

  const handleCreatePeriod = data => {
    addNewPeriod(data).then(() => {
      handleClose();
    });
  };

  const handleUpdatePeriod = data => {
    updatePeriod(pausePeriod.id, data).then(() => {
      handleClose();
    });
  };

  const higherEndDate = value => !(getValues().startDate && getValues().startDate > value);
  const isPast = value => !(new Date(value) <= new Date()) || startDateDisabled;

  return (
    <Modal open={open} onClose={handleClose} width={700}>
      <ModalHeader>
        <ModalTitle>Schedule pause timeframe</ModalTitle>
        <ModalCloseIcon onClick={handleClose} />
      </ModalHeader>
      <ModalContent>
        <form>
          <div className={styles._content__container}>
            <div className={styles._header__container}>
              <div className={styles._icon__container}>
                <Icon name="calendar" size={48} color="softPeanut" />
              </div>
              <div className={styles._divider} />
            </div>
            <Text weight="bold" size="m">
              Choose when to pause your cadences
              <span role="img" aria-label="palm">
                🌴
              </span>
            </Text>
            <Text size="m" color="softPeanut">
              Pick the days you won't be available. New cadences will take into account your pauses
              and existing cadences will skip these days,
            </Text>
            <Controller
              name="pauseName"
              defaultValue={pausePeriod.pauseName || null}
              rules={{
                required: REQUIRED_ERROR,
              }}
              as={
                <div>
                  <Input
                    dataTest={'PAUSE-CADENCE__NAME'}
                    error={errors.pauseName?.message}
                    width="270px"
                    defaultValue={pausePeriod.pauseName || null}
                    placeholder="Pause name*"
                  />
                </div>
              }
              control={control}
              error={errors.pauseName?.message}
            />
            <div className={styles._dates__container}>
              <div>
                <Controller
                  name="startDate"
                  defaultValue={pausePeriod.startDate ? new Date(pausePeriod.startDate) : null}
                  rules={{
                    required: REQUIRED_ERROR,
                    validate: isPast,
                  }}
                  as={
                    <DateTimePicker
                      error={
                        errors.startDate?.message ||
                        (errors.startDate?.type === 'validate' && 'Start date must be future')
                      }
                      disabled={startDateDisabled}
                      width="270px"
                      placeholder="From*"
                      withTimePicker={false}
                      enablePastDates={false}
                      defaultValue={pausePeriod.startDate ? new Date(pausePeriod.startDate) : null}
                      dataTest={'cadenceDatetimePickerStart'}
                    />
                  }
                  control={control}
                />
              </div>
              <div>
                <Controller
                  name="endDate"
                  defaultValue={pausePeriod.endDate ? new Date(pausePeriod.endDate) : null}
                  rules={{
                    required: REQUIRED_ERROR,
                    validate: higherEndDate,
                  }}
                  as={
                    <DateTimePicker
                      error={
                        errors.endDate?.message ||
                        (errors.endDate?.type === 'validate' &&
                          'End date must be higher than start date')
                      }
                      width="270px"
                      placeholder="To*"
                      withTimePicker={false}
                      enablePastDates={false}
                      defaultValue={pausePeriod.endDate ? new Date(pausePeriod.endDate) : null}
                      dataTest={'cadenceDatetimePickerEnd'}
                    />
                  }
                  control={control}
                />
              </div>
            </div>
          </div>
        </form>
      </ModalContent>
      <ModalFooter>
        <Button variant="clear" color="tomato" onClick={handleClose}>
          Cancel
        </Button>
        <ModalFooterButtons>
          {pausePeriod.mode === 'EDIT' ? (
            <Button disabled={isSubmitting} onClick={handleSubmit(handleUpdatePeriod)}>
              {!isSubmitting ? <>Update pause</> : <Spinner size={16} name="loadingCircle" />}
            </Button>
          ) : (
            <Button
              dataTest={'schedulePause'}
              disabled={isSubmitting}
              onClick={handleSubmit(handleCreatePeriod)}
            >
              {!isSubmitting ? <>Schedule pause</> : <Spinner size={16} name="loadingCircle" />}
            </Button>
          )}
        </ModalFooterButtons>
      </ModalFooter>
    </Modal>
  );
};

export default PauseCadenceModal;
