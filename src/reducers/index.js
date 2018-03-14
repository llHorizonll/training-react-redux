import { combineReducers } from 'redux';
import { app } from './app';
import { authentication } from './authen';
import { users } from './users';
import { message } from './message';

const rootReducer = combineReducers({
  app,
  authentication,
  users,
  message,
});

export default rootReducer;