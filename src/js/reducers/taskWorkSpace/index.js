import { combineReducers } from 'redux';
import taskFeed from './taskFeed';
import board from './board';

export default combineReducers({
  board,
  taskFeed,
});
