import config from '../utils/config'
const { prefixlist } = config.api

export const ledgerService = {
  getprefixlist,
};

function getprefixlist() {
  const userObj = JSON.parse(localStorage.getItem('user'));
  const requestOptions = {
    method: 'GET',
    headers: { 'Accept-Token': userObj.SessionId },
  };

  return fetch(prefixlist, requestOptions)
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


