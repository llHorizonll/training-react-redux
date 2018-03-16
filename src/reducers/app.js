import { menuConstants } from '../constants/ActionTypes'
import config from '../utils/config';
const { prefix } = config

const initialState = {
  menu: {},
  menuright: {},
  menuPopoverVisible: false,
  leftsiderFold: localStorage.getItem(`${prefix}leftsiderFold`) === 'true',
  rightsiderFold: true,
  darkTheme: localStorage.getItem(`${prefix}darkTheme`) === 'true',
  isNavbar: document.body.clientWidth < 769,
  navOpenKeys: JSON.parse(localStorage.getItem(`${prefix}navOpenKeys`)) || [],
  locationPathname: '',
  locationQuery: {},
}

export function app(state = initialState, action) {
  switch (action.type) {
    case menuConstants.REQUEST:
      return {
        ...state,
        locationQuery: action.param
      };
    case menuConstants.SUCCESS:
      return {
        ...state,
        menu: action.item
      };
    case menuConstants.GETMENURIGHT:
      return {
        ...state,
        menuright: action.item
      };
    case menuConstants.FAILURE:
      return {
        error: action.error
      };
    case menuConstants.TOGGLEMENULEFT:
      return {
        ...state,
        leftsiderFold: !state.leftsiderFold,
      };
    case menuConstants.TOGGLEMENURIGHT:
      return {
        ...state,
        rightsiderFold: !state.rightsiderFold,
      };
    case menuConstants.CHANGEOPENKEYS:
      return {
        ...state,
        navOpenKeys: JSON.parse(localStorage.getItem(`${prefix}navOpenKeys`)),
      };
    case menuConstants.CHANGEPATH:
      return {
        ...state,
        locationPathname: action.pathname
      };
    default:
      return state
  }
}