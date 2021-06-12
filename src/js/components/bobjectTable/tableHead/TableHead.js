import { TableCell, TableRow, TableHead } from '@material-ui/core';
import React from 'react';
import { withWrappers } from '../../../misc/utils';
import styles from './TableHead.module.css';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { useEntity } from '../../../hooks/entities/useEntity';
import { useBobjectTable } from '../../../hooks';

const directions = {
  asc: 'ASC',
  desc: 'DESC',
};
const opposite = direction => (direction === directions.asc ? directions.desc : directions.asc);

const TableCellHeader = ({ bobjectField, bobjectType }) => {
  const { setSort, setDirection, direction, sort } = useBobjectTable();

  const isSortColumn = bobjectField.id === sort;
  const isOwnType = bobjectField.bobjectType === bobjectType.id;
  let columnName = bobjectField.name;
  const bobjectTypes = useEntity('bobjectTypes');
  if (!isOwnType && bobjectTypes) {
    columnName = `${columnName} from ${bobjectTypes.get(bobjectField.bobjectType)?.name}`;
  }

  const sortProperties = isOwnType
    ? {
        onClick: () => {
          const newDirection = isSortColumn ? opposite(direction) : directions.asc;
          setSort(bobjectField.id, direction);
          setDirection(newDirection);
        },
      }
    : null;

  return (
    <TableCell className={styles._tableHeadField} {...sortProperties}>
      {isOwnType ? (
        <TableSortLabel
          direction={(isSortColumn ? direction : directions.asc).toLowerCase()}
          active={isSortColumn}
          className={styles._tableHeadFieldSort}
        >
          <span className={styles._tableHeadFieldText}>{columnName} </span>
        </TableSortLabel>
      ) : (
        <span className={styles._tableHeadFieldText}>{columnName} </span>
      )}
    </TableCell>
  );
};
const BobjectTableHead = withWrappers({ router: true })(props => (
  <TableHead>
    <TableRow className={props.root}>
      {props.bobjectFields?.map(bobjectField => (
        <TableCellHeader bobjectField={bobjectField} key={bobjectField.id} {...props} />
      ))}
    </TableRow>
  </TableHead>
));

export default BobjectTableHead;
