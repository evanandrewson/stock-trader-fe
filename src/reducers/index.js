import { combineReducers } from 'redux';
import session from './sessionReducer';
import home from './homeReducer';

export default combineReducers({
  session,
  home
})