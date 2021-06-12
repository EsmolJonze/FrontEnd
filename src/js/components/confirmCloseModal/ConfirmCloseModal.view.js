import React from 'react';
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  Text,
} from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './ConfirmCloseModal.module.css';
import { useMinimizableModals } from '../../hooks/emails/useMinimizableModals';

const ConfirmCloseModal = () => {
  const {
    getMinimizableModalContext,
    confirmationModal,
    cancelConfirmModal,
  } = useMinimizableModals();
  const { isOpen, id } = confirmationModal;
  const { closeModal, type } = getMinimizableModalContext(id);

  const handleDelete = () => {
    cancelConfirmModal();
    closeModal(id);
  };

  return (
    <Modal width={600} title={'Close'} open={isOpen} onClose={cancelConfirmModal}>
      <ModalContent>
        <div className={styles._content}>
          <Text size="m">You already filled some information on your new {type.toLowerCase()}</Text>
          <Text size="m">
            <b>This action cannot be undone</b>, are you sure you want to continue?
          </Text>
        </div>
      </ModalContent>
      <ModalFooter>
        <Button variant="tertiary" onClick={cancelConfirmModal}>
          Cancel
        </Button>
        <Button
          variant="primary"
          color="tomato"
          dataTest="deleteModalDeleteButton"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmCloseModal;
