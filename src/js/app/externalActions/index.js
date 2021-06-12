import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import {
  EXTERNAL_ACTION_REQUEST_RESET_PASSWORD,
  EXTERNAL_ACTION_RESET_PASSWORD,
  EXTERNAL_ACTION_SIGN_AS,
  EXTERNAL_ACTION_VALIDATE_EMAIL,
} from '../_constants/routes';
import { ResetPassword } from './ResetPassword';
import { ValidateEmail } from './ValidateEmail';
import { RequestResetPassword } from './RequestResetPassword';
import { SignAs } from './SignAs';

export const ExternalActions = () => (
  <Router>
    <Route path={EXTERNAL_ACTION_RESET_PASSWORD} component={ResetPassword} />
    <Route path={EXTERNAL_ACTION_VALIDATE_EMAIL} component={ValidateEmail} />
    <Route path={EXTERNAL_ACTION_REQUEST_RESET_PASSWORD} component={RequestResetPassword} />
    <Route path={EXTERNAL_ACTION_SIGN_AS} component={SignAs} />
  </Router>
);
