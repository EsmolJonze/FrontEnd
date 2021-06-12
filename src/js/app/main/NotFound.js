import React from 'react';
import { withStyles } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import * as Routes from '../_constants/routes';
import { cssVariables } from '../../style/variables';

const styles = {
  root: {
    height: '100vh',
    backgroundColor: cssVariables.color.gunmetal.veryLight,
  },
};

const Index = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <h1>404</h1>
  </div>
));

const NotFoundManager = () => (
  <Switch>
    {Object.values(Routes)
      .filter(route => typeof route === 'string')
      .map(route => (
        <Route exact path={route} key={`route-${route}`} />
      ))}
    <Route component={Index} />
  </Switch>
);

export default NotFoundManager;
