import {
  TEXT_TEMPLATE_CANCEL,
  TEXT_TEMPLATE_CHANGE_BODY,
  TEXT_TEMPLATE_CHANGE_NAME,
  TEXT_TEMPLATE_CHANGE_SUBJECT,
  TEXT_TEMPLATE_CHANGE_VISIBILITY,
  TEXT_TEMPLATE_FILTERS_LOAD,
  TEXT_TEMPLATE_GET_PITCHS_SUCCESS,
  TEXT_TEMPLATE_GO_BACK,
  TEXT_TEMPLATE_RETRIEVE_SUCCESS,
  TEXT_TEMPLATE_SAVE_MODE_TYPE,
  TEXT_TEMPLATE_SAVE_SUCCESS,
  TEXT_TEMPLATE_SELECT_ALL,
  TEXT_TEMPLATE_SELECT_CHIP,
  TEXT_TEMPLATE_VALIDATION_FAILED,
} from '../actions/dictionary';
import { filterObject, switchDateFormat } from '../misc/utils';
import { resetState, textTemplateAndQqFiltersLoad, textTemplateAndQqSelectChip } from './utils';

const initialState = {
  categorizationValue: {},
  visibleForAllMembers: true,
  nameFieldValue: '',
  subjectValue: '',
  textTemplate: '',
  typeTextTemplate: undefined,
  idMessagingTemplate: undefined,
  mode: undefined,
  goBack: false,
  isNameValid: true,
  pitches: undefined,
  updateDatetime: undefined,
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

const resetStateToInitialState = state => {
  resetState(state, initialState);
  state.categorizationValue = {};
  state.pitches = undefined;
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
  state.updateDatetime = undefined;
};

const hasTextBetweenTags = text =>
  text.split(/<\/?\s*[^>]*>/).filter(el => el.length > 0).length > 0;

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case TEXT_TEMPLATE_CANCEL:
      newState.goBack = true;
      return newState;
    case TEXT_TEMPLATE_SAVE_SUCCESS:
      newState.goBack = true;
      return newState;
    case TEXT_TEMPLATE_GO_BACK:
      resetStateToInitialState(newState);
      newState.goBack = false;
      return newState;
    case TEXT_TEMPLATE_CHANGE_NAME:
      newState.nameFieldValue = action.value;
      newState.isNameValid = true;
      return newState;
    case TEXT_TEMPLATE_CHANGE_SUBJECT:
      newState.subjectValue = action.value;
      return newState;
    case TEXT_TEMPLATE_CHANGE_BODY:
      newState.textTemplate = hasTextBetweenTags(action.value) ? action.value : '';
      return newState;
    case TEXT_TEMPLATE_SELECT_CHIP:
      textTemplateAndQqSelectChip(newState, action);
      return newState;
    case TEXT_TEMPLATE_RETRIEVE_SUCCESS:
      newState.idMessagingTemplate = action.data.id;
      newState.updateDatetime = switchDateFormat(action.data.updateDatetime);
      newState.nameFieldValue =
        state.mode === 'CLONE' ? `Copy of ${action.data.name}` : action.data.name;
      newState.subjectValue = action.data.subject;
      newState.typeTextTemplate = action.data.type;
      newState.textTemplate = action.data.body;
      newState.visibleForAllMembers = action.data.visibility;
      newState.categorizationValue = filterObject(
        action.data,
        (k, v) => ['targetMarket', 'idealCustomerProfile', 'scenario'].indexOf(k) >= 0 && v,
      );
      return newState;
    case TEXT_TEMPLATE_SELECT_ALL:
      newState.valueAllSelected[action.typeChip].all = true;
      newState.categorizationValue[action.typeChip] = action.categorizationArray;
      newState.categorizationValue = { ...newState.categorizationValue };
      return newState;
    case TEXT_TEMPLATE_FILTERS_LOAD:
      textTemplateAndQqFiltersLoad(newState, action);
      return newState;
    case TEXT_TEMPLATE_CHANGE_VISIBILITY:
      newState.visibleForAllMembers = action.value;
      return newState;
    case TEXT_TEMPLATE_SAVE_MODE_TYPE:
      newState.typeTextTemplate = action.typePage;
      newState.mode = action.mode;
      return newState;
    case TEXT_TEMPLATE_VALIDATION_FAILED:
      newState.isNameValid = false;
      return newState;
    case TEXT_TEMPLATE_GET_PITCHS_SUCCESS:
      newState.pitches = action.data._embedded.bobjectPicklistFieldValues;
      return newState;
    default:
      return newState;
  }
};
