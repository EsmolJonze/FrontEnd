import React from 'react';
import { Button } from '@bloobirds-it/bloobirds-platform-component-library';
import { STEP_SELECT_TYPE, STEP_START_IMPORT, STEP_UPLOAD_AND_VERIFY } from '../constants';
import style from './footer.module.css';
import { usePreviousUrl, useRouter } from '../../../hooks';
import { APP_CL_IMPORT, APP_TASKS_WELCOME } from '../../../app/_constants/routes';
import { useImportForm } from '../../../hooks/useImportForm';

const FooterView = props => {
  const { setVisibilityComponent } = { ...props };
  const {
    excelFile,
    action,
    importName,
    bobjectType,
    step,
    nextStep,
    prevStep,
    clearImportData,
    setStartValidation,
    canBeImported,
    setStartImport,
  } = useImportForm();
  const { history } = useRouter();
  const { getPreviousUrl } = usePreviousUrl();
  const previousUrl = getPreviousUrl();
  const nextUrl =
    previousUrl !== '' && previousUrl !== APP_CL_IMPORT ? previousUrl : APP_TASKS_WELCOME;

  const checkHasBobjectSelected = () => bobjectType !== null;
  const checkValidExcel = () => importName && excelFile !== null;
  const checkCanBeImported = () => canBeImported;

  const startImportProcess = () => {
    setStartImport(true);
  };

  const startValidationProcess = () => {
    setStartValidation(true);
    nextStep();
  };

  return (
    <div className={style._root}>
      <div className={style._btn_wrapper}>
        {step !== STEP_SELECT_TYPE && (
          <Button variant="secondary" expand onClick={prevStep}>
            {step === STEP_UPLOAD_AND_VERIFY && 'Back'}
            {step === STEP_START_IMPORT && 'Back & upload again'}
          </Button>
        )}
        <Button
          variant="tertiary"
          expand
          onClick={() => {
            setVisibilityComponent(false);
            clearImportData();
            setStartValidation(false);
            setStartImport(false);
            history.push(nextUrl);
          }}
        >
          Cancel
        </Button>
      </div>
      {step === STEP_SELECT_TYPE && (
        <div className={style._btn_container}>
          <Button expand onClick={nextStep} disabled={!checkHasBobjectSelected()}>
            Next
          </Button>
        </div>
      )}
      {step === STEP_UPLOAD_AND_VERIFY && (
        <div className={style._btn_container}>
          <Button expand onClick={startValidationProcess} disabled={!checkValidExcel()}>
            Check File
          </Button>
        </div>
      )}
      {step === STEP_START_IMPORT && (
        <div className={style._btn_container}>
          <Button expand onClick={startImportProcess} disabled={!checkCanBeImported()}>
            {`Start ${action}`}
          </Button>
        </div>
      )}
    </div>
  );
};

export default FooterView;
