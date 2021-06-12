import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { mainTheme } from './themes';

const themeWrapper = theme => Component => props => (
  <MuiThemeProvider theme={theme}>
    <Component {...props} />
  </MuiThemeProvider>
);

export const mainThemeWrapper = themeWrapper(mainTheme);
