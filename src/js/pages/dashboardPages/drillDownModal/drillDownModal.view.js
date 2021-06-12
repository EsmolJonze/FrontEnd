import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableHeader,
  TableHeaderLeft,
  TableLabel,
  TableRow,
  TableFooterRight,
  TableTitle,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { map } from 'lodash';
import { DateTextField } from '../../../components/filter/field/field';
import { useEntity, useDrillDownModal } from '../../../hooks';
import { BobjectFieldPill } from '../../../components/filter/field/pill';
import { companyIdUrl, leadUrl } from '../../../app/_constants/routes';
import styles from './drillDownModal.module.css';

const ColoredPill = (value, bobjectFieldId) => {
  const bobjectPicklistFieldValues = useEntity('bobjectPicklistFieldValues');
  const picklistValues = bobjectPicklistFieldValues?.filterBy('bobjectField', bobjectFieldId);
  const picklistValue = picklistValues?.find(property => property.value === value);

  if (picklistValue?.backgroundColor) {
    return (
      <BobjectFieldPill
        field={{
          text: value,
          valueBackgroundColor: picklistValue.backgroundColor,
          valueTextColor: picklistValue.textColor,
          valueOutlineColor: picklistValue.outlineColor,
        }}
      />
    );
  }
  return value;
};

const FieldTableCell = ({ value, type, bobjectFieldId }) => {
  if (value === 'null') {
    return null;
  }
  if (type === 'PICKLIST') {
    return ColoredPill(value, bobjectFieldId);
  }
  if (type === 'DATE' || type === 'DATETIME') {
    const date = new Date(value);
    return <DateTextField field={{ text: date.toISOString() }} />;
  }

  if (type === 'TEXT') {
    return value;
  }

  return value;
};

const DrillDownModal = () => {
  const {
    drillDownData,
    openDrillDown,
    setOpenDrillDown,
    updateDrillDown,
    resetDrillDownData,
  } = useDrillDownModal();
  const result = drillDownData?.data?.result;

  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(10);
  const scrollRef = useRef(null);

  useEffect(() => {
    updateDrillDown(
      drillDownData.report,
      drillDownData.title,
      drillDownData.localFilters,
      drillDownData.nullField,
      rows,
      rows * page,
    );
  }, [page, rows]);

  if (drillDownData?.data && result.length !== 0) {
    const headers = map(result[0].filter(column => column.fieldType !== 'REFERENCE'), 'label');

    const handleClick = references => {
      if (references.length > 1) {
        const companyId = references.filter(ref => ref.label === 'Company')[0];
        if (companyId) window.open(companyIdUrl(companyId.value));
      } else if (references.length === 1) {
        if (references[0].label === 'Company') {
          window.open(companyIdUrl(references[0].value));
        } else if (references[0].label.includes('Lead')) {
          window.open(leadUrl(references[0].value));
        }
      }
    };

    return (
      <Modal
        width="70%"
        open={openDrillDown}
        title="Drill down"
        onClose={() => {
          setOpenDrillDown(false);
          resetDrillDownData();
        }}
      >
        <ModalContent>
          <TableContainer>
            <TableHeader>
              <TableHeaderLeft>
                <TableTitle>{drillDownData?.title}</TableTitle>
                <TableLabel>{drillDownData?.data.totalMatching} Results</TableLabel>
              </TableHeaderLeft>
            </TableHeader>
            <Table ref={scrollRef} className={styles.table}>
              <TableHead>
                {headers.map(header => (
                  <TableCell key={header}>{header}</TableCell>
                ))}
              </TableHead>
              <TableBody>
                {result?.map(columns => (
                  <TableRow
                    onClick={() =>
                      handleClick(
                        columns.filter(
                          col =>
                            col.fieldType === 'REFERENCE' &&
                            col.value !== 'null' &&
                            col.value !== 'No Value',
                        ),
                      )
                    }
                  >
                    {columns.map(({ label, value, fieldType, bobjectFieldId }) => {
                      if (fieldType !== 'REFERENCE') {
                        return (
                          <TableCell>
                            <FieldTableCell
                              key={label + value}
                              type={fieldType}
                              value={value}
                              bobjectFieldId={bobjectFieldId}
                            />
                          </TableCell>
                        );
                      }
                      return <></>;
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TableFooter>
              <TableFooterRight>
                <Pagination
                  rowsPerPageOptions={[10, 15, 25, 50, 100]}
                  page={page}
                  count={drillDownData?.data.totalMatching}
                  rowsPerPage={rows}
                  onChangePage={pg => {
                    setPage(pg);
                    if (scrollRef) {
                      if (drillDownData?.data.totalMatching - pg * rows > 10) {
                        scrollRef.current.scrollTo(0, 0);
                      } else {
                        scrollRef.current.scrollTo({ left: 0 });
                      }
                    }
                  }}
                  onChangeRowsPerPage={setRows}
                />
              </TableFooterRight>
            </TableFooter>
          </TableContainer>
        </ModalContent>
        <ModalFooter>
          <Button
            uppercase
            onClick={() => {
              setOpenDrillDown(false);
              resetDrillDownData();
            }}
          >
            Accept
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
  return null;
};

export default DrillDownModal;
