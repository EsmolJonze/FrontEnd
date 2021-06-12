import React from 'react';
import { CheckItem, MultiSelect } from '@bloobirds-it/bloobirds-platform-component-library';

const wrapValues = value => {
  if (value === undefined || value === null) {
    return [];
  }
  if (!Array.isArray(value)) {
    return [value];
  }
  return value;
};

const USER_GLOBAL_PICKLIST = [
  'COMPANY__ASSIGNED_TO',
  'ACTIVITY__ASSIGNED_TO',
  'LEAD__ASSIGNED_TO',
  'TASK__ASSIGNED_TO',
];

export const MultiSelectInput = props => {
  const { field, value, onChange } = props;
  const values = wrapValues(value);
  return (
    <MultiSelect
      width="100%"
      value={values}
      dataTest={`menu-category-${field.label}`}
      onChange={onChange}
      placeholder={field.label}
      size="medium"
    >
      <CheckItem dataTest={'menu-item-empty'} value={'__MATCH_EMPTY_ROWS__'}>
        Empty
      </CheckItem>
      {USER_GLOBAL_PICKLIST.includes(field.logicRole) && (
        <CheckItem dataTest="menu-item-me" value={'__me__'}>
          Me
        </CheckItem>
      )}
      {field.fieldValues.map(option => (
        <CheckItem
          value={option.value}
          dataTest={`menu-item-${option.label}`}
          key={`menu-item-${option.value}`}
        >
          {option.label}
        </CheckItem>
      ))}
    </MultiSelect>
  );
};
