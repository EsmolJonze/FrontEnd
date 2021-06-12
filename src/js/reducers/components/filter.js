import {
  ALLOCATE_QC_TASK_FILTERS_CLEAN,
  ALLOCATE_QC_TASK_FILTERS_OFF,
  ALLOCATE_QC_TASK_FILTERS_ON,
  ALLOCATE_QC_TASK_LOAD_FILTERS_CONFIGURE,
  ALLOCATE_QC_TASK_LOAD_FILTERS_SUCCESS,
  FILTER_POP_UP_SET_QUERY,
  FILTER_POP_UP_SET_SORT,
} from '../../actions/dictionary';

const initialState = {
  filtersDisplayed: false,
  query: undefined,
  sort: undefined,
  bobjectType: undefined,
  requestedBobjectType: undefined,
  requestedQuery: undefined,
  delegateActionOnAccept: undefined,
  ownFiltersCount: 0,
};

const mergeQuery = (stateQuery, requestedQuery, filters = []) => {
  const q = Object.assign({}, stateQuery);
  filters.forEach(f => {
    if (q[f.name] !== undefined) {
      delete q[f.name];
    }
    if (requestedQuery[f.name] !== undefined && requestedQuery[f.name] !== null) {
      q[f.name] = requestedQuery[f.name];
    }
  });
  return q;
};

const countOwnFilters = (query = {}, filters = []) =>
  filters.filter(f => query[f.name] !== undefined).length;

export default (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === ALLOCATE_QC_TASK_FILTERS_ON) {
    newState.filtersDisplayed = true;
    newState.sort = action.sort;
    newState.requestedQuery = action.query;
    newState.requestedBobjectType = action.bobjectType;
    newState.delegateActionOnAccept = action.delegateActionOnAccept;
    newState.ownFiltersCount = countOwnFilters(newState.query, newState.filters);
  }
  if (action.type === FILTER_POP_UP_SET_QUERY) {
    newState.query = mergeQuery(newState.query, action.query, newState.filters);
    newState.ownFiltersCount = countOwnFilters(newState.query, newState.filters);
  }
  if (action.type === FILTER_POP_UP_SET_SORT) {
    newState.sort = action.sort;
  }
  if (action.type === ALLOCATE_QC_TASK_FILTERS_OFF) {
    newState.filtersDisplayed = false;
    newState.query = undefined;
    newState.bobjectType = undefined;
  }
  if (action.type === ALLOCATE_QC_TASK_FILTERS_CLEAN) {
    newState.query = mergeQuery(newState.query, {}, newState.filters);
    newState.ownFiltersCount = countOwnFilters(newState.query, newState.filters);
  }
  if (action.type === ALLOCATE_QC_TASK_LOAD_FILTERS_CONFIGURE) {
    newState.bobjectType = action.bobjectType;
    newState.query = action.query;
    newState.filters = undefined;
    newState.ownFiltersCount = countOwnFilters(newState.query, newState.filters);
  }
  if (action.type === ALLOCATE_QC_TASK_LOAD_FILTERS_SUCCESS) {
    newState.filters = action.payload.filter(
      f =>
        f.bobjectFieldGroup &&
        (f.type === 'Picklist' ||
          f.type === 'Global Picklist' ||
          f.type === 'Text' ||
          f.type === 'Date' ||
          f.type === 'DateTime'),
    );
    const q = Object.assign({}, newState.query);
    newState.filters.forEach(f => {
      if (q[f.logicRole] !== undefined) {
        q[f.name] = q[f.logicRole];
        delete q[f.logicRole];
      }
      if (f.type === 'Picklist' || f.type === 'Global Picklist') {
        if (q[f.name] !== undefined) {
          f.fieldValues.forEach(v => {
            if (v.logicRole === q[f.name]) {
              q[f.name] = v.value;
            }
          });
        }
      }
    });
    newState.query = q;
    newState.ownFiltersCount = countOwnFilters(newState.query, newState.filters);
  }
  return newState;
};
