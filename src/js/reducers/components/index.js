import { combineReducers } from 'redux';
import entityTabs from './entityTabs';
import bobjectCarousel from './bobjectCarousel';
import timetable from './timetable';
import qualifyingQuestions from './qualifyingQuestions';
import templateText from './templateText';
import bobjectList from './bobjectList';
import websocket from './websocket';
import filter from './filter';
import importHistory from './import';
import restartCadenceModal from './restartCadenceModal';

export default combineReducers({
  entityTabs,
  bobjectCarousel,
  timetable,
  bobjectList,
  importHistory,
  templateText,
  websocket,
  restartCadenceModal,
  filter,
  qualifyingQuestions,
});
