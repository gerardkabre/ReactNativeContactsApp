export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

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
    return fetch('http://localhost:3001/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `username=${user.username}&password=${user.password}`
    })
      .then(response => response.json())
      .then(response => {
        AsyncStorage.setItem('id_token', response.user.id_token);
        dispatch(loginSuccess(user));
      })
      .catch(err => dispatch(loginError(message)));
  };
}

function registernRequest(creds) {
  return {
    type: REGISTER_REQUEST,
    creds
  };
}

function registerSuccess(user) {
  return {
    type: REGISTER_SUCCESS,
    id_token: user.id_token
  };
}

function registerError(message) {
  return {
    type: REGISTER_FAILURE,
    message
  };
}

export function registerUser(user) {
  return dispatch => {
    dispatch(registerRequest(user));
    return fetch('http://localhost:3001/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `username=${user.username}&password=${user.password}`
    })
      .then(response => response.json())
      .then(response => {
        AsyncStorage.setItem('id_token', response.user.id_token);
        dispatch(registerSuccess(user));
      })
      .catch(err => dispatch(regsiterError(message)));
  };
}
