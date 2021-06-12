import React from 'react';
import { Input } from '@bloobirds-it/bloobirds-platform-component-library';
import BaseField from '../baseField';

const BaseDecimalField = ({ value, onChange, ...props }) => {
  const match = value?.match(/\d+(\.\d{0,24})?/g, '');
  const number = match ? match[0] : '';
  return <Input value={number} onChange={onChange} {...props} />;
};

const DecimalField = props => <BaseField {...props} as={<BaseDecimalField />} />;

export default DecimalField;
