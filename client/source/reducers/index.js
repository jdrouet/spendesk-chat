import {combineReducers} from 'redux'
import authentication from './authentication';
import networking from './networking';
import room from './room';
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
  authentication,
  networking,
  room,
  routing: routerReducer
});

export default rootReducer;
