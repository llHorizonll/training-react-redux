import React from 'react'
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import Root from './containers/Root'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/configureStore'
import { history } from './utils/history'

const store = configureStore()

ReactDOM.render(
  <Router history={history}>
    <Root store={store} />
  </Router>,
  document.getElementById('root')
)
registerServiceWorker();
