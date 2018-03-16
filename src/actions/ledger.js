import { ledgerConstants } from '../constants/ActionTypes'
import { ledgerService } from '../services'
// import { push } from 'react-router-redux'
import { alertActions } from './message'

const getprefixlist = (param = '') => {
  return dispatch => {
    dispatch(request(param))
    ledgerService.getprefixlist().then(item => {
      dispatch(success(item))
    }, error => {
      dispatch(failure(error))
      dispatch(alertActions.error(error))
      dispatch(alertActions.clear());
    });
  };
  function request(param) { return { type: ledgerConstants.GET_PREFIX_REQUEST, param } }
  function success(item) { return { type: ledgerConstants.GET_PREFIX_SUCCESS, item } }
  function failure(error) { return { type: ledgerConstants.GET_PREFIX_FAILURE, error } }
}

const getpage = (pathname = '') => {
  return dispatch => {
    //dispatch({ type: ledgerConstants.GET_PAGE, pathname })
  }
}

export const ledgerActions = {
  getprefixlist,
  getpage,
};