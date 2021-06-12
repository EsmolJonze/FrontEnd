import {
  Table,
  TableBody,
  TableCell,
  TableHead,
} from '@bloobirds-it/bloobirds-platform-component-library';
import PropTypes from 'prop-types';
import React from 'react';
import CodeBlockModal from '../codeBlockModal/codeBlockModal';

const LogsTable = ({ syncLogs }) => (
  <Table>
    <TableHead>
      <TableCell>datetime</TableCell>
      <TableCell>Object</TableCell>
      <TableCell>Action</TableCell>
      <TableCell>Status</TableCell>
    </TableHead>
    <TableBody>
      {syncLogs.map(log => (
        <CodeBlockModal data={log} />
      ))}
    </TableBody>
  </Table>
);
export default LogsTable;

LogsTable.propTypes = {
  syncLogs: PropTypes.any,
};
