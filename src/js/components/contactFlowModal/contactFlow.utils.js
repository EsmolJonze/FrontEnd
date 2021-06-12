import { CALL_RESULTS_LOGIC_ROLE } from '../../constants/activity';

export const filterCallResults = callResultsPicklistValues =>
  callResultsPicklistValues
    .filter(picklistValue => picklistValue.enabled)
    ?.map(callResult => ({
      fieldId: callResult.id,
      value: callResult.value,
      logicRole: callResult.logicRole,
      isCorrectContact: callResult.logicRole === CALL_RESULTS_LOGIC_ROLE.CORRECT_CONTACT,
    }))
    .sort((a, b) => {
      const exceptions = ['Other'];
      const indexA = exceptions.indexOf(a.value);
      const indexB = exceptions.indexOf(b.value);

      if (indexA === -1 && indexB === -1) {
        return a.value > b.value ? 1 : -1; // regular case
      }
      return indexA - indexB;
    });
