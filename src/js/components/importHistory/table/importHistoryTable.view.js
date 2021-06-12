import React, { useState } from 'react';
import {
  Table,
  Head,
  Body,
  Row,
  Cell,
  Label,
  Button,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { useImportHistoryContext } from '../stateManagement/context';
import styles from './importHistoryTable.module.css';
import Buttons from './buttons/buttons.view';
import { downloadImport } from '../stateManagement/service';
import { format } from 'date-fns-tz';

const ProgressBar = ({ percentage }) => (
  <div className={styles._progressBar}>
    <p>{percentage}%</p>
    <div style={{ width: `${percentage}%` }} />
  </div>
);

const shouldUpdateRow = (prevProps, nextProps) =>
  !(
    nextProps.hoveredRow !== prevProps.hoveredRow &&
    (nextProps.hoveredRow === nextProps.importRecord.id ||
      prevProps.hoveredRow === prevProps.importRecord.id)
  );

const getStatusLabelColor = importRecord => {
  switch (importRecord.status) {
    case 'Failed':
      return 'softTomato';
    case 'Ongoing':
      return 'softTangerine';
    case 'Stopped':
      return 'softTangerine';
    case 'Completed':
      if (importRecord.failedObjects > 0) {
        return 'banana';
      }
      return 'melon';
    default:
      return 'melon';
  }
};

const ImportRow = React.memo(({ importRecord, hoveredRow, setHoveredRow, handleStopImports }) => {
  const percentage = Math.round(
    ((importRecord.failedObjects + importRecord.successObjects) / importRecord.totalObjects) * 100,
  );
  const [doubleCheck, setDoubleCheck] = useState(false);
  const [confirmStop, setConfirmStop] = useState(false);
  return (
    <Row
      key={`import-${importRecord.id}-${importRecord.bobjectType}`}
      onHover={() => {
        if (!((hoveredRow === importRecord.id) === importRecord.id)) {
          setHoveredRow(importRecord.id);
        }
      }}
    >
      <Cell>{format(new Date(`${importRecord.creationDatetime}Z`), 'MMM dd, yyyy HH:mm:ss')}</Cell>
      <Cell>
        <div className={styles._cellDownloadContainer}>
          <p className={styles._cellTextBlue}>{importRecord.name} </p>
          {hoveredRow === importRecord.id && (
            <Buttons downloadImport={downloadImport} imp={importRecord} reportType={'IMPORT'} />
          )}
        </div>
      </Cell>
      <Cell>
        {importRecord.action
          ? importRecord.action.charAt(0).toUpperCase() + importRecord.action.slice(1).toLowerCase()
          : 'Create'}
      </Cell>
      <Cell>{importRecord.bobjectType}</Cell>
      <div className={styles._statusCell}>
        <Cell>
          {importRecord.status === 'Ongoing' ? (
            <div className={styles._statusContainer}>
              <ProgressBar percentage={percentage} />
              {doubleCheck ? (
                <>
                  {hoveredRow === importRecord.id && (
                    <Button
                      variant="clear"
                      iconLeft="cross"
                      color="tomato"
                      onClick={() => {
                        setDoubleCheck(false);
                        setConfirmStop(true);
                        importRecord.status = 'Stopped';
                        handleStopImports(importRecord.id);
                      }}
                      uppercase
                    >
                      sure?
                    </Button>
                  )}
                </>
              ) : (
                <>
                  {hoveredRow === importRecord.id && !confirmStop && (
                    <Button
                      variant="clear"
                      iconLeft="cross"
                      color="bloobirds"
                      onClick={() => setDoubleCheck(true)}
                      uppercase
                    >
                      stop
                    </Button>
                  )}
                </>
              )}
            </div>
          ) : (
            <div className={styles._label}>
              <Label color={getStatusLabelColor(importRecord)}>{importRecord.status}</Label>
            </div>
          )}
        </Cell>
      </div>
      <Cell>
        <div className={styles._cellDownloadContainer}>
          <p
            className={
              importRecord.successObjects > 0 ? styles._cellTextBlue : styles._cellTextBlack
            }
          >
            {importRecord.successObjects}
          </p>
          {hoveredRow === importRecord.id && importRecord.awsS3SuccessFileKey && (
            <Buttons downloadImport={downloadImport} imp={importRecord} reportType={'SUCCESS'} />
          )}
        </div>
      </Cell>
      <Cell>
        <div className={styles._cellDownloadContainer}>
          <p
            className={
              importRecord.failedObjects > 0 ? styles._cellTextBlue : styles._cellTextBlack
            }
          >
            {importRecord.failedObjects}
          </p>
          {hoveredRow === importRecord.id && importRecord.awsS3FailureFileKey && (
            <Buttons downloadImport={downloadImport} imp={importRecord} reportType={'ERROR'} />
          )}
        </div>
      </Cell>
      <Cell>{importRecord.user}</Cell>
    </Row>
  );
}, shouldUpdateRow);

const ImportHistoryTableView = ({ handleStopImport }) => {
  const {
    state: { imports, importsUpdated },
  } = useImportHistoryContext();
  const [hoveredRow, setHoveredRow] = useState(undefined);
  return (
    <div onMouseLeave={() => setHoveredRow(undefined)}>
      <Table>
        <Head>
          <Cell>DATETIME</Cell>
          <Cell>NAME</Cell>
          <Cell>IMPORT TYPE</Cell>
          <Cell>OBJECT TYPE</Cell>
          <Cell>STATUS</Cell>
          <Cell>SUCCESS</Cell>
          <Cell>ERROR</Cell>
          <Cell>IMPORTED BY</Cell>
        </Head>
        <Body>
          {importsUpdated &&
            imports?.map(importRecord => (
              <ImportRow
                importRecord={importRecord}
                hoveredRow={hoveredRow}
                setHoveredRow={setHoveredRow}
                handleStopImports={handleStopImport}
              />
            ))}
        </Body>
      </Table>
    </div>
  );
};

export default ImportHistoryTableView;
