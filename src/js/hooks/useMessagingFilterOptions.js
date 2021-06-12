import { useSegmentation } from './useSegmentation';
import { useEntity } from './entities/useEntity';
import { sortBy } from 'lodash';

export const useMessagingFilterOptions = stage => {
  const { segmentations } = useSegmentation(stage);
  const bobjectFields = useEntity('bobjectFields');
  const bobjectPicklistFieldValues = useEntity('bobjectPicklistFieldValues');

  if (!bobjectFields || !bobjectPicklistFieldValues || segmentations.length === 0) {
    return [];
  }

  const bobjectFieldIds = Object.values(segmentations)
    .filter(value => value.bobjectFieldId)
    .map(key => key.bobjectFieldId);

  return bobjectFieldIds?.map(bobjectFieldsId => {
    const bobjectField = bobjectFields.findBy('id', bobjectFieldsId);
    const globalPicklist = bobjectField?.bobjectGlobalPicklist;

    const picklistValues = globalPicklist
      ? bobjectPicklistFieldValues.filterBy('bobjectGlobalPicklist', globalPicklist)
      : bobjectPicklistFieldValues.filterBy('bobjectField', bobjectFieldsId);

    const values = picklistValues.map(picklistValue => ({
      id: picklistValue.id,
      name: picklistValue.value,
    }));

    return {
      id: bobjectFieldsId,
      label: bobjectField?.name,
      values: sortBy(values, 'name'),
    };
  });
};
