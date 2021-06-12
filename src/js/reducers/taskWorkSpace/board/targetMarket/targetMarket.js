import { OPEN_MODAL_COMPLETE_TASK, RESET_TASK_STATE } from '../../../../actions/dictionary';

const initialState = {
  taskDoneModalOpen: false,
  taskCompleted: null,
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case RESET_TASK_STATE:
      newState.taskDoneModalOpen = initialState.taskDoneModalOpen;
      newState.taskCompleted = initialState.taskCompleted;
      return newState;
    case OPEN_MODAL_COMPLETE_TASK:
      newState.taskDoneModalOpen = true;
      return newState;
    default:
      return newState;
  }
};
