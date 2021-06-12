import React from 'react';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';
import Grid from '@material-ui/core/Grid';
import { useImportForm } from '../../../../hooks/useImportForm';
import styles from './validationContent.module.css';

const ValidationContent = ({ validationMsg, theresErrors }) => {
  const { bobjectType, action, setCanBeImported } = useImportForm();

  const validationErrors = validationMsg
    .filter(msg => msg.type === 'ERROR_REQUIREMENT')
    .map(element => element.message);

  const validationWarnings = validationMsg
    .filter(msg => msg.type === 'ERROR_WARNING')
    .map(element => element.message);

  const successMessage = validationMsg
    .filter(msg => msg.type === 'SUCCESS')
    .map(element => element.message);

  if (!theresErrors) {
    setCanBeImported(true);
  }

  const getBobjectNamePlural = bobjectTypeName => {
    if (bobjectTypeName.slice(-1) === 'y') {
      return `${bobjectTypeName.substring(0, bobjectTypeName.length - 1).toLowerCase()}ies`;
    }
    return `${bobjectTypeName.toLowerCase()}s`;
  };

  const generateActionName = name => {
    if (name.toLowerCase() === 'create') {
      return 'imported';
    }

    return `${name.toLowerCase()}d`;
  };

  const ErrorH2 = () => (
    <h2 className={styles.title}>Oops! There was an error while we tried to import your file</h2>
  );
  const SuccessH2 = () => (
    <h2 className={styles.title}>Your file was succesfully checked and you are ready to import!</h2>
  );
  const ErrorP = () => (
    <p className={styles.subTitle}>
      Make sure that your Excel spreadsheet meets the{' '}
      <a
        className={styles.uploadLink}
        href={
          'https://support.bloobirds.com/hc/en-us/articles/360011329800-How-to-prepare-your-data-to-be-imported'
        }
      >
        following requirements
      </a>
    </p>
  );
  const SuccessP = () => (
    <p className={styles.subTitle}>
      Please bare in mind that completing the import might take a while.
    </p>
  );

  const messageLabel = (className, msg) => (
    <div className={className}>
      <Text size="s">{msg}</Text>
    </div>
  );

  return (
    <Grid container direction="row" xs={6} alignItems="center" justify="center">
      <Grid item xs={12}>
        {theresErrors ? <ErrorH2 /> : <SuccessH2 />}
      </Grid>
      <Grid item xs={12}>
        {theresErrors ? <ErrorP /> : <SuccessP />}
      </Grid>
      <div className={styles.divScrollable}>
        {validationErrors.length === 0 &&
          messageLabel(
            styles.logSuccess,
            `${`${successMessage} ${getBobjectNamePlural(
              bobjectType.name,
            )}`} will be ${generateActionName(action)}`,
          )}
        {validationErrors.length > 0 &&
          validationErrors.map(msg => messageLabel(styles.logError, msg))}
        {validationWarnings.length > 0 &&
          validationWarnings.map(msg => messageLabel(styles.logWarning, msg))}
      </div>
    </Grid>
  );
};

export default ValidationContent;
