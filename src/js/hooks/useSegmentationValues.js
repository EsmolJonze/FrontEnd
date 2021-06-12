import { useEntity } from './entities/useEntity';
import { sortBy } from 'lodash';

export const useSegmentationValues = bobjectType => {
  const bobjectFields = useEntity('bobjectFields');
  const bobjectTypes = useEntity('bobjectTypes');
  const fieldType = useEntity('fieldTypes');

  const companyTypeId = bobjectTypes?.findBy('name')(bobjectType)?.id;
  const picklistFieldId = fieldType?.findBy('enumName')('PICKLIST')?.id;
  const globalPicklistFieldId = fieldType?.findBy('enumName')('GLOBAL_PICKLIST')?.id;
  const fields = bobjectFields?.filterBy('bobjectType', companyTypeId) || [];
  if (bobjectType === 'Company') {
    const leadIcp = bobjectFields?.findBy('logicRole')('LEAD__ICP');
    fields.push(leadIcp);
  }
  const options = fields
    .filter(field => field?.enabled)
    .filter(
      field => field?.fieldType === picklistFieldId || field?.fieldType === globalPicklistFieldId,
    );
  return sortBy(options, 'name');
};
