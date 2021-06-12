import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import React from 'react';
import classNames from 'clsx';
import StepConnector from '@material-ui/core/StepConnector';
import SelectTypeView from '../stepsView/selectType';
import Upload from '../stepsView/upload';
import ValidationDetails from '../stepsView/validationDetails';
import { useImportForm } from '../../../hooks/useImportForm';
import styles from './importStepper.module.css';
import { STEP_SELECT_TYPE, STEP_START_IMPORT, STEP_UPLOAD_AND_VERIFY, steps } from '../constants';
import { Icon } from '@bloobirds-it/bloobirds-platform-component-library';

const StepIconComponent = props => {
  const { active, completed } = props;
  return (
    <div
      className={classNames({
        [styles.stepIcons__root]: true,
        [styles.stepIcons__active]: active,
      })}
    >
      {completed ? (
        <Icon name="check" size="18" className={styles.stepIcons__completed} />
      ) : (
        <div className={styles.stepIcons__circle} />
      )}
    </div>
  );
};

const ImportStepper = () => {
  const { step } = useImportForm();
  return (
    <div className={styles.stepper__root}>
      <Stepper alternativeLabel activeStep={step} connector={<StepConnector />}>
        {Object.values(steps).map(label => (
          <Step key={`step-${label}`}>
            <StepLabel StepIconComponent={StepIconComponent}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {step === STEP_SELECT_TYPE && <SelectTypeView />}
        {step === STEP_UPLOAD_AND_VERIFY && <Upload />}
        {step === STEP_START_IMPORT && <ValidationDetails />}
      </div>
    </div>
  );
};

export default ImportStepper;
