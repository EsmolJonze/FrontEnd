import React, { useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalFooter,
  Text,
  Button,
  DateTimePicker,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { useRestartCadence } from '../../../hooks';
import styles from './restartCadenceModal.modules.css';

const RestartCadenceModal = () => {
  const [date, setDate] = useState(new Date());
  const { updateCadence, closeRestartCadenceModal } = useRestartCadence();

  return (
    <Modal title="Reschedule Cadence" open onClose={closeRestartCadenceModal} width={640}>
      <ModalContent>
        <Text size="m">
          Reschedule cadence to a date will delete any prospection task to be done, change the
          status of the company to On Prospection and generate the new tasks as of the given date.
        </Text>
        <div className={styles._date__wrapper}>
          <DateTimePicker
            placeholder="Reschedule Cadence on"
            withTimePicker={false}
            defaultValue={new Date()}
            onChange={value => setDate(value)}
          />
        </div>
      </ModalContent>
      <ModalFooter>
        <Button onClick={closeRestartCadenceModal} variant="tertiary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            updateCadence(date);
            closeRestartCadenceModal();
          }}
        >
          Reschedule
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default RestartCadenceModal;
