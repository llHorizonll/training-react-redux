import { ledgerConstants } from '../constants/ActionTypes'

export function ledger(state = {}, action) {
  switch (action.type) {
    case ledgerConstants.GET_PREFIX_REQUEST:
      return {
        locationQuery: action.param
      };
    case ledgerConstants.GET_PREFIX_SUCCESS:
      return {
        prefixlist: action.item
      };
    case ledgerConstants.GET_PREFIX_FAILURE:
      return {
        error: action.error
      };
    case ledgerConstants.GET_PAGE:
      return {}
    default:
      return state
  }
}