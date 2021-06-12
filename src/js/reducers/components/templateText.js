import {
  TEMPLATE_TEXT_SET_FILTERS,
  TEMPLATE_TEXT_SET_FILTER_VALUE,
  TEXT_TEMPLATE_CHANGE_PAGE,
  TEXT_TEMPLATE_CHANGE_PAGE_SIZE,
  TEXT_TEMPLATE_RESET_DATA,
  TEXT_TEMPLATE_SEARCH_FILTER_UPDATE,
  TEXT_TEMPLATE_SEE_MORE_ELEMENT,
  TEXT_TEMPLATE_SET_RAW_FILTERS,
  TEXT_TEMPLATE_SET_REF_ELEMENT,
  TEXT_TEMPLATE_SET_TYPE,
  TEXT_TEMPLATE_SET_VERSION,
  TEXT_TEMPLATE_SHOW_PITCHES_TOGGLE,
  TEXT_TEMPLATE_SUPERPOSE_ELEMENT,
  CONTACT_QQ_RESET_DATA,
  CONTACT_QQ_SET_FILTERS,
  TEMPLATE_TEXT_FILTERS,
  TEXT_TEMPLATE_RAW_ELEMENTS,
  TEMPLATE_TEXT_STAGE,
  TEMPLATE_TEXT_RESET_FILTERS,
} from '../../actions/dictionary';
import { TYPES } from '../../constants/templates';

export const resetTemplateData = (dispatch, mode) => {
  if (mode === 'Pitches') {
    dispatch({ type: TEXT_TEMPLATE_RESET_DATA });
    dispatch({ type: CONTACT_QQ_RESET_DATA });
  } else {
    dispatch({ type: TEXT_TEMPLATE_RESET_DATA });
  }
};

export const setTransformedFilterData = (dispatch, filters, mode) => {
  if (mode === 'Pitches') {
    dispatch({ type: TEMPLATE_TEXT_SET_FILTERS, filters });
    dispatch({ type: CONTACT_QQ_SET_FILTERS, filters });
  } else {
    dispatch({ type: TEMPLATE_TEXT_SET_FILTERS, filters });
  }
};

const dataTypeDefault = {
  value: undefined,
  pagination: {
    total: undefined,
    page: 0,
  },
};

const initialState = {
  page: 0,
  filtersRawData: undefined,
  filters: undefined,
  searchQueryFilter: '',
  type: undefined,
  stage: 'PROSPECT',
  version: undefined,
  data: {
    [TYPES.LINKEDIN]: dataTypeDefault,
    [TYPES.PITCH]: dataTypeDefault,
    [TYPES.EMAIL]: dataTypeDefault,
    [TYPES.QUALIFYING_QUESTION]: dataTypeDefault,
  },
  showSwitch: true,
  paginationSize: 50,
  pagination: {
    total: undefined,
    size: 50,
    page: 0,
  },
};

export default (state = initialState, action) => {
  const newState = { ...state };
  const type = action.type;

  if (type === TEXT_TEMPLATE_SET_RAW_FILTERS) {
    newState.filtersRawData = action.data;
    newState.picklistDefaultValue = false;
  }
  if (type === TEMPLATE_TEXT_SET_FILTER_VALUE) {
    newState.filters.map(f => {
      if (f.label === action.name) {
        return (f.selected = action.value);
      }
      return '';
    });
    newState.filters = [...newState.filters];
  }
  if (type === TEMPLATE_TEXT_SET_FILTERS) {
    newState.filters = action.filters;
    newState.leadHasChanged = false;
  }
  if (type === TEMPLATE_TEXT_FILTERS) {
    newState.filters = action.filters;
  }
  if (type === TEMPLATE_TEXT_STAGE) {
    newState.stage = action.stage;
  }
  if (type === TEMPLATE_TEXT_RESET_FILTERS) {
    newState.filters = undefined;
  }
  if (type === TEXT_TEMPLATE_RAW_ELEMENTS) {
    newState.data[action.templateType] = {
      value: [
        ...action.payload.content.map(e => ({
          ...e,
          state: {
            visible: true,
            hasOverflow: undefined,
            isOverflown: true,
          },
        })),
      ],
      pagination: {
        total: action.payload.totalElements,
        page: action.payload.pageable.pageNumber,
      },
    };
  }
  if (type === TEXT_TEMPLATE_SEARCH_FILTER_UPDATE) {
    newState.searchQueryFilter = action.value;
  }
  if (type === TEXT_TEMPLATE_SET_TYPE) {
    newState.type = action.textTemplateType;
  }
  if (type === TEXT_TEMPLATE_RESET_DATA) {
    if (state.type !== undefined) {
      newState.data[state.type].value = undefined;
    }
  }
  if (type === TEXT_TEMPLATE_SET_VERSION) {
    newState.version = action.version;
  }
  if (type === TEXT_TEMPLATE_SHOW_PITCHES_TOGGLE) {
    newState.showSwitch = !state.showSwitch;
  }
  if (type === TEXT_TEMPLATE_SUPERPOSE_ELEMENT) {
    newState.data[state.type].value
      .filter(e => e.id !== action.id)
      .forEach(e => {
        e.state = { ...e.state, visible: !e.state.visible };
      });
  }
  if (type === TEXT_TEMPLATE_SEE_MORE_ELEMENT) {
    const cardState = state.data[state.type].value.find(e => e.id === action.id).state;
    newState.data[state.type].value.find(e => e.id === action.id).state = {
      ...cardState,
      isOverflown: action.isOverflown,
    };
  }
  if (type === TEXT_TEMPLATE_SET_REF_ELEMENT) {
    const cardState = state.data[state.type].value.find(e => e.id === action.id).state;
    newState.data[state.type].value.find(e => e.id === action.id).state = {
      ...cardState,
      hasOverflow: action.newHasOverflow,
    };
  }
  if (type === TEXT_TEMPLATE_CHANGE_PAGE) {
    newState.data[state.type] = {
      value: undefined,
      pagination: { ...state.data[state.type].pagination, page: action.page },
    };
    newState.page = action.page;
  }
  if (type === TEXT_TEMPLATE_CHANGE_PAGE_SIZE) {
    if (newState.paginationSize !== action.value) {
      newState.paginationSize = action.value;
      newState.data[state.type].value = undefined;
    }
  }
  return newState;
};
