import { withStyles } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Form from './Form';
import { cssVariables } from '../../style/variables';
import { connect } from 'react-redux';
import classNames from 'clsx';

const style = {
  textField: {
    flexBasis: 200,
  },
  container: {
    display: 'grid',
    height: '100%',
    gridTemplateRows: '12.5% 12.5% 0px 50% auto',
    width: '100%',
  },
  withErrors: {
    gridTemplateRows: '12.5% 12.5% 42px 50% auto',
  },
  title: {
    gridRow: '2',
    margin: '0',
    justifySelf: 'center',
    alignSelf: 'center',
  },
  errorMessage: {
    gridRow: '3',
    margin: '0',
    width: '330px',
    color: cssVariables.color.tomato.natural,
    size: '15px',
    justifySelf: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
};

const Title = ({ className }) => <h2 className={className}>Signing into Bloobirds</h2>;

const Login = ({ classes, hadError }) => {
  const containerClass = classNames(classes.container, { [classes.withErrors]: hadError });
  return (
    <Grid item container xs={6} alignItems={'center'}>
      <div className={containerClass}>
        <Title className={classes.title} />
        {hadError && (
          <div className={classes.errorMessage} data-test="loginErrorMessage">
            Your login attempt has failed. Make sure the username and password are correct.
          </div>
        )}
        <Form />
      </div>
    </Grid>
  );
};

const mapStateToProps = state => ({
  hadError: state.login.hadError,
});

export default connect(mapStateToProps)(withStyles(style)(Login));
