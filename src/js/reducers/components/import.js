import { importActions } from '../../actions/dictionary/import';

const initialState = {
  newImportVisibility: false,
  revertImportVisibility: false,
  bobjectTableData: undefined,
  needsData: false,
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case importActions.NEW_IMPORT_VISIBILITY_CHANGE:
      newState.newImportVisibility = action.visibility;
      return newState;

    case importActions.REVERT_IMPORT_VISIBILITY_CHANGE:
      newState.revertImportVisibility = action.visibility;
      return newState;

    default:
      return newState;
  }
};
