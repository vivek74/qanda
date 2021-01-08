import request from '../../helper';

// signup action
export const SIGNUP_USER = 'SETTING_USER';
export const SIGNUP_USER_PENDING = 'SETTING_USER_PENDING';
export const SIGNUP_USER_FULFILLED = 'SETTING_USER_FULFILLED';
export const SIGNUP_USER_REJECTED = 'SETTING_USER_REJECTED';

export const registerUser = (data) => {
  return {
    type: SIGNUP_USER,
    payload: request.post('/auth/registerUser', data)
  }
};

// login action
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_PENDING = 'LOGIN_USER_PENDING';
export const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED';
export const LOGIN_USER_REJECTED = 'LOGIN_USER_REJECTED';

export const loginUser = (data) => {
  return {
    type: LOGIN_USER,
    payload: request.post('/auth/loginUser', data)
  }
};

// setting access token to state

export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';

export const setAccessToken = (data) => {
  return {
    type: SET_ACCESS_TOKEN,
    payload: data
  }
}

// logout
export const LOGOUT = 'LOGOUT';
export const LOGOUT_PENDING = 'LOGOUT_PENDING';
export const LOGOUT_FULFILLED = 'LOGOUT_FULFILLED';
export const LOGOUT_REJECTED = 'LOGOUT_REJECTED';

export const logout = () => {
  return {
    type: LOGOUT,
    payload: request.get('/auth/logout')
  }
}

// saving answers

export const SET_ANSWERS = 'SET_ANSWERS';

export const setAnswer = (data) => ({
  type: SET_ANSWERS,
  payload: data
})