import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalSection,
  Callout,
  Spinner,
} from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './connectIntegration.module.css';

const ConnectIntegrationModal = ({ children, handleError, error, crm, isSubmitting, onSubmit }) => {
  const [open, setOpen] = useState(false);
  const modalTitle = `Connect your ${crm}`;
  const modalSectionTitle = `Add your ${crm} details`;
  const handleToggle = () => setOpen(!open);
  const handleClose = () => {
    setOpen(false);
    handleError(false);
  };

  return (
    <>
      <Button
        variant="primary"
        color="bloobirds"
        iconLeft="settings"
        onClick={handleToggle}
        uppercase
      >
        connect {crm}
      </Button>

      <Modal title={modalTitle} open={open} onClose={handleClose}>
        <ModalContent>
          <ModalSection title={modalSectionTitle} icon="tag">
            <div className={styles._text_area}>{children}</div>
            {error && (
              <div className={styles._callout}>
                <Callout variant="negative">
                  <span role="img" aria-label="icon-label">
                    👉
                  </span>
                  {crm} could not be connected. Are you sure you filled all the fields correctly?
                  Learn more about connecting {crm}
                </Callout>
              </div>
            )}
          </ModalSection>
        </ModalContent>
        <ModalFooter>
          <Button variant="clear" color="bloobirds" onClick={handleClose}>
            Cancel
          </Button>
          <Button disabled={isSubmitting} onClick={onSubmit}>
            {isSubmitting ? <Spinner size={16} name="loadingCircle" /> : 'CONNECT'}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default ConnectIntegrationModal;
