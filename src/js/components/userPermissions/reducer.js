import { useReducer } from 'react';
import { PERMISSIONS_FETCH_DATA_ERROR, PERMISSIONS_FETCH_DATA_SUCCESS } from './actions';

const initialState = {
  data: undefined,
  dataFetch: false,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  const { type } = { ...action };

  if (type === PERMISSIONS_FETCH_DATA_SUCCESS) {
    newState.data = action.data;
    newState.dataFetch = true;
  }
  if (type === PERMISSIONS_FETCH_DATA_ERROR) {
    console.info('PERMISSIONS REQUEST FAILED');
  }
  return newState;
};

export default () => useReducer(reducer, initialState);
