import {
  CONTACT_QQ_SET_FILTERS,
  CONTACT_QQ_SET_FILTER_VALUE,
  QQ_ADD_NEW_ANSWER,
  QQ_CANCEL,
  QQ_CHANGE_FIELD_TYPE,
  QQ_FILTERS_LOAD,
  QQ_GO_BACK,
  QQ_QUESTION_CHANGE_ENABLED,
  QQ_RESET_VALUES,
  QQ_RETRIEVE_FROM_ID_SUCCESS,
  QQ_SAVE_MODE,
  QQ_SAVE_SUCCESS,
  QQ_SELECT_CHIP,
  QQ_SELECT_CHIP_ALL,
  QQ_SORT_VALUES,
  QQ_VALIDATION_NAME_FAILED,
  QQ_WRITE_ANSWER,
  QQ_WRITE_QUESTION,
} from '../actions/dictionary';
import { BIG_INTEGER, filterObject, switchDateFormat } from '../misc/utils';
import { resetState, textTemplateAndQqFiltersLoad, textTemplateAndQqSelectChip } from './utils';

const resetStateToInitialState = (state, initialState) => {
  resetState(state, initialState);
  state.answers = [
    {
      id: undefined,
      order: '',
      value: '',
      score: '',
      enabled: true,
    },
  ];
  state.categorizationValue = {};
  state.valueAllSelected = {
    targetMarket: {
      all: true,
      loaded: false,
    },
    idealCustomerProfile: {
      all: true,
      loaded: false,
    },
    scenario: {
      all: true,
      loaded: false,
    },
  };
};

const initialState = {
  answers: [
    {
      id: undefined,
      order: '',
      value: '',
      score: '',
      enabled: true,
    },
  ],
  newFilters: {
    targetMarkets: '',
    idealCustomerProfiles: '',
    scenarios: '',
  },
  filters: undefined,
  valueFieldType: 'GLOBAL_PICKLIST',
  questionEnabled: true,
  questionValue: '',
  categorizationValue: {},
  leadHasChanged: false,
  retrieved: false,
  updateDatetime: undefined,
  id: undefined,
  mode: undefined,
  goBack: false,
  data: undefined,
  isNameValid: true,
  valueAllSelected: {
    targetMarket: {
      all: true,
      loaded: false,
    },
    idealCustomerProfile: {
      all: true,
      loaded: false,
    },
    scenario: {
      all: true,
      loaded: false,
    },
  },
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case QQ_RESET_VALUES:
      resetStateToInitialState(newState, initialState);
      return newState;
    case QQ_CANCEL:
      newState.goBack = true;
      return newState;
    case QQ_ADD_NEW_ANSWER:
      newState.answers = [
        ...state.answers,
        {
          id: undefined,
          order: '',
          value: '',
          score: '',
          enabled: true,
        },
      ];
      return newState;
    case QQ_GO_BACK:
      resetStateToInitialState(newState, initialState);
      newState.goBack = false;
      return newState;
    case QQ_CHANGE_FIELD_TYPE:
      newState.valueFieldType = action.value;
      return newState;
    case CONTACT_QQ_SET_FILTER_VALUE: {
      const key = action.name;
      const value = action.value;
      if (value === 'all') {
        newState.newFilters[key] = '';
      } else {
        newState.newFilters[key] = value;
      }
      return newState;
    }
    case CONTACT_QQ_SET_FILTERS:
      newState.filters = action.filters;
      return newState;
    case QQ_QUESTION_CHANGE_ENABLED:
      newState.questionEnabled = action.value;
      return newState;
    case QQ_WRITE_QUESTION:
      newState.questionValue = action.value;
      newState.isNameValid = true;
      return newState;
    case QQ_WRITE_ANSWER:
      newState.answers[action.index][action.name] = action.value;
      newState.answers = [...newState.answers];
      return newState;
    case QQ_SORT_VALUES:
      newState.answers.sort(
        (a, b) =>
          (a.order === '' ? BIG_INTEGER : a.order) - (b.order === '' ? BIG_INTEGER : b.order),
      );
      return newState;
    case QQ_SELECT_CHIP:
      textTemplateAndQqSelectChip(newState, action);
      return newState;
    case QQ_SELECT_CHIP_ALL:
      newState.valueAllSelected[action.typeChip].all = true;
      newState.categorizationValue[action.typeChip] = action.categorizationArray;
      newState.categorizationValue = { ...newState.categorizationValue };
      return newState;
    case QQ_FILTERS_LOAD:
      textTemplateAndQqFiltersLoad(newState, action);
      return newState;
    case QQ_SAVE_MODE:
      newState.mode = action.data;
      return newState;
    case QQ_SAVE_SUCCESS:
      newState.goBack = true;
      return newState;
    case QQ_VALIDATION_NAME_FAILED:
      newState.isNameValid = false;
      return newState;
    case QQ_RETRIEVE_FROM_ID_SUCCESS:
      newState.updateDatetime = switchDateFormat(action.data.updateDatetime);
      newState.id = action.data.id;
      newState.answers = action.data.answers;
      newState.answers.sort(
        (a, b) =>
          (a.order === '' ? BIG_INTEGER : a.order) - (b.order === '' ? BIG_INTEGER : b.order),
      );
      newState.answers = [...newState.answers];
      newState.questionValue = action.data.question;
      newState.questionEnabled = action.data.questionEnabled;
      newState.valueFieldType = action.data.type;
      newState.categorizationValue = filterObject(
        action.data,
        (k, v) => ['targetMarket', 'idealCustomerProfile', 'scenario'].indexOf(k) >= 0 && v,
      );
      return newState;
    default:
      return newState;
  }
};
