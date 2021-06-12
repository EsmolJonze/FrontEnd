import React from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Login from './Login';
import Aside from './Aside';
import Recovery from './Recovery';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { APP_TASKS } from '../_constants/routes';

const style = {
  login: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
};

const Index = withStyles(style)(({ classes, condition, logged, location }) => {
  if (logged) {
    return <Redirect to={location?.state?.from || APP_TASKS} />;
  }
  return (
    <Grid container spacing={0} direction={'row'} className={classes.login}>
      {condition ? <Recovery /> : <Login />}
      <Aside />
    </Grid>
  );
});

const mapStateToProps = state => ({
  condition: state.login.recovery,
});

export default connect(
  mapStateToProps,
  null,
)(Index);
