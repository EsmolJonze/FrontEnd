import React, { useEffect, useState } from 'react';
import { Button, TextField, withStyles } from '@material-ui/core';
import { JwtApi } from '../../misc/api/jwt';
import { isEmail } from '../../misc/utils';
import { Failure, Loading, Success, style } from './common';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

const Requesting = withStyles(style)(({ classes, onSubmit }) => {
  const [email, setEmail] = useState('');
  const ready = isEmail(email);
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h2>We'll send an email to recover your password</h2>
        <TextField
          id="email"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          disabled={!ready}
          onClick={() => {
            if (ready) {
              if (onSubmit) {
                onSubmit(email);
              }
            }
          }}
        >
          Recover
        </Button>
      </div>
    </div>
  );
});

export const RequestResetPassword = () => {
  useDocumentTitle('Request password change');
  const [state, setState] = useState('init');
  const [email, setEmail] = useState('');
  useEffect(() => {
    if (state === 'Prepared') {
      setState('Requesting');
      JwtApi.service.externalAction
        .requestRecoverPassword({ email })
        .then(() => setState('Success'))
        .catch(() => setState('Failure'));
    }
  }, [state, email]);
  if (state === 'Success') {
    return (
      <Success
        title="Check your inbox"
        subtitle="The email to recover your password should be there"
      />
    );
  }
  if (state === 'Failure') {
    return <Failure onAction={() => setState('init')} />;
  }
  if (state === 'init') {
    return (
      <Requesting
        onSubmit={newEmail => {
          setEmail(newEmail);
          setState('Prepared');
        }}
      />
    );
  }
  return <Loading />;
};
