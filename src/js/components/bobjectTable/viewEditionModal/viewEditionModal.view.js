import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, Portal } from '@bloobirds-it/bloobirds-platform-component-library';
import StepCategories from './stepCategories';
import StepFields from './stepFields';
import styles from './viewEditionModal.module.css';
import { withWrappers } from '../../../misc/utils';
import { useViewEditionContext } from './viewEdition.context';

const STEPS = {
  categories: StepCategories,
  fields: StepFields,
};

const ViewEditionModal = ({ handleCloseModal, modalType }) => {
  const { setModalType } = useViewEditionContext();
  const [step, setStep] = useState('categories');
  const [bobjectType, setBobjectType] = useState();
  const [open, setOpen] = useState(false);
  const [fromBobjectType, setFromBobjectType] = useState();

  useEffect(() => {
    if (modalType) {
      setModalType(modalType);
      setOpen(true);
    }
  }, [open, modalType]);

  const goToStep = useCallback((stepName, bt, fromBt) => {
    setStep(stepName);
    setBobjectType(bt);
    setFromBobjectType(fromBt);
  }, [setStep, setBobjectType, fromBobjectType]);

  const StepComponent = STEPS[step];

  const onCloseModal = useCallback(() => {
    handleCloseModal();
  }, []);

  return (
    <>
      {open && (
        <Portal>
          <div
            aria-labelledby="add-element-modal-title"
            aria-describedby="add-element-modal-description"
            className={styles._overlay}
            onClick={() => handleCloseModal()}
          />
          <div className={styles._container}>
            <div className={styles._close_button}>
              <IconButton name="cross" onClick={onCloseModal} color="peanut" />
            </div>
            <StepComponent
              bobjectType={bobjectType}
              fromBobjectType={fromBobjectType}
              goToStep={goToStep}
              handleCloseModal={onCloseModal}
            />
          </div>
        </Portal>
      )}
    </>
  );
};

ViewEditionModal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};

export default withWrappers({ router: true })(ViewEditionModal);
