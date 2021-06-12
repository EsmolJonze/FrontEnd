import React from 'react';
import { ViewTableContextProvider } from './viewTable.context';

export const contextWrapper = Component => props => (
  <ViewTableContextProvider>
    <Component {...props} />
  </ViewTableContextProvider>
);
