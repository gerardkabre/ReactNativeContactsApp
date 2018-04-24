import { LOGIN_REQUEST } from '../actions/auth';
import { LOGIN_SUCCESS } from '../actions/auth';
import { LOGIN_FAILURE } from '../actions/auth';

const initialState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token') ? true : false,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isFetching: true, isAuthenticated: false };
    case LOGIN_SUCCESS:
      return { ...state, isFetching: false, isAuthenticated: true, user: action.user };
    case LOGIN_FAILURE:
      return { ...state, isFetching: false, isAuthenticated: false, error: action.error };
    default:
      return state;
  }
};
