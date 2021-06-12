import React, { useEffect, useState } from 'react';
import { Button, TextField, withStyles } from '@material-ui/core';
import { JwtApi } from '../../misc/api/jwt';
import { parse } from 'query-string';
import { sha512 } from 'js-sha512';
import { Failure, Loading, Success, style } from './common';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

const isReady = (pass1, pass2) =>
  pass1 !== null && pass1 !== undefined && pass1 !== '' && pass1 === pass2;
const Requesting = withStyles(style)(({ classes, onSubmit }) => {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const ready = isReady(password, repeatPassword);
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h2>Now you can reset the password</h2>
        <TextField
          id="password"
          label="New Password"
          type="password"
          name="password"
          margin="normal"
          variant="outlined"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <TextField
          id="repeatPassword"
          label="Repeat New Password"
          type="password"
          name="repeatPassword"
          margin="normal"
          variant="outlined"
          value={repeatPassword}
          onChange={e => setRepeatPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          disabled={!ready}
          onClick={() => {
            if (ready) {
              if (onSubmit) {
                onSubmit(password);
              }
            }
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
});

export const ResetPassword = () => {
  useDocumentTitle('Reset Password');
  const [state, setState] = useState('init');
  const [password, setPassword] = useState('');
  useEffect(() => {
    if (state === 'Prepared') {
      setState('Requesting');
      JwtApi.service.externalAction
        .recoverPassword({
          token: parse(window.location.search).token,
          hashedPassword: sha512(password),
        })
        .then(() => setState('Success'))
        .catch(() => setState('Failure'));
    }
  }, [state, password]);
  if (state === 'Success') {
    return (
      <Success
        title="Your password has been changed"
        subtitle="Now you can login again with your new password"
      />
    );
  }
  if (state === 'Failure') {
    return <Failure onAction={() => setState('init')} />;
  }
  if (state === 'init') {
    return (
      <Requesting
        onSubmit={newPassword => {
          setPassword(newPassword);
          setState('Prepared');
        }}
      />
    );
  }
  return <Loading />;
};
