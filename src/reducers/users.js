//import { userConstants } from '../constants/ActionTypes'
let presetuser;
(process.env.NODE_ENV === 'production')
  ? presetuser = { username: 'test@user.com', password: '1234', remember: true, permissions: {}, }
  : presetuser = { username: 'blueledger@gmail.com', password: '1234', remember: true, permissions: {}, };
export function users(state = presetuser, action) {
  switch (action.type) {
    // case userConstants.GETALL_REQUEST:
    //   return {
    //     loading: true
    //   };
    // case userConstants.GETALL_SUCCESS:
    //   return {
    //     items: action.users
    //   };
    // case userConstants.GETALL_FAILURE:
    //   return {
    //     error: action.error
    //   };
    default:
      return state
  }
}