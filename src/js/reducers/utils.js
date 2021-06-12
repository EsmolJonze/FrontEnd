import { WEBSOCKET_MESSAGE_INCOMING } from '../actions/dictionary';

export const isWebsocketDataActionFor = bobjectType => action =>
  action.type === WEBSOCKET_MESSAGE_INCOMING &&
  action.data.action === 'data' &&
  action.data.bobjectType === bobjectType;

export const isWebsocketDataActionForWithId = bobjectType => id => action => {
  if (
    action.type === WEBSOCKET_MESSAGE_INCOMING &&
    action.data.action === 'data' &&
    action.data.bobjectType === bobjectType
  ) {
    const shortId = id && id.split('/').length === 3 ? id.split('/')[2] : id;
    return action.data.ids.includes(id) || action.data.ids.includes(shortId);
  }
  return false;
};

export const resetState = (newState, initialState, exceptions = []) => {
  Object.getOwnPropertyNames(newState).forEach(n => {
    if (exceptions.indexOf(n) < 0) {
      initialState.hasOwnProperty(n) ? (newState[n] = initialState[n]) : (newState[n] = undefined);
    }
  });
};

export const textTemplateAndQqFiltersLoad = (newState, action) => {
  if (
    newState.categorizationValue[action.typeChip] &&
    newState.categorizationValue[action.typeChip].length &&
    newState.categorizationValue[action.typeChip].length !== action.categorizationArray.length
  ) {
    newState.valueAllSelected[action.typeChip].all = false;
  } else {
    newState.categorizationValue[action.typeChip] = action.categorizationArray;
  }
  newState.valueAllSelected[action.typeChip].loaded = true;
  newState.valueAllSelected = { ...newState.valueAllSelected };
  newState.categorizationValue = { ...newState.categorizationValue };
  return newState;
};

export const textTemplateAndQqSelectChip = (newState, action) => {
  if (!newState.categorizationValue[action.typeChip]) {
    newState.categorizationValue[action.typeChip] = [];
  } else if (newState.valueAllSelected[action.typeChip].all === true) {
    newState.categorizationValue[action.typeChip] = [];
    newState.categorizationValue[action.typeChip].push(action.id);
    newState.valueAllSelected[action.typeChip].all = false;
  } else if (newState.categorizationValue[action.typeChip].indexOf(action.id) > -1) {
    newState.categorizationValue[action.typeChip].splice(
      newState.categorizationValue[action.typeChip].indexOf(action.id),
      1,
    );
  } else {
    newState.categorizationValue[action.typeChip].push(action.id);
    if (
      newState.categorizationValue[action.typeChip].length === action.categorizationArray.length
    ) {
      newState.valueAllSelected[action.typeChip].all = true;
    }
  }
  if (!newState.categorizationValue[action.typeChip].length) {
    newState.categorizationValue[action.typeChip] = action.categorizationArray;
    newState.valueAllSelected[action.typeChip].all = true;
  }
  newState.categorizationValue = { ...newState.categorizationValue };
  return newState;
};
