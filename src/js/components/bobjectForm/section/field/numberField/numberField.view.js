import React from 'react';
import { Input } from '@bloobirds-it/bloobirds-platform-component-library';
import BaseField from '../baseField';

const BaseNumberField = ({ value, onChange, ...props }) => {
  let number = value?.replace(/[^$0-9-,]/g, '');
  number = number?.replace(/(?!^)-/g, '');
  return <Input value={number} onChange={onChange} {...props} />;
};

const NumberField = props => <BaseField {...props} as={<BaseNumberField />} />;

export default NumberField;
