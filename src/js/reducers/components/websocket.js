import { WEBSOCKET_CONNECT } from '../../actions/dictionary';
import { isWebsocketDataActionFor } from '../utils';

const initialState = {
  connectionId: undefined,
};

const types = ['Activity', 'Lead', 'Company', 'Task', 'Opportunity'];
types.forEach(type => {
  initialState[`${type}LastUpdate`] = new Date();
});

export default (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === WEBSOCKET_CONNECT) {
    newState.connectionId = action.connectionId;
  }

  types.forEach(type => {
    if (isWebsocketDataActionFor(type)(action)) {
      newState[`${type}LastUpdate`] = new Date();
    }
  });

  return newState;
};
