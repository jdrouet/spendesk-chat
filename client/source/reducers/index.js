import {combineReducers} from 'redux'
import authentication from './authentication';
import networking from './networking';
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
  authentication,
  networking,
  routing: routerReducer
});

export default rootReducer;
