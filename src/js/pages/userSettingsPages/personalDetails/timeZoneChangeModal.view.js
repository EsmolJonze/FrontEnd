import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Callout,
  Modal,
  ModalContent,
  ModalFooter,
  Text,
} from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './personalDetails.module.css';
import { convertLocationToHourMinutes } from '../../../utils/dates.utils';

const TimeZoneChangeModal = ({ open, close, save, name, location }) => {
  const [disableButton, setDisableButton] = useState(true);

  return (
    <Modal title="Changing your timezone" open={open} onClose={close}>
      <ModalContent>
        <div className={styles.timezoneText}>
          <Text size="s" align="center" weight="heavy">
            Are you sure you want to change your timezone? This will change your time to{' '}
            {` ${convertLocationToHourMinutes(location)}`}
          </Text>
        </div>
        {name && (
          <div className={styles.timezoneCheckbox} align="left">
            <Checkbox
              onClick={checkValue => {
                setDisableButton(!checkValue);
              }}
              size="small"
            >
              Yes, change my timezone to {''} {name}
            </Checkbox>
          </div>
        )}

        <Callout>
          <Text size="s" weight="bold">
            {' '}
            👉 We recommend that you make this change at the end of the day.
          </Text>
          <Text size="s">
            By changing your time zone all your tasks will be updated for the selected time zone,
            new tasks will be created for the next days and any overdue tasks you have done will be
            automatically marked as completed.
          </Text>
        </Callout>
      </ModalContent>
      <ModalFooter>
        <Button variant="clear" onClick={close}>
          Cancel
        </Button>
        <Button disabled={disableButton} variant="primary" onClick={save}>
          Confirm
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default TimeZoneChangeModal;
