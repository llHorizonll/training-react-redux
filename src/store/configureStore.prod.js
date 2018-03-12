import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { history } from '../utils/history'

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, routerMiddleware(history))
)

export default configureStore
