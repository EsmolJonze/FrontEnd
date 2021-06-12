import { useEntity } from './entities/useEntity';

export const usePicklistValues = ({ picklistLogicRole }) => {
  const fields = useEntity('bobjectFields');
  const values = useEntity('bobjectPicklistFieldValues');

  if (!fields || !values) {
    return [];
  }

  return values.filterBy('bobjectField', fields.findByLogicRole(picklistLogicRole)?.id);
};
