import React from 'react';
import { TableContextProvider } from './bobjectTable.context';

export const contextWrapper = Component => props => (
  <TableContextProvider>
    <Component {...props} />
  </TableContextProvider>
);
