import React, { useState } from 'react';
import { Modal } from '@bloobirds-it/bloobirds-platform-component-library';
import AddPhoneStep from './addPhoneStep';
import DefaultPhoneStep from './defaultPhoneStep';

const AddPhoneModal = ({ open, handleClose }) => {
  const [step, setStep] = useState(0);
  const [newConnection, setNewConnection] = useState(null);

  return (
    <Modal title="Add your phone number" open={open} onClose={handleClose}>
      {step === 0 && (
        <AddPhoneStep
          handleClose={handleClose}
          handleNextStep={createdConnection => {
            setNewConnection(createdConnection);
            setStep(1);
          }}
        />
      )}
      {step === 1 && <DefaultPhoneStep handleClose={handleClose} newConnection={newConnection} />}
    </Modal>
  );
};

export default AddPhoneModal;
