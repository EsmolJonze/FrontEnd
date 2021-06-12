import React, { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import { Modal } from '@bloobirds-it/bloobirds-platform-component-library';
import { useActiveCompany, useCadenceControl } from '../../../hooks';
import { EVENTS, STEPS, stepsMachine } from './cadenceControlModal.machine';
import NextStepsStep from './nextStep';
import ConfigureCadenceStep from './configureCadence';
import UpdateLeadStatusesStep from './updateLeadStatuses';
import { useMinimizableModals } from '../../../hooks/emails/useMinimizableModals';
import { ACTIVITY_MODE } from '../../../constants/activity';
import { getValueFromLogicRole } from '../../../utils/bobjects.utils';
import { companyUrl } from '../../../app/_constants/routes';

const STEPS_PROPS = Object.seal({
  NEXT_STEPS: { title: 'Cadence control', width: 640 },
  CONFIGURE_CADENCE_OPPORTUNITY: { title: 'Configure the sales cadence', width: 806 },
  CONFIGURE_CADENCE_COMPANY: { title: 'Configure the prospecting cadence', width: 806 },
  UPDATE_LEADS_STATUSES: { title: 'Updates lead statuses', width: 1020 },
});

const CadenceControlModal = ({ open, handleClose }) => {
  const { company } = useActiveCompany();
  const { resetCadenceControlInfo, isOpportunity, step: initialStep } = useCadenceControl();
  const { openMinimizableModal } = useMinimizableModals();
  const handleOpenModal = type => {
    openMinimizableModal({
      type,
      mode: ACTIVITY_MODE.CREATE,
      company: {
        name: getValueFromLogicRole(company, 'COMPANY__NAME'),
        url: companyUrl(company),
        data: company,
      },
    });
  };

  const [{ value: step }, send] = useMachine(stepsMachine, {
    context: {
      nextStep: () => handleOpenModal('Task'),
      handleClose,
    },
  });
  let currentStep = step;

  useEffect(() => {
    if (initialStep && send) {
      send(initialStep);
    }
  }, [initialStep, send]);

  if (step === STEPS.CONFIGURE_CADENCE) {
    currentStep = isOpportunity
      ? `${STEPS.CONFIGURE_CADENCE}_OPPORTUNITY`
      : `${STEPS.CONFIGURE_CADENCE}_COMPANY`;
  }
  const otherProps = STEPS_PROPS[currentStep];

  useEffect(
    () => () => {
      resetCadenceControlInfo();
    },
    [],
  );

  return (
    <Modal open={open} onClose={handleClose} {...otherProps}>
      {step === STEPS.NEXT_STEPS && (
        <NextStepsStep
          handleBack={() => {}}
          handleContinue={selectedStep => send(EVENTS.NEXT, { selectedStep })}
          handleSkip={() => send(EVENTS.SKIP)}
          handleClose={handleClose}
        />
      )}
      {step === STEPS.CONFIGURE_CADENCE && (
        <ConfigureCadenceStep
          handleBack={() => send(EVENTS.PREVIOUS)}
          handleSkip={() => send(EVENTS.SKIP)}
          handleNext={hasLeads => send(EVENTS.NEXT, { hasLeads })}
        />
      )}
      {step === STEPS.UPDATE_LEADS_STATUSES && (
        <UpdateLeadStatusesStep handleBack={() => send(EVENTS.PREVIOUS)} handleSave={handleClose} />
      )}
    </Modal>
  );
};

export default CadenceControlModal;
