import React, { Fragment, useCallback } from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';
import { Button, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { NoFiltersSvg } from '../../../../../assets/svg';
import { useViewEditionContext } from '../viewEdition.context';
import { isFiltersModal } from '../viewEdition.selector';
import styles from './stepCategories.module.css';
import text from './texts.json';
import { useEntity } from '../../../../hooks/entities/useEntity';
import { useBobjectFields } from '../../../../hooks/useBobjectFields';

const isTableViewItemField = field => field?.logicRole === 'ACTIVITY__TABLE_VIEW_ITEM';

const StepCategories = ({ goToStep, handleCloseModal }) => {
  const {
    elements,
    handleRemoveElement,
    modalType,
    moveColumn,
    renderCategoriesStepList,
    setElements,
    bobjectTypeList,
    showRelationships,
  } = useViewEditionContext();

  const fieldSectionsByBobjectType = Object.fromEntries(
    bobjectTypeList.map(bobjectType => [
      bobjectType,
      useBobjectFields(bobjectType)?.sections || [],
    ]),
  );

  const bobjectTypes = useEntity('bobjectTypes');
  const isFilters = isFiltersModal(modalType);

  const picklistFieldValues = useEntity('bobjectPicklistFieldValues');
  const fieldTypes = useEntity('fieldTypes');
  const fields = useEntity('bobjectFields');

  const currentBobjectTypes = bobjectTypes?.all().filter(bob => bobjectTypeList.includes(bob.name));

  const relationships = bobjectTypeList.flatMap(bobjectType => {
    const fieldSections = fieldSectionsByBobjectType[bobjectType];

    return fieldSections
      .flatMap(section => section.fields)
      .filter(field => field.type === 'Reference')
      .map(relationship => ({ fromBobjectType: bobjectType, relationship }));
  });

  const fieldElements =
    elements && Object.entries(elements).map(([fieldId]) => fields?.get(fieldId));
  const fieldElementsFiltered = fieldElements?.filter(
    fieldElement => !isTableViewItemField(fieldElement),
  );

  const hasElements = fieldElementsFiltered && fieldElementsFiltered.length > 0;

  const handleConfirmElements = useCallback(() => {
    setElements(elements, true);
    handleCloseModal();
  }, [handleCloseModal, setElements, elements]);

  let renderProps = {
    bobjectTypes,
    currentBobjectTypes,
    elements,
    fields,
    handleRemoveElement,
    moveColumn,
    styles,
  };

  if (isFilters) {
    renderProps = { ...renderProps, picklistFieldValues, fieldTypes };
  }

  const renderCategoriesList = relationshipsArray => {
    if (!relationshipsArray) {
      return [
        <Skeleton height={48} className={styles._categories_skeleton} key="skeleton-1" />,
        <Skeleton height={48} className={styles._categories_skeleton} key="skeleton-2" />,
        <Skeleton height={48} className={styles._categories_skeleton} key="skeleton-3" />,
      ];
    }

    const items = bobjectTypeList.map(bobjectType => (
      <li className={styles._categories_list_item} key={`item-${bobjectType}`}>
        <Button
          dataTest={`category${bobjectType}`}
          onClick={() => goToStep('fields', bobjectType)}
          variant="alternative"
          iconLeft="add"
          textAlign="left"
          expand
        >
          {bobjectType}
        </Button>
      </li>
    ));

    if (showRelationships) {
      items.push(
        relationshipsArray.map(({ relationship, fromBobjectType }) => (
          <li className={styles._categories_list_item} key={`relationship-${relationship.label}`}>
            <Button
              onClick={() =>
                goToStep('fields', relationship.referencedBobjectType, fromBobjectType)
              }
              variant="alternative"
              iconLeft="add"
              textAlign="left"
              expand
            >
              {relationship.label} from {fromBobjectType}
            </Button>
          </li>
        )),
      );
    }

    return items;
  };

  return (
    <Fragment>
      <div className={styles._content}>
        <div className={styles._title}>
          <Text htmlTag="h3">{text[modalType].title}</Text>
        </div>
        <div className={styles._description}>
          <Text size="s" color="softPeanut">
            {text[modalType].description}
          </Text>
        </div>
        <div className={styles._subtitle}>
          <Text htmlTag="h4" size="m">
            {text[modalType].section1.title}
          </Text>
        </div>
        <ul className={styles._categories_list}>{renderCategoriesList(relationships)}</ul>
        <div className={styles._subtitle}>
          <Text htmlTag="h4" size="m">
            {text[modalType].section2.title}
          </Text>
        </div>
        {text[modalType].section2.description && (
          <div className={styles._description}>
            <Text size="s" color="softPeanut">
              {text[modalType].section2.description}
            </Text>
          </div>
        )}
        {hasElements ? (
          <div className={styles._fields_list}>{renderCategoriesStepList(renderProps)}</div>
        ) : (
          <div className={styles._fields_list_empty}>
            <NoFiltersSvg className={styles._fields_list_empty_icon} />
            <div className={styles._fields_list_empty_text}>
              <Text color="softPeanut" size="s">
                No filters added
              </Text>
            </div>
          </div>
        )}
      </div>
      <div className={styles._footer}>
        <div className={styles._button_wrapper}>
          <Button uppercase variant="secondary" onClick={handleCloseModal} expand>
            Cancel
          </Button>
          <Button uppercase expand onClick={handleConfirmElements}>
            Confirm
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

StepCategories.propTypes = {
  goToStep: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default StepCategories;
