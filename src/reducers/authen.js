import { userConstants } from '../constants/ActionTypes'

let user = localStorage.getItem('user')
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {};
    case userConstants.LOGIN_SUCCESS:
      return JSON.parse(action.account);
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}