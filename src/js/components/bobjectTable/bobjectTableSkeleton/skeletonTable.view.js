import React, { Fragment } from 'react';
import { withWrappers } from '../../../misc/utils';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Cell from '../table/layout/Cell';
import Skeleton from '@material-ui/lab/Skeleton';
import { rowStyle } from '../table/layout/Row';
import styles from '../bobjectTable.module.css';
import { useMediaQuery } from '../../../hooks';
import headerStyles from '../tableHead/TableHead.module.css';
import { v4 as generateRandomId } from 'uuid';

const SkeletonRow = withWrappers({ style: rowStyle })(({ bobjectFields, classes }) => (
  <TableRow className={classes.root} key={generateRandomId()}>
    {bobjectFields?.map(() => (
      <Cell key={generateRandomId()}>
        <Skeleton variant="text" height="1em" />
      </Cell>
    ))}
  </TableRow>
));

export const SkeletonTableBody = ({ bobjectFields }) => (
  <React.Fragment>
    {[...new Array(10).keys()].map(() => (
      <SkeletonRow key={generateRandomId()} bobjectFields={bobjectFields} />
    ))}
  </React.Fragment>
);

export const SkeletonTableView = () => {
  const { isSmallDesktop } = useMediaQuery();
  return (
    <React.Fragment>
      <div className={styles._container} data-intercom="bobject-table">
        <Fragment>
          <div className={styles._header}>
            <div className={styles._header_left}>
              <h2 className={styles._title}>Loading view...</h2>
              {!isSmallDesktop && <div className={styles._counter__container}>...</div>}
            </div>
            <div className={styles._header_right} />
          </div>
          <>
            <div className={styles._box}>
              <Table className={styles._table}>
                <TableHead>
                  <TableRow className={headerStyles._tableHead}>
                    {[...new Array(8).keys()].map(i => (
                      <TableCell className={headerStyles._tableHeadField} key={i}>
                        <span className={headerStyles._tableHeadFieldText}>Loading...</span>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <SkeletonTableBody bobjectFields={[...new Array(8).keys()]} />
                </TableBody>
              </Table>
            </div>
          </>
        </Fragment>
      </div>
    </React.Fragment>
  );
};
