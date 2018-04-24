export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

function loginRequest(creds) {
  return {
    type: LOGIN_REQUEST,
    creds
  };
}

function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    id_token: user.id_token
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    message
  };
}

export function loginUser(user) {
  return dispatch => {
    dispatch(loginRequest(user));

    return fetch('http://localhost:3001/sessions/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `username=${user.username}&password=${user.password}`
    })
      .then(response => response.json().then(user => ({ user, response })))
      .then(({ user, response }) => {
        if (!response.ok) {
          dispatch(loginError(message));
          return Promise.reject(user);
        } else {
          localStorage.setItem('id_token', user.id_token);
          localStorage.setItem('id_token', user.access_token);
          dispatch(loginSuccess(user));
        }
      })
      .catch(err => console.log('Error: ', err));
  };
}
