import React from 'react';
import { DateTimePicker } from '@bloobirds-it/bloobirds-platform-component-library';
import BaseField from '../baseField';

const DateField = props => (
  <BaseField
    {...props}
    as={<DateTimePicker openDefaultValue={new Date()} withTimePicker={false} />}
  />
);

export default DateField;
