import React from 'react';
import { Input, countries, Flag } from '@bloobirds-it/bloobirds-platform-component-library';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import BaseField from '../baseField/baseField.view';

const BasePhoneField = ({ value, onChange, ...props }) => {
  const phone = value?.replace(/([a-zA-Z ])/g, '');
  const country = countries.find(x => value?.startsWith(`+${x.phone}`));
  return (
    <Input
      {...props}
      value={phone}
      onChange={onChange}
      adornment={country && <Flag code={country.code} />}
    />
  );
};

const PhoneField = props => (
  <BaseField
    {...props}
    as={<BasePhoneField />}
    validate={value => {
      const phoneNumberObject = parsePhoneNumberFromString(value);

      if (!phoneNumberObject?.isValid()) {
        return 'The phone number is not valid.';
      }

      return true;
    }}
  />
);

export default PhoneField;
