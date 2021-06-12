import { makeQueryFilters, makeSort } from './bobjectList.util';
import { BOBJECT_TYPES } from '../../constants/bobject';

const makeQuery = ({
  query,
  filters,
  page,
  bobjectFields,
  bobjectType,
  pageSize,
  mandatorySort,
}) => ({
  query: {
    ...query,
    ...makeQueryFilters({ query, filters, bobjectFields }),
  },
  injectReferences: bobjectType === BOBJECT_TYPES.TASK || bobjectType === BOBJECT_TYPES.OPPORTUNITY,
  formFields: true,
  page,
  pageSize: pageSize || 10,
  sort: makeSort({ sort: mandatorySort || filters.sort, bobjectType }),
});

export const makeSearchQuery = ({
  query,
  filters,
  page,
  pageSize = 10,
  bobjectFields,
  bobjectType,
  mandatorySort,
}) => {
  if (Array.isArray(query)) {
    return query.map(q =>
      makeQuery({ query: q, filters, page, pageSize, bobjectFields, bobjectType, mandatorySort }),
    );
  }
  return [makeQuery({ query, filters, page, pageSize, bobjectFields, bobjectType, mandatorySort })];
};
