import React from 'react';
import {
  Button,
  Callout,
  Modal,
  ModalContent,
  ModalFooter,
  Text,
} from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './saveModal.module.css';

const SaveModal = ({ open, onSave, onClose }) => (
  <Modal open={open} title="Edit criteria" onClose={onClose}>
    <ModalContent>
      <Text size="m" color="peanut">
        You are about to change an existing segmentation criteria.
      </Text>
      <Text size="m">
        <b>This action cannot be undone</b>, are you sure you want to continue?
      </Text>
      <div className={styles._modal_warning__content}>
        <Callout variant="negative">
          Changing this criteria will <b>remove all the categorization</b> already included in the
          existing templates.
        </Callout>
      </div>
    </ModalContent>
    <ModalFooter>
      <Button variant="tertiary" onClick={onClose}>
        Cancel
      </Button>
      <Button variant="primary" onClick={onSave}>
        Confirm
      </Button>
    </ModalFooter>
  </Modal>
);

export default SaveModal;
