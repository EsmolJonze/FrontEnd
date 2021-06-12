import React, { useEffect, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const BaseField = ({
  as,
  logicRole,
  validate,
  required,
  requiredBeforeMeeting,
  numberPrefix,
  name,
  width,
  label,
  fieldConditions,
  defaultPicklistValue,
  defaultValue,
  bobjectType,
}) => {
  const { control, errors, watch, setValue, getValues } = useFormContext();

  if (fieldConditions.length > 0) {
    const relatedFields = fieldConditions.map(({ field }) => field.logicRole || field.name);
    const relatedValues = Object.values(watch(relatedFields));
    const requiredValues = fieldConditions.map(({ fieldValue }) => fieldValue.value);

    const hasRelatedFields = relatedFields.length > 0;
    const satisfiesFieldCondition = requiredValues.some(value => relatedValues.includes(value));

    if (hasRelatedFields && !satisfiesFieldCondition) {
      return null;
    }
  }

  const fieldName = logicRole || name;

  useEffect(() => {
    const currentValue = getValues(fieldName);
    if (!currentValue && (defaultPicklistValue || defaultValue)) {
      setValue(fieldName, defaultPicklistValue || defaultValue);
    }
  }, [defaultPicklistValue, defaultValue]);

  const ref = useRef();

  const controlName =
    fieldName +
    (requiredBeforeMeeting && bobjectType ? `_FROM_${bobjectType?.toUpperCase()}` : null);

  // Scroll to error
  const errorMessage =
    errors[requiredBeforeMeeting && bobjectType ? controlName : fieldName]?.message;
  const firstError = Object.keys(errors)[0];
  useEffect(() => {
    if (errorMessage && firstError === fieldName) {
      ref.current.scrollIntoView({ behaviour: 'smooth', block: 'center' });
    }
  }, [errorMessage]);

  return (
    <div
      ref={ref}
      // eslint-disable-next-line no-nested-ternary
      style={{ width: !width ? '50%' : width === '100%' ? '100%' : `calc(${width} - 8px)` }}
    >
      <Controller
        name={requiredBeforeMeeting && bobjectType ? controlName : fieldName}
        control={control}
        dataTest={logicRole || label}
        as={as}
        error={errorMessage}
        width="100%"
        adornment={numberPrefix}
        placeholder={`${label}${required || requiredBeforeMeeting ? ' *' : ''}`}
        rules={{
          required: (required || requiredBeforeMeeting) && 'This field is required',
          validate: value => {
            if (validate && (required || value)) {
              return validate(value);
            }
            return true;
          },
        }}
      />
    </div>
  );
};

export default BaseField;
