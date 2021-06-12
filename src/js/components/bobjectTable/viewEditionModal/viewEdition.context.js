import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import classnames from 'clsx';
import {
  Checkbox,
  IconButton,
  Text,
  Input,
  InputPicker,
  InputPickerOption,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { dateArrayToIntervalString, relativeDates } from '../../filter/RelativeDates';
import { MultiSelectInput } from '../../filter/field/multiSelectInput';
import DateFilterComponent from '../../filter/DateFilterComponent';
import {
  changeLogicRolesToIds,
  getShownBobjectFields,
  getToggleElementCallback,
} from '../context/bobjectTable.utils';
import { isFiltersModal, isColumnsModal } from './viewEdition.selector';
import { useEntity } from '../../../hooks/entities/useEntity';
import { asArray } from '../../../misc/utils';

const PICKLIST_FIELD_TYPES = ['Picklist', 'Global Picklist'];
const DATE_FIELD_TYPES = ['Date', 'DateTime'];
const TEXT_FIELD_TYPES = ['URL', 'Phone', 'Email', 'Text'];
const TEXT_FIELD_FILTERS = {
  AUTOCOMPLETE__SEARCH: 'Contains:',
  EXACT__SEARCH: 'Contains exactly:',
  __MATCH_FULL_ROWS__: "It's not empty",
  __MATCH_EMPTY_ROWS__: "It's empty",
};

const isTableViewItemField = field => field.logicRole === 'ACTIVITY__TABLE_VIEW_ITEM';

const getTextLabel = (values, picklistFieldValues) => {
  const customLabels = {
    __me__: 'Me',
    __MATCH_EMPTY_ROWS__: 'Empty',
  };
  const regex = RegExp('__[a-zA-Z_]*__');
  let textLabel = '';
  if (Array.isArray(values) && values.length) {
    textLabel = values
      .map(value => value && (regex.test(value) ? value : picklistFieldValues.get(value)))
      .map(value => value && (regex.test(value) ? customLabels[value] : value.value))
      .reduce((x, y) => `${x}, ${y}`);
  }
  return textLabel;
};

const renderCategoriesStepFiltersList = ({
  bobjectTypes,
  elements,
  fields,
  fieldTypes,
  handleRemoveElement,
  picklistFieldValues,
  styles,
}) =>
  picklistFieldValues &&
  fieldTypes &&
  elements &&
  Object.entries(elements).map(([fieldId, values]) => {
    const field = fields?.get(fieldId);
    let textValue = values;
    if (field) {
      if (['Picklist', 'Global Picklist'].includes(fieldTypes.get(field.fieldType).name)) {
        textValue = getTextLabel(values, picklistFieldValues);
      }
      if (['Date', 'DateTime'].includes(fieldTypes.get(field.fieldType).name)) {
        if (Array.isArray(values) && values.length === 1 && relativeDates[values[0]]) {
          textValue = relativeDates[values[0]];
        } else {
          textValue = dateArrayToIntervalString(values);
        }
      }
      if (['URL', 'Phone', 'Email', 'Text'].includes(fieldTypes.get(field.fieldType).name)) {
        if (Array.isArray(values) && values.length === 1) {
          textValue = `${TEXT_FIELD_FILTERS[textValue[0].type] || 'Contains:'} ${
            textValue[0]?.value !== undefined ? `${textValue[0].value}` : `${textValue}`
          }`;
        } else {
          textValue = `${TEXT_FIELD_FILTERS[textValue.type]} ${textValue?.value &&
            `${textValue.value}`}`;
        }
      }

      return (
        !isTableViewItemField(field) && (
          <div className={styles._fields_list_item} key={`field-${fieldId}`}>
            <div
              className={styles._fields_list_close_button}
              onClick={() => handleRemoveElement(fieldId)}
            >
              <IconButton name="cross" />
            </div>
            <div className={styles._fields_list_text}>
              <Text size="m" color="penaut">
                {`${field.name} (${bobjectTypes.get(field.bobjectType).name})`}
                {`: ${textValue}`}
              </Text>
            </div>
          </div>
        )
      );
    }

    return null;
  });

const iconCategoryStepColumn = (field, handleRemoveElement, styles, currentBobjectTypeIds) => {
  if (field.requiredColumnInList && currentBobjectTypeIds.includes(field.bobjectType)) {
    return (
      <div className={styles._fields_list_close_button}>
        <IconButton name="lock" color="verySoftPeanut" />
      </div>
    );
  }
  return (
    <div className={styles._fields_list_close_button} onClick={() => handleRemoveElement(field.id)}>
      <IconButton name="cross" />
    </div>
  );
};

const renderCategoriesStepColumnsList = ({
  bobjectTypes,
  currentBobjectTypes,
  elements,
  fields,
  handleRemoveElement,
  moveColumn,
  styles,
}) => {
  const bobjectFieldsElements = elements && fields && getShownBobjectFields(elements, fields);
  return bobjectFieldsElements.map((field, index) => {
    const isFirstElement = index === 0;
    const isLastElement = index === elements.length - 1;
    const currentBobjectTypeIds = currentBobjectTypes.map(({ id }) => id);
    const shouldShowFrom = !currentBobjectTypeIds.includes(field.bobjectType);

    return (
      <div className={styles._fields_list_item} key={`field-${field.id}`}>
        {iconCategoryStepColumn(field, handleRemoveElement, styles, currentBobjectTypeIds)}
        <div className={styles._fields_list_text}>
          <Text size="m" color="peanut">
            {field.name} {shouldShowFrom && `from ${bobjectTypes.get(field.bobjectType).name}`}
          </Text>
        </div>
        <div className={styles._fields_list_order_buttons}>
          <IconButton
            name="chevronUp"
            disabled={isFirstElement}
            size={16}
            onClick={() => moveColumn(index, 'up')}
          />
          <IconButton
            name="chevronDown"
            disabled={isLastElement}
            size={16}
            onClick={() => moveColumn(index, 'down')}
          />
        </div>
      </div>
    );
  });
};

const renderFieldsStepFiltersFieldList = (elements, fields, setElements, styles) => {
  const getValue = name => elements && elements[name];
  const getTextFieldValue = name => {
    if (elements && elements[name]) {
      if (elements[name][0]?.type || elements[name]?.type) {
        return {
          type: elements[name][0]?.type || elements[name]?.type,
          value: elements[name][0]?.value || elements[name]?.value,
        };
      }
      return {
        type: 'AUTOCOMPLETE__SEARCH',
        value: elements[name],
      };
    }
    return null;
  };

  return (
    <ul className={styles._list}>
      {fields
        .filter(field => PICKLIST_FIELD_TYPES.includes(field.type))
        .map(field => (
          <li key={field.name} className={styles._list_item_input}>
            <MultiSelectInput
              field={field}
              value={getValue(field.name)}
              variant="outlined"
              onChange={v => setElements(field, v)}
            />
          </li>
        ))}
      {fields
        .filter(field => DATE_FIELD_TYPES.includes(field.type))
        .map(field => (
          <li key={field.name} className={styles._list_item_input}>
            <DateFilterComponent
              id={`field-input-${field.name}`}
              label={field.label}
              onChange={v => setElements(field, v)}
              value={getValue(field.name)}
            />
          </li>
        ))}

      {fields
        .filter(field => TEXT_FIELD_TYPES.includes(field.type))
        .map(field => (
          <li key={field.name} className={styles._list_item_input}>
            <InputPicker
              dataTest={field.logicRole}
              defaultValue={getTextFieldValue(field.name)}
              value={getTextFieldValue(field.name)}
              width={375}
              onChange={value => setElements(field, value)}
              placeholder={field.label}
            >
              <InputPickerOption title={'Contains'} type={'AUTOCOMPLETE__SEARCH'}>
                <Input placeholder={'Contains...'} />
              </InputPickerOption>
              <InputPickerOption title={'Contains exactly'} type={'EXACT__SEARCH'}>
                <Input placeholder={'Contains exactly...'} />
              </InputPickerOption>
              <InputPickerOption title={"It's not empty"} type={'__MATCH_FULL_ROWS__'} />
              <InputPickerOption title={"It's empty"} type={'__MATCH_EMPTY_ROWS__'} />
            </InputPicker>
          </li>
        ))}
    </ul>
  );
};

const renderFieldsStepColumnsFieldList = (elements, fields, onClickElement, styles) => (
  <ul className={styles._list}>
    {fields.map(field => {
      const isSelected = elements.includes(field.name);
      return (
        <li
          data-test={`Button-category${field.label}`}
          key={field.name}
          className={classnames(styles._list_item_checkbox, {
            [styles._list_item_checkbox_selected]: isSelected,
          })}
        >
          <Checkbox onClick={() => onClickElement(field.name)} checked={isSelected}>
            <Text size="s">{field.label}</Text>
          </Checkbox>
        </li>
      );
    })}
  </ul>
);

const ViewEditionContext = createContext();

export const ViewEditionContextProvider = ({
  children,
  query = '',
  columns = [],
  setColumns = () => {},
  setQuery = () => {},
  bobjectType,
  shouldShowField,
  showRelationships = true,
}) => {
  const [modalType, setModalType] = useState();
  const [selectedElements, setSelectedElements] = useState();
  const fields = useEntity('bobjectFields');
  const bobjectPicklistFieldValues = useEntity('bobjectPicklistFieldValues');
  let addElementProps = {};
  const toggleColumn = getToggleElementCallback(selectedElements, setSelectedElements);

  const removeFilter = useCallback(id => {
    const elements = { ...selectedElements };
    delete elements[id];
    setSelectedElements(elements);
  }, [selectedElements, setSelectedElements]);

  const moveColumn = (position, direction) => {
    const elementsToOrder = [...selectedElements];
    const newPosition = direction === 'up' ? position - 1 : position + 1;
    if (position < elementsToOrder.length) {
      const itemToMove = elementsToOrder.splice(position, 1).pop();
      elementsToOrder.splice(newPosition, 0, itemToMove);
      setSelectedElements(elementsToOrder);
    }
  };

  useEffect(() => {
    let initialSelectedElements;

    if (isFiltersModal(modalType)) {
      initialSelectedElements = changeLogicRolesToIds({
        query,
        bobjectFields: fields,
        bobjectPicklistFieldValues,
      });
    } else if (isColumnsModal(modalType)) {
      const bobjectFieldsOfElements = getShownBobjectFields(columns, fields);
      initialSelectedElements = bobjectFieldsOfElements?.map(element => element.id);
    }
    setSelectedElements(initialSelectedElements);
  }, [modalType]);

  const addFilterModalProps = {
    elements: selectedElements,
    handleRemoveElement: removeFilter,
    handleOnChangeElement: setSelectedElements,
    renderCategoriesStepList: useCallback(renderCategoriesStepFiltersList, []),
    renderFieldsStepList: useCallback(renderFieldsStepFiltersFieldList, []),
    setElements: newQuery => setQuery(newQuery),
  };

  const addColumnModalProps = {
    elements: selectedElements,
    handleRemoveElement: toggleColumn,
    handleOnChangeElement: setSelectedElements,
    moveColumn,
    renderCategoriesStepList: useCallback(renderCategoriesStepColumnsList, []),
    renderFieldsStepList: useCallback(renderFieldsStepColumnsFieldList, []),
    setElements: selectedColumns => setColumns(selectedColumns),
  };

  if (modalType) {
    if (isFiltersModal(modalType)) {
      addElementProps = { ...addFilterModalProps };
    } else {
      addElementProps = { ...addColumnModalProps };
    }
  }

  return (
    <ViewEditionContext.Provider
      value={{
        ...addElementProps,
        shouldShowField,
        modalType,
        setModalType,
        bobjectTypeList: asArray(bobjectType),
        showRelationships,
      }}
    >
      {children}
    </ViewEditionContext.Provider>
  );
};

export const useViewEditionContext = () => useContext(ViewEditionContext);
