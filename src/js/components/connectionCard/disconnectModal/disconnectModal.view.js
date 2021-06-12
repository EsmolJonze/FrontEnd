import React, { useState } from 'react';
import {
  Button,
  Callout,
  Checkbox,
  Modal,
  ModalContent,
  ModalFooter,
  Text,
} from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './disconnectModal.module.css';

const DisconnectModal = ({ connection, handleClose, handleConfirm, open, type }) => {
  const [isAccept, setIsAccept] = useState(false);
  const isEmail = type === 'email';
  const nameType = isEmail ? 'email' : 'phone number';
  return (
    <Modal title={`Confirm disconnecting ${nameType}`} open={open} onClose={handleClose}>
      <ModalContent>
        <div className={styles._container}>
          <Text color="peanut" size="m" weight="medium">
            {`Are you sure you wish to disconnect ${connection}?`}
          </Text>
          <div className={styles._checkbox_wrapper}>
            <Checkbox expand defaultChecked={isAccept} onClick={setIsAccept}>
              Yes, disconnect {connection} from my private {nameType}s
            </Checkbox>
          </div>

          {type === 'phone' && (
            <Callout variant="alert" width="100%">
              <span role="img" aria-label="hand right" className={styles._emoji__container}>
                👉
              </span>
              You will <b>no longer be able to do calls with this number</b>. In order to use it
              again later you will have to do redo the phone verification.
            </Callout>
          )}
        </div>
      </ModalContent>
      <ModalFooter>
        <Button variant="clear" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleConfirm} disabled={!isAccept}>
          Confirm
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DisconnectModal;
