import React from 'react';
import ImportFileSection from '../importFileSection';
import Grid from '@material-ui/core/Grid';
import styles from './upload.module.css';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { useImportForm } from '../../../../hooks/useImportForm';
import { saveAs } from '../../../../misc/utils';
import { Input } from '@bloobirds-it/bloobirds-platform-component-library';

const Upload = () => {
  const { webApi } = useBloobirdsApiStateContext();
  const { bobjectType, action, importName, setImportName } = useImportForm();

  const downloadDataModel = () => {
    webApi
      .request({
        url: `/service/import/history/${bobjectType.name}/${action}`,
        method: 'GET',
        xlsxDownload: true,
      })
      .then(readableSteam => readableSteam.arrayBuffer())
      .then(response => {
        const blob = new Blob([response], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8',
        });
        saveAs(blob, `DATA_MODEL_${bobjectType.name.toUpperCase()}_${action}`);
      });
  };

  return (
    <Grid container xs={12} justify={'center'}>
      <Grid container item xs={6} sm={6} md={6} lg={5} xl={4}>
        <Grid container justify={'center'} xs={12}>
          <h2 className={styles._title}>Upload your files</h2>
        </Grid>
        <Grid container justify={'flex-start'} xs={12}>
          <ol>
            <li className={styles._text}>Download an excel file: </li>
            <ol type="a">
              <li className={styles._text}>
                For creating new objects, download a template file{' '}
                <span className={styles._download} onClick={downloadDataModel}>
                  here
                </span>
              </li>
              <li className={styles._text}>
                For updating or deleting objects, first create a list in Bloobirds which includes
                all objects. Afterward, download this list.
              </li>
            </ol>
            <li className={styles._text}>Edit your excel file</li>
            <li className={styles._text}>
              Give your action a name (e.g. New leads - Trade Fair May 2021)
            </li>
            <li className={styles._text}>Upload your new file with the required changes</li>
          </ol>
        </Grid>
        <Grid xs={12} container direction={'row'} alignItems={'center'} justify={'center'}>
          <Grid container xs={8} className={styles._importNameInput}>
            <Input
              width="100%"
              onChange={value => setImportName(value)}
              placeholder="Name your action"
              value={importName}
            />
          </Grid>
        </Grid>
        <ImportFileSection />
      </Grid>
    </Grid>
  );
};

export default Upload;
