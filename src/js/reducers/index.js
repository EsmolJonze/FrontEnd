import app from './app';
import login from './login';
import main from './main';
import qualifiedQuestions from './qualifiedQuestions';
import textTemplateForm from './textTemplateForm';
import settings from './settings';
import taskWorkspace from './taskWorkSpace';
import { combineReducers } from 'redux';
import components from './components';
import { LOGIN_LOG_OUT_SUCCESS } from '../actions/dictionary';
import managementSideBar from './managementSideBar';

const internalReducers = combineReducers({
  app,
  login,
  main,
  settings,
  taskWorkspace,
  components,
  qualifiedQuestions,
  textTemplateForm,
  managementSideBar,
});

export default (state, action) => {
  if (action.type === LOGIN_LOG_OUT_SUCCESS) {
    state = undefined;
  }

  return internalReducers(state, action);
};
