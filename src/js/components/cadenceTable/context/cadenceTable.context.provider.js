import React from 'react';
import { CadenceContextProvider } from './cadenceTable.context';

export const contextWrapper = Component => props => (
  <CadenceContextProvider>
    <Component {...props} />
  </CadenceContextProvider>
);
