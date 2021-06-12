import React, { useState } from 'react';
import {
  Button,
  Icon,
  Item,
  Text,
  useToasts,
} from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './tabLayout.module.css';
import SegmentationSelect from '../segmentationSelect';
import { useSegmentation } from '../../../../hooks';
import { getBobjectTypeByStage } from '../../../../utils/bobjects.utils';
import { numberToOrdinalString } from '../../../../utils/strings.utils';
import { useSegmentationValues } from '../../../../hooks/useSegmentationValues';
import SaveModal from '../saveModal';
import { useForm, Controller } from 'react-hook-form';
import { keyBy, mapValues } from 'lodash';

const TabContent = ({ stage }) => {
  const { segmentations, updateSegmentations } = useSegmentation(stage);
  const { createToast } = useToasts();
  const [openModal, setOpenModal] = useState(false);
  const bobjectType = getBobjectTypeByStage(stage);
  const possibleCriteria = useSegmentationValues(bobjectType);

  const defaultValues = mapValues(keyBy(segmentations, 'id'), 'bobjectFieldId');

  const { handleSubmit, control, formState, reset, watch } = useForm({ defaultValues });

  const selectedSegmentations = watch();

  const saveAll = async data => {
    try {
      if (!openModal) {
        const shouldOpenModal = Object.entries(defaultValues).some(([segmentationId, oldValue]) => {
          const newValue = data[segmentationId];
          const hasChanged = oldValue !== newValue;
          const isCreated = !oldValue && newValue;
          return hasChanged && !isCreated;
        });

        if (shouldOpenModal) {
          setOpenModal(true);
          return;
        }
      }

      await updateSegmentations(data);
      setOpenModal(false);
      createToast({ type: 'success', message: 'New segmentation settings saved' });
      // Reset only dirty fields
      reset(data, {
        dirtyFields: false,
        dirty: false,
        errors: true,
        isSubmitted: true,
        touched: true,
        isValid: true,
        submitCount: true,
      });
    } catch (e) {
      createToast({ type: 'error', message: 'Something went wrong' });
    }
  };

  return (
    <form onSubmit={handleSubmit(saveAll)} className={styles._wrapper}>
      <div className={styles._subtitle}>
        <Icon name="filter" />
        <Text htmlTag="h4" size="l" color="peanut">
          Segmentation criteria
        </Text>
      </div>
      <div className={styles._content}>
        <div className={styles._description}>
          <Text size="m" weight="bold">
            Select the segmentation criteria for your playbook content
          </Text>
          <Text size="s" color="softPeanut">
            The segmentation defined here will be the one you can apply when creating a template or
            qualifying question and will define the filters available in the messaging section of
            the {bobjectType.toLowerCase()}.
          </Text>
        </div>
        {segmentations.map(segmentation => {
          const { ordering, id } = segmentation;
          const isProspect = stage === 'PROSPECT';
          const disabled = isProspect && ordering < 3;
          const required = disabled || ordering === 0;
          const title = `${numberToOrdinalString(ordering + 1)} criteria${required ? '*' : ''}`;

          return (
            <Controller
              name={id}
              key={id}
              control={control}
              as={
                <SegmentationSelect title={title} disabled={disabled}>
                  {!required && selectedSegmentations[id] && (
                    <Item value="">
                      <em>None</em>
                    </Item>
                  )}
                  {possibleCriteria.map(field => {
                    const isCriteriaAlreadySelected = Object.values(selectedSegmentations).includes(
                      field.id,
                    );

                    return (
                      <Item key={field.id} value={field.id} hidden={isCriteriaAlreadySelected}>
                        {field.name}
                      </Item>
                    );
                  })}
                </SegmentationSelect>
              }
            />
          );
        })}
      </div>
      <Button disabled={!formState.dirty || formState.isSubmitting} type="submit">
        Save
      </Button>
      <SaveModal
        open={openModal}
        onSave={handleSubmit(saveAll)}
        onClose={() => setOpenModal(false)}
      />
    </form>
  );
};

const TabLayout = ({ stage }) => {
  const { isLoading } = useSegmentation(stage);

  if (isLoading) {
    return null;
  }

  return <TabContent stage={stage} />;
};

export default TabLayout;
