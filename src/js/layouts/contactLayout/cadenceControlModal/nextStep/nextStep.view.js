import React, { useState } from 'react';
import {
  Button,
  Callout,
  ChipGroup,
  Chip,
  ModalContent,
  ModalFooter,
  ModalSection,
  Radio,
  RadioGroup,
  Text,
  Skeleton,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { useCadence, useCadenceControl } from '../../../../hooks';
import { formatDate } from '../../../../utils/dates.utils';
import CadenceIcon from '../cadenceIcon';
import styles from './nextStep.module.css';

const ACTIONS = Object.seal({
  NO_STOP: 'NO_STOP',
  YES_STOP: 'YES_STOP',
});

const STEPS_PROPS = Object.seal({
  NEXT_STEP: {
    message: 'Currently there is no cadence in progress.',
    title: 'What do you want to do next?',
  },
  STOP_CADENCE: {
    message:
      'The <b>"##CADENCE_NAME##" cadence</b> is currently in progress, and started on ##CADENCE_DATE##.',
    title: 'Do you want to stop the cadence?',
  },
});

const NextStepsStep = ({
  handleBack,
  handleClose,
  handleContinue,
  // handleSkip,
}) => {
  const {
    bobject,
    cadenceControl,
    isLoading,
    stopCadence,
    updateCadenceControl,
  } = useCadenceControl();
  const [nextStep, setNextStep] = useState(cadenceControl.nextStep);
  const [action, setAction] = useState(ACTIONS.NO_STOP);
  const {
    currentCadenceName,
    currentStartDate,
    defaultCadence,
    name,
    previousStep,
  } = cadenceControl;
  const date = currentStartDate && formatDate(new Date(currentStartDate), 'dd LLLL yyyy');
  const { hasStarted } = useCadence(bobject);
  const viewType = hasStarted ? 'STOP_CADENCE' : 'NEXT_STEP';

  const getMessage = () => {
    let message = STEPS_PROPS[viewType].message;
    if (hasStarted) {
      message = message.replace('##CADENCE_NAME##', currentCadenceName || defaultCadence);
      message = message.replace('##CADENCE_DATE##', date);
      message = <span dangerouslySetInnerHTML={{ __html: message }} />;
    }
    return message;
  };

  const getRadioElements = () => {
    let elements = [];
    if (previousStep || hasStarted) {
      elements = [
        <Radio size="medium" value="anything" key="radio-anything">
          I don't want to do anything else
        </Radio>,
      ];
    }

    elements = [
      ...elements,
      <Radio
        dataTest="opportunityModalNewCadence"
        size="medium"
        value="newCadence"
        key="radio-newCadence"
      >
        I want to configure a new cadence
      </Radio>,
      <Radio
        dataTest="opportunityModalNextStep"
        size="medium"
        value="nextStep"
        key="radio-nextStep"
      >
        I want to manually schedule a next step
      </Radio>,
    ];

    return elements;
  };

  const renderSection = () => {
    let content = [];
    if (hasStarted) {
      content = [
        ...content,
        <div className={styles._actions__wrapper} key="stopCadenceKey">
          <ChipGroup defaultValue={action} onChange={value => setAction(value)}>
            <Chip dataTest="stopTheCadence" value={ACTIONS.YES_STOP}>
              Yes, stop the cadence
            </Chip>
            <Chip value={ACTIONS.NO_STOP}>No, keep it going</Chip>
          </ChipGroup>
        </div>,
      ];
    }

    if (!hasStarted || (hasStarted && action === ACTIONS.YES_STOP)) {
      content = [
        ...content,
        <div className={styles._options__wrapper} key="changeCadenceRadioKey">
          <RadioGroup defaultValue={nextStep} onChange={setNextStep}>
            {getRadioElements()}
          </RadioGroup>
        </div>,
      ];
    }

    return content;
  };

  return (
    <>
      <ModalContent
        dataTest={`cadence-control-first-step${hasStarted ? '-with' : '-without'}-cadence`}
      >
        <ModalSection size="l" title={`Cadence control for ${name}`}>
          <Callout width="100%" withoutIcon variant={hasStarted ? 'positive' : 'neutral'}>
            <div className={styles._message__wrapper}>
              <CadenceIcon color={hasStarted ? 'softMelon' : 'verySoftPeanut'} />
              {getMessage()}
            </div>
          </Callout>
          <div className={styles._section_title__wrapper}>
            <Text size="m" weight="medium" color="peanut">
              {STEPS_PROPS[viewType].title}
            </Text>
          </div>
          {!isLoading ? renderSection() : <Skeleton variant="rect" height={118} width={210} />}
        </ModalSection>
      </ModalContent>
      <ModalFooter>
        <div className={styles._buttons__wrapper}>
          {previousStep && (
            <Button variant="clear" onClick={handleBack}>
              Back
            </Button>
          )}
          {/* <Button variant="secondary" onClick={handleSkip}>
            Skip
          </Button> */}
          <Button
            dataTest={'formContinue'}
            onClick={() => {
              if (!hasStarted || (hasStarted && action === ACTIONS.YES_STOP)) {
                if (hasStarted && action === ACTIONS.YES_STOP && nextStep !== 'newCadence') {
                  stopCadence(handleContinue);
                }
                updateCadenceControl({ ...cadenceControl, nextStep });
                handleContinue(nextStep);
              } else {
                handleClose();
              }
            }}
          >
            {(hasStarted && action === ACTIONS.YES_STOP) || !hasStarted ? 'Continue' : 'Accept'}
          </Button>
        </div>
      </ModalFooter>
    </>
  );
};

export default NextStepsStep;
