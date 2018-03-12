import { alertConstants } from '../constants/ActionTypes'

export function message(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'success',
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: 'error',
        message: action.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}