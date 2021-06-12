import React from 'react';
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  Text,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { CircularProgress } from '@material-ui/core';

const ImportProgressModalView = ({ open, close, stopImport }) => (
  <Modal title=" Your bulk action is in progress" width="480" open={open} onClose={close}>
    <ModalContent>
      <div align="center">
        <CircularProgress />
      </div>
    </ModalContent>
    <ModalContent>
      <Text size="s" align="center" weight="heavy">
        Your bulk action is on its way!
      </Text>
    </ModalContent>
    <ModalContent>
      <Text size="s" align="center" color="gray">
        You may close this modal. We will send you a notification and email you when your bulk
        action has been completed.
      </Text>
    </ModalContent>
    <ModalContent />
    <ModalFooter>
      <Button variant="clear" color="tomato" onClick={stopImport}>
        Stop Import
      </Button>
      <Button onClick={close}>Close</Button>
    </ModalFooter>
  </Modal>
);

export default ImportProgressModalView;
