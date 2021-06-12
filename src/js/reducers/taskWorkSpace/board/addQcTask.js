import {
  ADD_QC_TASK_MODAL_ADD_QC_TO_LEAD_CHANGE_SEARCH_VALUE,
  ADD_QC_TASK_MODAL_ADD_QC_TO_LEAD_CLOSE,
  ADD_QC_TASK_MODAL_ADD_QC_TO_LEAD_OPEN,
  ADD_QC_TASK_MODAL_RESET_SUGGESTED_LEAD_AUTHOR_NAMES,
  ADD_QC_TASK_MODAL_SUGGESTED_LEAD_AUTHOR_NAMES_LOADED,
  ADD_QC_TASK_TAB_CHANGE,
} from '../../../actions/dictionary/app/main/taskWorkspace/addQcTask';

const initialState = {
  activeTab: 0,
  modalAddQcOpen: false,
  searchAddQcPopUpValue: '',
  leadAuthorName: '',
  companiesNameSuggestions: undefined,
  leadId: undefined,
  buttonModalLoading: false,
  redirect: undefined,
};

export default (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === ADD_QC_TASK_TAB_CHANGE) {
    newState.activeTab = action.tab;
  }

  if (action.type === ADD_QC_TASK_MODAL_ADD_QC_TO_LEAD_OPEN) {
    newState.modalAddQcOpen = true;
    newState.bobject = action.bobject;
    newState.leadAuthorName = action.bobject.fields.find(
      field => field.logicRole === 'LEAD__NAME',
    ).text;
    newState.leadId = action.bobject.id.objectId;
  }

  if (action.type === ADD_QC_TASK_MODAL_ADD_QC_TO_LEAD_CLOSE) {
    newState.modalAddQcOpen = false;
    newState.searchAddQcPopUpValue = initialState.searchAddQcPopUpValue;
    newState.leadAuthorName = initialState.leadAuthorName;
    newState.leadId = initialState.leadId;
    newState.buttonModalLoading = initialState.buttonModalLoading;
  }
  if (action.type === ADD_QC_TASK_MODAL_ADD_QC_TO_LEAD_CHANGE_SEARCH_VALUE) {
    newState.searchAddQcPopUpValue = action.value;
  }
  if (action.type === ADD_QC_TASK_MODAL_SUGGESTED_LEAD_AUTHOR_NAMES_LOADED) {
    newState.reloadingNameSuggestions = false;
    newState.companiesNameSuggestions = action.payload.contents.map(company => ({
      label: company.fields.find(field => field.logicRole === 'COMPANY__NAME').value,
      value: company.id.value,
      objectId: company.id.objectId,
    }));
  }
  if (action.type === ADD_QC_TASK_MODAL_RESET_SUGGESTED_LEAD_AUTHOR_NAMES) {
    newState.companiesNameSuggestions = initialState.companiesNameSuggestions;
  }

  return newState;
};
