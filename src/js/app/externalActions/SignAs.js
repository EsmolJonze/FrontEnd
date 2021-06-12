import React, { useEffect, useState } from 'react';
import { JwtApi } from '../../misc/api/jwt';
import { parse } from 'query-string';
import SessionManagerFactory from '../../misc/session';
import { Expired, Validated, Validating } from './common';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

export const SignAs = () => {
  useDocumentTitle('Sign As');
  const [state, setState] = useState('init');
  const [jwtToken, setJwtToken] = useState('');
  useEffect(() => {
    if (state === 'init') {
      setState('requested');
      JwtApi.service.externalAction
        .signAs({ token: parse(window.location.search).token })
        .then(response => {
          setState('validated');
          setJwtToken(response.token);
        })
        .catch(() => setState('expired'));
    }
  }, [state, jwtToken]);
  if (state === 'validated') {
    return (
      <Validated
        title="Proceed to sign in?"
        buttonText="Sign in"
        onAction={() => SessionManagerFactory().setToken(jwtToken)}
      />
    );
  }
  if (state === 'expired') {
    return <Expired />;
  }
  return <Validating />;
};
