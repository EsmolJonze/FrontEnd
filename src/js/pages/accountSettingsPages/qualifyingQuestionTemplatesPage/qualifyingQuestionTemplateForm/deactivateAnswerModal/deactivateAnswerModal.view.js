import React from 'react';
import {
  Button,
  Callout,
  Modal,
  ModalContent,
  ModalFooter,
  Text,
} from '@bloobirds-it/bloobirds-platform-component-library';

const DeactivateAnswerModal = ({ visible, onCancel, onConfirm }) => (
  <Modal title="Deactivate an answer" open={visible} onClose={onCancel}>
    <ModalContent>
      <Text size="m" weight="medium">
        This answer cannot be deleted because it is currently used for 1 or more companies. Do you
        want to deactivate this answer instead?
      </Text>
      <br />
      <Callout>
        <Text size="m" weight="medium">
          Deactivating an answer will no longer show it as an answer choice
        </Text>
        <Text size="m">
          when filling out this question. You can reactivate it whenever you want.
        </Text>
      </Callout>
    </ModalContent>
    <ModalFooter>
      <Button onClick={onCancel} variant="clear">
        Cancel
      </Button>
      <Button onClick={onConfirm}>Deactivate Answer</Button>
    </ModalFooter>
  </Modal>
);

export default DeactivateAnswerModal;
