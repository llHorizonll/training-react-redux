import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import DevTools from '../containers/DevTools'
import { history } from '../utils/history'

const loggerMiddleware = createLogger();

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, loggerMiddleware, routerMiddleware(history)),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore