import {
  APP_MANAGEMENT_ACCOUNT_MESSAGING_EMAIL,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_LINKEDIN,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_PITCH,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ,
} from '../app/_constants/routes';
import { TYPES } from '../constants/templates';

export const TEMPLATE_TYPES = Object.freeze({
  PITCH: 'PITCH',
  EMAIL: 'EMAIL',
  LINKEDIN_MESSAGE: 'LINKEDIN_MESSAGE',
  LINKEDIN: 'LINKEDIN_MESSAGE',
  QUALIFYING_QUESTION: 'QUALIFYING_QUESTION',
});

export const QQ_TYPES = Object.freeze({
  GLOBAL_PICKLIST: 'GLOBAL_PICKLIST',
  TEXT: 'TEXT',
});

export const QQ_TYPES_COPIES = Object.freeze({
  GLOBAL_PICKLIST: 'Picklist',
  TEXT: 'Text',
});

export const TEMPLATE_TYPES_COPIES = Object.freeze({
  PITCH: 'Pitch',
  EMAIL: 'Email',
  LINKEDIN_MESSAGE: 'Linkedin',
  LINKEDIN: 'Linkedin',
  QUALIFYING_QUESTION: 'qualifying question',
});

export const TEMPLATE_TYPES_ICONS = Object.freeze({
  PITCH: 'alignLeft',
  EMAIL: 'mail',
  LINKEDIN_MESSAGE: 'linkedin',
  LINKEDIN: 'linkedin',
  QUALIFYING_QUESTION: 'chat',
});

const joinName = name =>
  name
    .toLowerCase()
    .split(' ')
    .map((a, key) => (key !== 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a))
    .join('');

export const getTypeOfTemplate = pluralEntityName => {
  if (pluralEntityName === 'Pitches') {
    return TEMPLATE_TYPES.PITCH;
  }

  if (pluralEntityName === 'Email templates') {
    return TEMPLATE_TYPES.EMAIL;
  }

  if (pluralEntityName === 'LinkedIn templates' || pluralEntityName === 'Linkedin Messages') {
    return TEMPLATE_TYPES.LINKEDIN_MESSAGE;
  }

  throw new Error(`No plural name for entity name: ${pluralEntityName}`);
};

export const generateFetchTemplatesBody = (
  userId,
  setFilters,
  searchQueryFilter,
  type,
  page,
  paginationSize,
) => {
  let body = setFilters.reduce(
    (prev, current) => ({
      ...prev,
      [joinName(current.label)]: current.selected === 'all' ? null : current.selected,
    }),
    {},
  );
  let setSearchQueryFilter =
    searchQueryFilter === '' || searchQueryFilter === null ? null : searchQueryFilter;
  if (setSearchQueryFilter) {
    setSearchQueryFilter = `%${setSearchQueryFilter.replace(/\s/g, '%')}%`;
  }
  body = {
    ...body,
    type,
    page,
    paginationSize,
    searchText: setSearchQueryFilter,
    user: userId,
  };
  return body;
};

export const FORM_MODES = Object.freeze({
  EDITION: 'EDITION',
  CREATION: 'CREATION',
  CLONE: 'CLONE',
});

export const FORM_MODES_COPIES = Object.freeze({
  EDITION: 'Save',
  CREATION: 'Create',
  CLONE: 'Clone',
});

export const typeToUrl = type => {
  if (type === TYPES.EMAIL) {
    return APP_MANAGEMENT_ACCOUNT_MESSAGING_EMAIL;
  }
  if (type === TYPES.LINKEDIN) {
    return APP_MANAGEMENT_ACCOUNT_MESSAGING_LINKEDIN;
  }
  if (type === TYPES.PITCH) {
    return APP_MANAGEMENT_ACCOUNT_MESSAGING_PITCH;
  }
  if (type === TYPES.QUALIFYING_QUESTION) {
    return APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ;
  }
  return '';
};
