import { RESET_TASK_STATE } from '../../actions/dictionary';

const initialState = {
  open: false,
};

export default (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === RESET_TASK_STATE) {
    return initialState;
  }

  return newState;
};
