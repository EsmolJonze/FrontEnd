import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

const usePicklistFormField = ({ fieldValues, name }) => {
  const { watch, setValue } = useFormContext();

  const hasFieldConditions = fieldValues?.some(fieldValue => fieldValue.conditions.length > 0);
  const options = !fieldValues
    ? []
    : fieldValues.filter(fieldValue => {
        if (fieldValue.conditions.length > 0) {
          return fieldValue.conditions.some(
            ({ requiredFieldId, requiredFieldLogicRole, requiredValueId }) =>
              watch(requiredFieldLogicRole || requiredFieldId) === requiredValueId,
          );
        }
        if (fieldValue.logicRole === 'ACTIVITY__TYPE__CADENCE') {
          return false;
        }
        return true;
      });

  // If only 1 field conditions is meet the dropdown should select it by default
  useEffect(() => {
    if (hasFieldConditions && options.length === 1) {
      setValue(name, options[0].value);
    }
  }, [options[0]?.value]);

  return {
    options,
  };
};

export default usePicklistFormField;
