import SessionManagerFactory from '../../../misc/session';
import { useCallback } from 'react';

const SessionManager = SessionManagerFactory();

const TEXT_FIELDS = ['Text', 'URL', 'Email', 'Phone'];
const VALUE_SEARCH_MODES = ['AUTOCOMPLETE__SEARCH', 'EXACT__SEARCH'];
const NON_VALUE_SEARCH_MODES = ['__MATCH_FULL_ROWS__', '__MATCH_EMPTY_ROWS__'];

const SEARCH_MODES = Object.freeze({
  AUTOCOMPLETE__SEARCH: 'AUTOCOMPLETE__SEARCH',
  SUBQUERY__SEARCH: 'SUBQUERY__SEARCH',
});

const getRelationField = (bobjectFields, bobjectTypeFromId, bobjectTypeToId) =>
  bobjectFields
    ?.all()
    .find(
      bobjectField =>
        bobjectField.bobjectType === bobjectTypeFromId &&
        bobjectField.referencedBobjectType === bobjectTypeToId,
    );

const isTextFilter = fieldType => TEXT_FIELDS.includes(fieldType.name);
const isNewTextQuery = query => query[0]?.type;

const relativeToQuery = query => {
  if (Array.isArray(query) && query[0] === '__me__') {
    return SessionManager.getUser()?.id;
  }
  return query;
};

const textToQuery = query => {
  let textQuery;
  if (VALUE_SEARCH_MODES.includes(query[0].type)) {
    textQuery = {
      query: query[0].value,
      searchMode: query[0].type,
    };
  }
  if (NON_VALUE_SEARCH_MODES.includes(query[0].type)) {
    textQuery = {
      query: query[0].type,
      searchMode: null,
    };
  }
  return textQuery;
};

const changeLogicRolesToIds = ({ bobjectFields, bobjectPicklistFieldValues, query }) => {
  const newQuery = {};
  if (bobjectPicklistFieldValues) {
    Object.keys(query).forEach(queryField => {
      const queryFieldId = bobjectFields.findBy('logicRole')(queryField)?.id;
      if (!Array.isArray(query[queryField])) {
        query[queryField] = [query[queryField]];
      }
      query[queryField].forEach(queryValue => {
        const picklistValue = bobjectPicklistFieldValues.findBy('logicRole')(queryValue);
        const field = queryFieldId || queryField;
        if (newQuery[field]) {
          return (newQuery[field] = picklistValue
            ? [...newQuery[field], picklistValue.id]
            : [...newQuery[field], queryValue]);
        }
        return (newQuery[field] = picklistValue ? [picklistValue.id] : [queryValue]);
      });
    });
    return newQuery;
  }
  return query;
};

const addQueryParamsFromTypes = (query, bobjectType, bobjectFields, bobjectTypes, fieldTypes) => {
  const newQuery = {};
  // ensure values are arrays
  Object.keys(query).forEach(k =>
    Array.isArray(query[k]) ? (newQuery[k] = [...query[k]]) : (newQuery[k] = [query[k]]),
  );
  // Cross reference and text
  Object.keys(newQuery).forEach(fieldReference => {
    const field =
      bobjectFields.get(fieldReference) || bobjectFields.findBy('logicRole')(fieldReference);
    const fieldType = fieldTypes.get(field.fieldType);
    const queryValue =
      isTextFilter(fieldType) && isNewTextQuery(newQuery[fieldReference])
        ? textToQuery(newQuery[fieldReference])
        : {
            query: relativeToQuery(newQuery[fieldReference]),
            searchMode: null,
          };
    if (field.bobjectType !== bobjectType.id) {
      const relationField = getRelationField(bobjectFields, bobjectType.id, field.bobjectType);
      if (!newQuery[relationField.id]) {
        newQuery[relationField.id] = {
          query: {},
          searchMode: SEARCH_MODES.SUBQUERY__SEARCH,
        };
      }
      newQuery[relationField.id].query[field.id] = queryValue;
      delete newQuery[fieldReference];
    } else {
      newQuery[field.id] = queryValue;
    }
  });

  return newQuery;
};

const getColumnsOrderedByListOrdering = (columnsShown, bobjectFields) =>
  columnsShown &&
  bobjectFields
    ?.all()
    .filter(bobjectField => columnsShown.includes(bobjectField.id))
    .sort((a, b) => a.listsOrdering - b.listsOrdering)
    .map(column => column.id);

const getShownBobjectFields = (columnsShown, bobjectFields) =>
  columnsShown &&
  bobjectFields
    ?.all()
    .filter(bobjectField => columnsShown.includes(bobjectField.id))
    .map(field => ({ ...field, ordering: columnsShown.indexOf(field.id) }))
    .sort((a, b) => a.ordering - b.ordering);

const getToggleElementCallback = (selectedElements, setSelectedElements) =>
  useCallback(id => {
    if (selectedElements.includes(id)) {
      setSelectedElements(selectedElements.filter(x => x !== id));
    } else {
      setSelectedElements([...selectedElements, id]);
    }
  }, [selectedElements, setSelectedElements]);

const excludedViewTypes = {
  MEETINGS: 'MEETINGS',
  SAL: 'SAL',
  MQL: 'MQL',
  LEAD_WITHOUT_QC: 'LEAD_WITHOUT_QC',
};

export {
  addQueryParamsFromTypes,
  changeLogicRolesToIds,
  excludedViewTypes,
  getShownBobjectFields,
  getColumnsOrderedByListOrdering,
  getToggleElementCallback,
};
