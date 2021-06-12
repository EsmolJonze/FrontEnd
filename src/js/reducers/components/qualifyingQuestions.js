import {
  CONFIG_QQ,
  CONTACT_QQ_RESET_DATA,
  CONTACT_RETRIEVE_QQ_SUCCESS,
} from '../../actions/dictionary';

const initialState = {
  bobjectId: undefined,
  qualifyingQuestions: null,
  qqReset: false,
  selectedValue: {},
  updateQQ: {},
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case CONFIG_QQ:
      if (newState.bobjectId !== action.bobjectId) {
        newState.selectedValue = {};
        newState.updateQQ = {};
      }
      newState.bobjectId = action.bobjectId;
      return newState;
    case CONTACT_QQ_RESET_DATA:
      newState.qqReset = true;
      return newState;
    case CONTACT_RETRIEVE_QQ_SUCCESS:
      newState.qualifyingQuestions = action.data || [];
      newState.qualifyingQuestions.sort((a, b) => a.label.localeCompare(b.label));
      newState.qqReset = false;
      return newState;
    default:
      return newState;
  }
};
