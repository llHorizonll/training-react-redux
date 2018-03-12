import config from '../utils/config'
const { userAuthen } = config.api

export const userService = {
  login,
  logout,
};

function login(data) {
  const requestOptions = {
    method: 'POST',
    mode: (process.env.NODE_ENV === 'production') ? 'cors' : '',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };

  return fetch(userAuthen, requestOptions)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    }).then(user => {
      // login successful if there's a jwt token in the response
      const userObj = JSON.parse(user);
      if (userObj && userObj.SessionId !== '00000000-0000-0000-0000-000000000000') {
        localStorage.setItem('user', JSON.stringify(userObj));
      } else {
        return Promise.reject('Username or password is incorrect');
      }
      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}


