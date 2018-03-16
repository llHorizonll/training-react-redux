import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import { app } from './app';
import { authentication } from './authen';
import { users } from './users';
import { message } from './message';
import { ledger } from './ledger';

const rootReducer = combineReducers({
  loadingBar: loadingBarReducer,
  app,
  authentication,
  users,
  message,
  ledger
});

export default rootReducer;