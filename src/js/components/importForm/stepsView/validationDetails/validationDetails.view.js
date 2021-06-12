import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import ValidationContent from '../validationContent';
import { useRouter } from '../../../../hooks';
import { APP_CL_IMPORT_HISTORY } from '../../../../app/_constants/routes';
import ImportProgressModalView from '../importProgressModal';
import { useImportForm } from '../../../../hooks/useImportForm';
import { WebApi } from '../../../../misc/api/web';
import { Spinner } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from '../upload/upload.module.css';

const ValidationDetails = () => {
  const {
    bobjectType,
    excelFile,
    action,
    importName,
    startImport,
    startValidation,
    clearImportData,
  } = useImportForm();

  const [open, setOpen] = useState(false);
  const { history } = useRouter();
  const [validationResponse, setValidationResponse] = useState(null);
  const [errorsOnMessage, setErrorsOnMessage] = useState(false);
  const [totalObjects, setTotalObjects] = useState(0);

  const stopImport = () => {};

  const closeImportView = () => {
    clearImportData();
    history.push(APP_CL_IMPORT_HISTORY);
  };

  const handleToggle = () => setOpen(!open);
  const handleClose = () => {
    setOpen(false);
    closeImportView();
  };

  const saveImport = () =>
    WebApi.create({
      path: 'service/import/history',
      body: excelFile,
      params: `?importName=${encodeURIComponent(importName)}&importAction=${action}&bobjectType=${
        bobjectType.name
      }&totalObjects=${totalObjects}`,
    }).then(data => handleToggle(data));

  useEffect(() => {
    if (startImport) {
      saveImport();
      handleToggle();
    }
  }, [startImport]);

  useEffect(() => {
    if (startValidation) {
      WebApi.validate({
        path: 'service/import/history',
        body: excelFile,
        params: `?importAction=${action}&bobjectType=${bobjectType.name}`,
      }).then(data => {
        const hasErrors = data.filter(msg => msg.type === 'ERROR_REQUIREMENT').length > 0;

        if (hasErrors) {
          setErrorsOnMessage(hasErrors);
        } else {
          const successMessage = data
            .filter(msg => msg.type === 'SUCCESS')
            .map(element => element.message);
          setTotalObjects(successMessage);
        }
        setValidationResponse(data);
      });
    }
  }, [startValidation]);

  return (
    <>
      <Grid container xs={'12'} alignItems={'center'} justify={'center'}>
        {validationResponse ? (
          <ValidationContent validationMsg={validationResponse} theresErrors={errorsOnMessage} />
        ) : (
          <>
            <Grid container justify={'center'} xs={12}>
              <h2 className={styles._title}>Your file is being checked!</h2>
            </Grid>
            <Grid container justify={'center'} xs={12}>
              <p className={styles._subTitle}>
                This process may take a while depending on the size of the file.
              </p>
            </Grid>
            <div className={styles._spinner}>
              <Spinner />
            </div>
          </>
        )}
      </Grid>
      <ImportProgressModalView open={open} close={handleClose} stopImport={stopImport} />
    </>
  );
};

export default ValidationDetails;
