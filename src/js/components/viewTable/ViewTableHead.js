import { TableCell, TableRow, TableHead } from '@material-ui/core';
import React from 'react';
import styles from '../bobjectTable/tableHead/TableHead.module.css';

const TableCellHeader = ({ column }) => (
  <TableCell className={styles._tableHeadField}>
    <div className={styles._tableHeadFieldSort}>
      <span className={styles._tableHeadFieldText}>{column.header}</span>
    </div>
  </TableCell>
);
const ViewTableHead = props => (
  <TableHead>
    <TableRow className={styles._tableHead}>
      {props.columns?.map(column => (
        <TableCellHeader column={column} key={`header-${column.key}`} {...props} />
      ))}
    </TableRow>
  </TableHead>
);

export default ViewTableHead;
