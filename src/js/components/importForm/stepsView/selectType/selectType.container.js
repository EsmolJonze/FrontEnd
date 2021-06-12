import React from 'react';
import SelectTypeView from './selectType.view';
import { useEntity } from '../../../../hooks/entities/useEntity';
import { useUserSettings } from '../../../userPermissions/hooks';

const transformResponse = data => {
  const importableBobjectTypes = {
    Company: 0,
    Lead: 1,
    Activity: 2,
    Opportunity: 3,
  };

  return data
    ?.reduce((prev, curr) => [...prev, { id: curr.id, name: curr.name }], [])
    .filter(o => Object.keys(importableBobjectTypes).includes(o.name))
    .sort((a, b) => (importableBobjectTypes[a.name] > importableBobjectTypes[b.name] ? 1 : -1));
};

const SelectTypeContainer = () => {
  const settings = useUserSettings();
  const bobjectTypes = useEntity('bobjectTypes')?.all();

  return (
    <SelectTypeView
      bobjectTypes={transformResponse(
        bobjectTypes?.filter(type =>
          !settings?.account?.features.salesFeature ? !type.name.includes('Opportunity') : true,
        ),
      )}
    />
  );
};

export default SelectTypeContainer;
