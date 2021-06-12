import { APP, LOGIN } from '../_constants/routes';
import React from 'react';
import { Button, CircularProgress, withStyles } from '@material-ui/core';

export const style = {
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};
export const Validating = withStyles(style)(({ classes }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <h2>We are validating your email...</h2>
    </div>
  </div>
));

export const Validated = withStyles(style)(({ classes, onAction, title, buttonText }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <h2>{title}</h2>
      <Button href={APP} variant="contained" color="primary" onClick={onAction || (() => {})}>
        {buttonText}
      </Button>
    </div>
  </div>
));
export const Expired = withStyles(style)(({ classes }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <h2>The link has expired.</h2>
      <Button href={APP} variant="contained" color="primary">
        Go back to the app
      </Button>
    </div>
  </div>
));
export const Failure = withStyles(style)(({ classes, onAction }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <h2>Something went wrong</h2>
      <p>Probably the email has some typo.</p>
      <Button onClick={onAction} variant="contained" color="primary">
        Recover again
      </Button>

      <Button href={LOGIN} variant="text">
        Try Login
      </Button>
    </div>
  </div>
));

export const Success = withStyles(style)(({ classes, title, subtitle }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <Button href={APP} variant="contained" color="primary">
        Go to the app
      </Button>
    </div>
  </div>
));

export const Loading = withStyles(style)(({ classes }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <CircularProgress />
    </div>
  </div>
));
