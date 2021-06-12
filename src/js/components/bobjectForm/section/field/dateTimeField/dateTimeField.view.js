import React from 'react';
import { DateTimePicker } from '@bloobirds-it/bloobirds-platform-component-library';
import BaseField from '../baseField';

const DateTimeField = props => (
  <BaseField {...props} as={<DateTimePicker openDefaultValue={new Date()} />} />
);

export default DateTimeField;
