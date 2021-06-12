import React from 'react';
import { TableBody } from '@material-ui/core';
import { SkeletonRow, Row } from './Row';

const SkeletonTableBody = ({ columns }) => (
  <React.Fragment>
    {[...new Array(10).keys()].map(i => (
      <SkeletonRow key={i} columns={columns} />
    ))}
  </React.Fragment>
);
const TableComponent = ({ elements, columns }) => {
  let contents = <React.Fragment />;
  if (elements === undefined) {
    contents = <SkeletonTableBody columns={columns} />;
  }
  if (elements?.length > 0) {
    contents = elements.map((element, index) => {
      const key = `row-${index}`;
      return <Row key={key} element={element} columns={columns} />;
    });
  }
  return <TableBody>{contents}</TableBody>;
};

export default TableComponent;
