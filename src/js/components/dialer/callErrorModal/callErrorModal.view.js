import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Callout,
  Modal,
  ModalFooter,
  Text,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { ERROR_CODES } from '../dialer.constants';
import styles from './callErrorModal.module.css';

const CallErrorModalView = ({ errorCode, open, close }) => {
  const errorMessage = ERROR_CODES[errorCode.toString()]
    ? ERROR_CODES[errorCode.toString()]
    : ERROR_CODES['01000'];
  return (
    <Modal title="Oops!" open={open} onClose={close} width={720}>
      <div className={styles._container}>
        <Text inline color="peanut" weight="bold">
          {errorCode}.
        </Text>
        <Text inline color="softPeanut">
          That's an error.
        </Text>
        <Callout variant="alert">
          <span role="img" aria-label="hand-emoji" className={styles._icon}>
            👉
          </span>
          <Text inline size="m" color="peanut">
            {errorMessage}
          </Text>
        </Callout>
      </div>
      <ModalFooter>
        <div />
        <Button onClick={close}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

CallErrorModalView.propTypes = {
  errorCode: PropTypes.number.isRequired,
};

export default CallErrorModalView;
