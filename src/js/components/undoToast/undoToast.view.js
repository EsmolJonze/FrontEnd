import React from 'react';
import { Button, Snackbar, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { useTaskContext } from '../../contexts/task';

const UndoToast = () => {
  const { setShowToast, showToast, markAsDone } = useTaskContext();

  const onCloseAndMark = () => {
    setShowToast(false);
    markAsDone();
  };

  const onClose = () => {
    setShowToast(false);
  };

  return (
    <Snackbar variant="actions" visible={showToast} position="bottom" onClose={onCloseAndMark}>
      <Text color="white" size="xs">
        1 task completed
      </Text>
      <Button variant="clear" color="tomato" onClick={onClose}>
        Cancel
      </Button>
      <Button variant="clear" color="verySoftPeanut" onClick={onCloseAndMark}>
        Complete
      </Button>
    </Snackbar>
  );
};

export default UndoToast;
