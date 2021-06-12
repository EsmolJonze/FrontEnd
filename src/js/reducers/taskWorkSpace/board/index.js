import { combineReducers } from 'redux';
import targetMarket from './targetMarket/targetMarket';
import allocateQcTask from './allocateQcTask';
import contactTask from './contactTask';
import addQcTask from './addQcTask';

export default combineReducers({
  targetMarket,
  allocateQcTask,
  contactTask,
  addQcTask,
});
