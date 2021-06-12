import { Checkbox, FormControlLabel, InputAdornment, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { connect } from 'react-redux';
import FormButton from '../../components/FormButton';
import { redirect } from '../../actions';
import {
  LOGIN_LOG_IN_SUCCESS,
  LOGIN_LOG_VALIDATE_ERROR,
  LOGIN_SUBMIT_DATA_START,
} from '../../actions/dictionary';
import { cssVariables } from '../../style/variables';
import { Link } from 'react-router-dom';
import { EXTERNAL_ACTION_REQUEST_RESET_PASSWORD, TERMS_AND_CONDITIONS } from '../_constants/routes';
import SessionManagerFactory from '../../misc/session';
import { JwtApi } from '../../misc/api/jwt';
import { Icon } from '@bloobirds-it/bloobirds-platform-component-library';

const requiredMsg = 'This field is required';
const style = {
  form: {
    gridRow: '4',
    display: 'flex',
    flexDirection: 'column',
    width: '330px',
    justifySelf: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    maxHeight: '350px',
    height: '100%',
  },
  input: {
    color: cssVariables.color.white.natural,
  },
  button: {
    margin: '26px 0 0 0',
  },
  checkboxContainer: {
    marginLeft: 6,
  },
  link: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: cssVariables.color.bloobirds.natural,
    fontSize: 14,
    lineHeight: 1.14,
    letterSpacing: '0.8px',
    margin: '26px 0',
  },
  terms: {
    color: cssVariables.color.gunmetal.natural,
    fontSize: 14,
    '& a': {
      textDecoration: 'none',
      color: cssVariables.color.bloobirds.natural,
    },
  },
};

const SessionManager = SessionManagerFactory();

const useLoginCallback = (dispatch, email, password) =>
  React.useCallback(() => {
    dispatch({ type: LOGIN_SUBMIT_DATA_START });
    JwtApi.service
      .login(email, password)
      .then(response => {
        /* if response is not 200, then it has not been authorised */
        if (response.token) {
          return response;
        }
        return dispatch({ type: LOGIN_LOG_VALIDATE_ERROR });
      })
      .then(data => {
        SessionManager.setRootToken(data.token);
        const roleManager = SessionManager.getRoleManager();
        const success =
          roleManager.isGlobalAdmin() ||
          roleManager.isAccountAdmin() ||
          roleManager.isAccountUser();
        if (success) {
          dispatch({ type: LOGIN_LOG_IN_SUCCESS });
        }
      })
      .catch(() => {
        dispatch({ type: LOGIN_LOG_VALIDATE_ERROR });
      });
  }, [dispatch, email, password]);
const Form = withStyles(style)(props => {
  const { classes, validated, dispatch } = { ...props };
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tosAcceptance, setTosAcceptance] = useState(false);
  const errorValidatedPassword = !password && validated;
  const errorValidatedEmail = !email && validated;
  const iconColor = errorValidatedPassword ? 'tomato' : 'softPeanut';
  const allowedLogin = email && password && tosAcceptance;
  const loginCallback = useLoginCallback(dispatch, email, password);
  const handleSubmit = evt => {
    evt.preventDefault();
    if (!allowedLogin) {
      return;
    }
    loginCallback();
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        helperText={errorValidatedEmail ? requiredMsg : ''}
        error={errorValidatedEmail}
        id="email"
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
        value={email}
        onChange={e => setEmail(e.target.value)}
        data-test="Text-loginEmail"
      />
      <TextField
        helperText={errorValidatedPassword ? requiredMsg : ''}
        error={errorValidatedPassword}
        id="password"
        data-test="Text-loginPassword"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
        value={password}
        onChange={e => setPassword(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <div
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={event => {
                  event.preventDefault();
                }}
              >
                <Icon name={showPassword ? 'eye' : 'eyeOff'} color={iconColor} />
              </div>
            </InputAdornment>
          ),
        }}
      />
      <Link to={EXTERNAL_ACTION_REQUEST_RESET_PASSWORD} className={classes.link}>
        Forgot your password?
      </Link>
      <FormControlLabel
        className={classes.checkboxContainer}
        control={
          <Checkbox
            checked={tosAcceptance}
            onKeyPress={e => {
              e.preventDefault();
              if (e.key === 'Enter') {
                setTosAcceptance(!tosAcceptance);
              }
            }}
            onChange={() => setTosAcceptance(!tosAcceptance)}
            value="true"
            color="primary"
          />
        }
        label={
          <span className={classes.terms}>
            Accept the{' '}
            <a target="_blank" rel="noopener noreferrer" href={TERMS_AND_CONDITIONS}>
              master subscription agreement
            </a>
          </span>
        }
      />
      <FormButton text="Log in" className={classes.button} disabled={!allowedLogin} />
    </form>
  );
});

const CustomForm = Form;

const mapDispatchToProps = dispatch => ({
  redirect: e => dispatch(redirect(e)),
  dispatch,
});

const mapStateToProps = state => ({
  validated: state.login.validated,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomForm);
