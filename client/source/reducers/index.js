import {combineReducers} from 'redux'
import authentication from './authentication';
import message from './message';
import networking from './networking';
import room from './room';
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
  authentication,
  message,
  networking,
  room,
  routing: routerReducer
});

export default rootReducer;
