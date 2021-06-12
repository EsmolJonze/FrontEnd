import React from 'react';
import TableBody from './table/Table';

const ViewTableBody = props => {
  const { columns, elements } = props;

  return <TableBody elements={elements} columns={columns} />;
};
export default ViewTableBody;
