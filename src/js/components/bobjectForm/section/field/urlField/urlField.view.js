import React from 'react';
import { Input } from '@bloobirds-it/bloobirds-platform-component-library';
import { isUrl } from '../../../../../misc/utils';
import BaseField from '../baseField/baseField.view';

const UrlField = props => (
  <BaseField
    {...props}
    as={<Input />}
    validate={value => {
      if (!isUrl(value)) {
        return 'The url format is not valid';
      }
      return true;
    }}
  />
);

export default UrlField;
