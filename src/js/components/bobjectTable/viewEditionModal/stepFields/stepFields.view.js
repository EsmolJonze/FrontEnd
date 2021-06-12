import React, { Fragment, useCallback, useEffect, useState } from 'react';
import {
  Button,
  Collapsible,
  IconButton,
  Text,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { SearchColumns, SearchFilters } from '../../../../../assets/svg';
import { isFiltersModal } from '../viewEdition.selector';
import { useViewEditionContext } from '../viewEdition.context';
import SearchBar from '../../../searchBar';
import styles from './stepFields.module.css';
import { getToggleElementCallback } from '../../context/bobjectTable.utils';
import { useBobjectFields } from '../../../../hooks/useBobjectFields';
import { isEmpty } from 'lodash';

const StepFields = React.memo(({ goToStep, bobjectType, fromBobjectType }) => {
  const {
    elements,
    handleOnChangeElement,
    modalType,
    renderFieldsStepList,
    shouldShowField,
  } = useViewEditionContext();
  const fieldSections = useBobjectFields(bobjectType);
  const indexedSections = fieldSections?.sections
    ? fieldSections?.sections?.map(({ fields, ...rest }) => ({
        ...rest,
        fields: fields.filter(field => (shouldShowField ? shouldShowField(field) : field.indexed)),
      }))
    : [];
  const entityTitle =
    bobjectType && fromBobjectType ? `${bobjectType} from ${fromBobjectType}` : bobjectType;
  const [searchElements, setSearchElements] = useState();
  const isFilters = isFiltersModal(modalType);
  const [selectedElements, setSelectedElements] = useState(elements);
  const searchElementsFields = searchElements?.sections?.filter(
    section => section.fields.length > 0,
  );
  const hasSearchElementsFields = searchElementsFields?.length > 0;

  useEffect(() => {
    if (fieldSections && !isEmpty(fieldSections)) {
      if (isFilters) {
        setSearchElements({
          sections: indexedSections,
        });
      } else {
        setSearchElements(fieldSections);
      }
    }
  }, [fieldSections]);

  const goBack = () => {
    goToStep('categories');
  };

  const handleAcceptElements = () => {
    handleOnChangeElement(selectedElements);
    goToStep('categories');
  };

  const toggleElement = getToggleElementCallback(selectedElements, setSelectedElements);

  const onChangeFilter = useCallback((field, value) => {
    const elementsToSet = { ...selectedElements, [field.name]: value };
    if (!value || value.length === 0) {
      delete elementsToSet[field.name];
    }
    setSelectedElements(elementsToSet);
  }, [selectedElements, setSelectedElements]);

  return (
    <Fragment>
      <div className={styles._content}>
        <div className={styles._back_button}>
          <IconButton name="arrowLeft" onClick={goBack}>
            <span className={styles._back_button_text}>Back</span>
          </IconButton>
        </div>
        <div className={styles._search_input}>
          <SearchBar
            handleChange={value => {
              const filteredSections = fieldSections.sections.map(section => ({
                ...section,
                fields: section.fields.filter(field => {
                  const fieldLabel = field.label.toLowerCase();
                  const searchValue = value.toLowerCase();

                  const doesMatchSearch = fieldLabel.match(searchValue);
                  const shouldShow = shouldShowField ? shouldShowField(field) : true;

                  return doesMatchSearch && shouldShow;
                }),
              }));
              setSearchElements({ sections: filteredSections });
            }}
            placeholder={`Find a ${modalType}`}
          />
        </div>
        <div className={styles._subtitle}>
          <Text htmlTag="h4" size="m">
            {entityTitle} fields
          </Text>
        </div>
        <div className={styles._field_sections_wrapper}>
          {searchElements && hasSearchElementsFields ? (
            searchElements?.sections?.map((fieldSection, i) => {
              const sectionFieldCount = isFilters
                ? fieldSection.fields.filter(field => field.type !== 'Number').length
                : fieldSection.fields.length;

              return (
                fieldSection.fields.length > 0 && (
                  <Collapsible
                    title={`${fieldSection.title} [${sectionFieldCount}]`}
                    expanded={i === 0}
                    key={`collapsible-${fieldSection.title}`}
                    dataTest={fieldSection.title}
                  >
                    {renderFieldsStepList(
                      selectedElements,
                      fieldSection.fields,
                      modalType === 'filter' ? onChangeFilter : toggleElement,
                      styles,
                    )}
                  </Collapsible>
                )
              );
            })
          ) : (
            <div className={styles._list_item_empty}>
              {isFilters ? (
                <SearchFilters className={styles._list_item_empty_icon} />
              ) : (
                <SearchColumns className={styles._list_item_empty_icon} />
              )}
              <div className={styles._list_item_empty_text}>
                <Text color="softPeanut" size="s">
                  {isFilters ? 'No filters found' : 'No columns found'}
                </Text>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles._footer}>
        <div className={styles._button_wrapper}>
          <Button uppercase onClick={handleAcceptElements}>
            Accept
          </Button>
        </div>
      </div>
    </Fragment>
  );
});

export default StepFields;
