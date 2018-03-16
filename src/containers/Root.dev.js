import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { PrivateRoute } from '../components/PrivateRoute'
import { message } from 'antd'
import App from './app'
import Login from './Login/'
import Register from './Register/'
import NotFound from './NotFound/'
import DevTools from './DevTools'
import LoadingBar from 'react-redux-loading-bar'

const Root = ({ store, location }) => {
  return (
    <Provider store={store}>
      <div>
      <LoadingBar />
        <Switch>
          <PrivateRoute exact={location.pathname === '/login' ? true : false} path='/' component={App} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
        <DevTools />
      </div>
    </Provider>
  )
}

const getMessage = (msg) => {
  switch (msg.type) {
    case 'success':
      return message.success(msg.message);
    case 'error':
      return message.error(msg.message);
    default:
      return null;
  }
}

const mapStateToProps = (state) => {
  return {
    message: getMessage(state.message)
  };
};

export default withRouter(connect(mapStateToProps)(Root))

