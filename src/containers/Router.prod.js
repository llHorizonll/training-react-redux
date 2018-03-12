import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { PrivateRoute } from '../components/PrivateRoute'
import { message } from 'antd'
import App from './App'
import Login from './Login'
import Register from './Register'

const Root = ({ store, message }) => (
  <Provider store={store}>
    <div>
      <PrivateRoute exact path='/' component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  </Provider>
)

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