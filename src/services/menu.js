import config from '../utils/config'
const { menuList } = config.api

export const menuService = {
  query,
};

function query() {
  const userObj = JSON.parse(localStorage.getItem('user'));
  const requestOptions = {
    method: 'GET',
    headers: { 'Accept-Token': userObj.SessionId },
  };

  return fetch(menuList, requestOptions)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    })
    .then(res => {
      return JSON.parse(res).Data
    })
}
