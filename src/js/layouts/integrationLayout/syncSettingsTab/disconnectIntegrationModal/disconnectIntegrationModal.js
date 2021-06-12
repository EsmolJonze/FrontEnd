import React, { useState } from 'react';
import styles from './disconnectIntegration.module.css';
import {
  Modal,
  ModalContent,
  ModalFooter,
  Checkbox,
  Button,
  Text,
  Callout,
} from '@bloobirds-it/bloobirds-platform-component-library';

const DisconnectIntegrationModal = ({ crm, disconnectIntegration }) => {
  const [open, setOpen] = useState(false);
  const [checked, isChecked] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  const handleDisconnectIntegration = () => {
    disconnectIntegration();
    window.location.reload(false);
  };

  return (
    <>
      <Button
        iconLeft="disconnectOutline"
        onClick={handleToggle}
        variant="clear"
        color="tomato"
        uppercase
      >
        disconnect {crm}
      </Button>
      <Modal title="Disconnecting" open={open} onClose={handleClose}>
        <ModalContent>
          <Text size="m" weight="bold" color="peanut">
            Are you sure you want to disconnect your {crm} integration?
          </Text>
          <div className={styles._check_box}>
            <Checkbox onClick={value => isChecked(value)}>
              Yes, disconnect the {crm} Integration
            </Checkbox>
          </div>
          <div className={styles._call_out}>
            <Callout variant="alert">
              <span role="img" aria-label="icon-label">
                👉
              </span>{' '}
              By disconnecting the {crm} integration your {crm} data will no longer be syncing with
              your Bloobirds data.{' '}
              <p className={styles._call_out_text}>
                You will lose your field mappings configuration, your customization of all settings,
                and your Sync logs history.
              </p>
            </Callout>
          </div>
        </ModalContent>
        <ModalFooter>
          <Button variant="clear" color="bloobirds" onClick={handleClose} uppercase>
            cancel
          </Button>
          <Button onClick={handleDisconnectIntegration} disabled={!checked} uppercase>
            confirm
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default DisconnectIntegrationModal;
