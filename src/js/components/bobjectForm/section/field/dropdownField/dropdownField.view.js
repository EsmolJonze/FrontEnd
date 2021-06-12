import React from 'react';
import { Item, Select } from '@bloobirds-it/bloobirds-platform-component-library';
import BaseField from '../baseField';
import usePicklistFormField from '../../../../../hooks/usePicklistFormField';

const DropdownField = ({ fieldValues, ...props }) => {
  const name = props.logicRole || props.name;
  const { options } = usePicklistFormField({ fieldValues, name });

  if (props.hideActivityType && props.logicRole === 'ACTIVITY__TYPE') {
    return null;
  }

  return (
    <BaseField
      {...props}
      as={rest => (
        <Select autocomplete={options.length > 6} size="medium" {...rest}>
          {!props.required && (
            <Item value="">
              <em>None</em>
            </Item>
          )}
          {options.map(({ value, logicRole, label }) => (
            <Item key={value} dataTest={logicRole || label} value={value} label={label}>
              {label}
            </Item>
          ))}
        </Select>
      )}
    />
  );
};

export default DropdownField;
