import { combineReducers } from 'redux';
import authReducer from './auth';
import answersReducer from './answers';

export default combineReducers({
  auth: authReducer,
  answers: answersReducer,
});