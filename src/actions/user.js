import { userConstants } from '../constants/ActionTypes'
import { userService } from '../services'
import { push } from 'react-router-redux'
import { alertActions } from './message'

const login = (values) => {
  return dispatch => {
    dispatch(request(values))
    userService.login(values).then(user => {
      dispatch(success(user))
      dispatch(push('/'))
    }, error => {
      dispatch(failure(error))
      dispatch(alertActions.error(error))
      dispatch(alertActions.clear());
    });
  };
  function request(account) { return { type: userConstants.LOGIN_REQUEST, account } }
  function success(account) { return { type: userConstants.LOGIN_SUCCESS, account } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

const logout = () => {
  return dispatch => {
    userService.logout()
    dispatch({ type: userConstants.LOGOUT })
    dispatch(push('/login'))
  }
}

export const userActions = {
  login,
  logout,
};