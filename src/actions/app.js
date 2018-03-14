import { menuConstants } from '../constants/ActionTypes'
import { menuService } from '../services'
import { alertActions } from './message'
import { push } from 'react-router-redux'
import config from '../utils/config'

const { prefix } = config

const getmenulist = () => {
  return dispatch => {
    dispatch(request());
    menuService.query().then(item => {
      dispatch(success(item.filter((x) => x.Code !== 'SET')))
      dispatch(getmenuright(item.filter((x) => x.Code === 'SET')))
    }, error => {
      dispatch(failure(error));
      localStorage.removeItem('user');
      dispatch(alertActions.error(error));
      dispatch(alertActions.clear());
      dispatch(push('/login'))
    });
  };
  function request(param) { return { type: menuConstants.REQUEST, param } }
  function getmenuright(item) { return { type: menuConstants.GETMENURIGHT, item } }
  function success(item) { return { type: menuConstants.SUCCESS, item } }
  function failure(error) { return { type: menuConstants.FAILURE, error } }
}

const toggleleft = (siderFold) => {
  return dispatch => {
    localStorage.setItem(`${prefix}leftsiderFold`, !siderFold)
    dispatch({ type: menuConstants.TOGGLEMENULEFT })
  }
}

const toggleright = (siderFold) => {
  return dispatch => {
    localStorage.setItem(`${prefix}rightsiderFold`, !siderFold)
    dispatch({ type: menuConstants.TOGGLEMENURIGHT })
  }
}

const handleNavOpenKeys = (openKeys) => {
  return dispatch => {
    localStorage.setItem(`${prefix}navOpenKeys`, JSON.stringify(openKeys))
    dispatch({ type: menuConstants.CHANGEOPENKEYS })
  }
}

export const menuActions = {
  getmenulist,
  toggleleft,
  toggleright,
  handleNavOpenKeys
};