import React, { useState } from 'react';
import { xlsxManager } from '../../../../misc/xlsxManager';
import Grid from '@material-ui/core/Grid';
import classNames from 'clsx';
import Dropzone from 'react-dropzone';
import { useImportForm } from '../../../../hooks/useImportForm';
import styles from './importFileSection.module.css';
import { Icon } from '@bloobirds-it/bloobirds-platform-component-library';

const VALID_EXTENSIONS = new Set(['xlsx', 'xls', 'xlsb']);

const ImportFileSectionView = () => {
  const { setExcelFile, excelFileName, setExcelFileName, setCanBeImported } = useImportForm();
  const [dragging, setDragging] = useState(false);
  const [valid, setValid] = useState(true);
  const [fileName, setFileName] = useState(null);
  const [fileDrop, setFileDrop] = useState(false);

  const fileIsUploading = () => fileDrop && !fileName;
  const fileIsUploaded = () => !fileDrop && (fileName || excelFileName);
  const noFileSelected = () => !fileDrop && (!fileName && !excelFileName);

  const getFile = async uploadedFile => {
    const xlsxFile = new FormData();
    xlsxFile.append('file', uploadedFile);
    const data = await xlsxManager().readFileToJsonAsync(uploadedFile);
    setExcelFile(xlsxFile);
    setFileName(data.name);
    setExcelFileName(data.name);
  };

  const deleteFile = () => {
    setExcelFile(null);
    setFileName(null);
    setExcelFileName(null);
    setCanBeImported(false);
  };

  const containerClasses = classNames(styles.dragAndDrop, {
    [styles.dragOutBorder]: !dragging,
    [styles.dragInBorder]: dragging && valid,
    [styles.dragInInvalid]: !valid,
  });
  return (
    <>
      <Grid xs={12} container direction={'row'} alignItems={'center'} justify={'center'}>
        <Grid container xs={9}>
          <h3 className={styles.title}>Upload your files</h3>
        </Grid>
      </Grid>
      <Grid xs={12} container direction={'row'} alignItems={'center'} justify={'center'}>
        <Dropzone
          onDrop={files => {
            setFileDrop(true);
            setDragging(false);
            setCanBeImported(false);

            const extension = files[0].name.split('.').pop();

            if (!VALID_EXTENSIONS.has(extension)) {
              setValid(false);
              setFileDrop(false);
              setTimeout(() => setValid(true), 2500);
              return;
            }

            try {
              getFile(files[0]).then(() => setFileDrop(false));
            } catch (error) {
              setValid(false);
              setTimeout(() => setValid(true), 2500);
            }
          }}
          onDragEnter={() => {
            setValid(true);
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDropRejected={deleteFile}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className={containerClasses}>
              {fileIsUploading() && (
                <p className={styles.textFileName}>
                  <Icon size={30} name={'clock'} />
                  <span className={styles.importTest}>Your file is being uploaded!</span>
                </p>
              )}
              {fileIsUploaded() && (
                <span className={styles.fileNameContainer}>
                  <p className={styles.textFileName}>{fileName || excelFileName}</p>
                  <div className={styles.deleteFileIcon} onClick={deleteFile}>
                    <Icon name="cross" />
                  </div>
                </span>
              )}
              {!valid && (
                <p className={styles.textFileName}>
                  Format not supported. Just xlsx files supported.
                </p>
              )}
              {noFileSelected() && (
                <p className={styles.text}>
                  Drag and drop or
                  <span className={styles.inputLabel}>
                    <input type="file" className={styles.inputFile} {...getInputProps()} />
                    choose a .xlsx file
                  </span>
                  to upload your companies.
                </p>
              )}
            </div>
          )}
        </Dropzone>
      </Grid>
    </>
  );
};

export default ImportFileSectionView;
