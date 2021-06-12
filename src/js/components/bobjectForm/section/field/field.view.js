import React from 'react';
import DateField from './dateField';
import ChipField from './chipField';
import DropdownField from './dropdownField';
import TextField from './textField';
import DateTimeField from './dateTimeField';
import MultilineField from './multilineField';
import PhoneField from './phoneField';
import EmailField from './emailField';
import UrlField from './urlField';
import NumberField from './numberField';
import DecimalField from './decimalField';

// TODO: Memoize into a single function by field id
const isPickList = field => field.type === 'Picklist' || field.type === 'Global Picklist';
const isChip = field => isPickList(field) && field.picklistType === 'CHIP';
const isReference = field => field.type === 'Reference' && field.referencedBobjectType;
const isDatetime = field => field.type === 'DateTime';
const isPhoneNumber = field => field.type === 'Phone';
const isDate = field => field.type === 'Date';
const isEmail = field => field.type === 'Email';
const isUrl = field => field.type === 'URL';
const isNumber = field => field.type === 'Number';
const isDecimal = field => field.type === 'Decimal';
const isMultiLine = field => field.multiline;

const Field = props => {
  if (isDatetime(props)) {
    return <DateTimeField {...props} />;
  }

  if (isDate(props)) {
    return <DateField {...props} />;
  }

  if (isReference(props) || isPickList(props)) {
    if (isChip(props)) {
      return <ChipField {...props} />;
    }
    return <DropdownField {...props} />;
  }

  if (isPhoneNumber(props)) {
    return <PhoneField {...props} />;
  }

  if (isEmail(props)) {
    return <EmailField {...props} />;
  }

  if (isUrl(props)) {
    return <UrlField {...props} />;
  }

  if (isDecimal(props)) {
    return <DecimalField {...props} />;
  }

  if (isNumber(props)) {
    return <NumberField {...props} />;
  }

  if (isMultiLine(props)) {
    return <MultilineField {...props} />;
  }

  return <TextField {...props} />;
};
export default Field;
