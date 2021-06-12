import React from 'react';
import { Input } from '@bloobirds-it/bloobirds-platform-component-library';
import { isEmail } from '../../../../../misc/utils';
import BaseField from '../baseField/baseField.view';

const EmailField = props => (
  <BaseField
    {...props}
    as={<Input />}
    validate={value => {
      if (!isEmail(value)) {
        return 'The email format is not valid';
      }
      return true;
    }}
  />
);

export default EmailField;
