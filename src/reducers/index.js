import { combineReducers } from 'redux';
import { authentication } from './authen';
import { users } from './users';
import { message } from './message';

const rootReducer = combineReducers({
  authentication,
  users,
  message,
});

export default rootReducer;