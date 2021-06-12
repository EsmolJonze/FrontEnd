import React, { useEffect, useState } from 'react';
import { JwtApi } from '../../misc/api/jwt';
import { parse } from 'query-string';
import { Expired, Validated, Validating } from './common';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

export const ValidateEmail = () => {
  const [state, setState] = useState('init');
  useDocumentTitle('Validate Email');
  useEffect(() => {
    if (state === 'init') {
      setState('requested');
      JwtApi.service.externalAction
        .validateEmail({ token: parse(window.location.search).token })
        .then(() => setState('validated'))
        .catch(() => setState('expired'));
    }
  }, [state]);
  if (state === 'validated') {
    return <Validated title="Your email has been verified" buttonText="Go back to the app" />;
  }
  if (state === 'expired') {
    return <Expired />;
  }
  return <Validating />;
};
