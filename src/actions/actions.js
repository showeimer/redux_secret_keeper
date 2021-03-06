import request from 'superagent';
import Cookies from 'js-cookie';

export const SET_TOKEN = 'SET_TOKEN';
export const SET_ERROR = 'SET_ERROR';
export const SET_USER = 'SET_USER';
export const LOG_OUT = 'LOG_OUT';

const makeActionCreator = function(actionType) {
    return function(payload) {
        return {type: actionType, payload: payload}
    }
}

const setToken = makeActionCreator(SET_TOKEN);
const setError = makeActionCreator(SET_ERROR);
const setUser = makeActionCreator(SET_USER);
const logOut = makeActionCreator(LOG_OUT);

const baseURL = "https://user-auth-test.herokuapp.com";
const api = (path) => baseURL + path;

export const register = (email, password, name, secret) => {
  return (dispatch) => {
    request
      .post(api("/register"))
      .send({email: email, password: password, full_name: name, message: secret})
      .end((err, res) => {
        if(err) {
          console.log(res.body.errors);
        } else {
          console.log('Registration successful');
        }
      })
  }
}

export const login = (email, password) => {
  return (dispatch) => {
    request
      .post(api("/login"))
      .send({email: email, password: password})
      .end((err, res) => {
        if (err) {
          return dispatch(setError(res.body.errors));
        } else {
          dispatch(setError(null));
          console.log('Login successful', res);
        }

        dispatch(setToken(res.body['auth_token']));
        dispatch(getDashboard());
        Cookies.set('token', res.body['auth_token'], {expires: 7});
      })
  }
}

export const getDashboard = (token) => {
  return (dispatch, getState) => {
    request
      .get(api("/dashboard"))
      .set('X-AUTH-TOKEN', getState()['token'])
      .end((err, res) => {
        if (err) {
          console.log(res.body);
          return dispatch(setError(res.body.errors));
        }
        dispatch(setUser({email: res.body.email, name: res.body.full_name, secret: res.body.message}))
      })
  }
}

export const loadTokenFromCookie = () => {
  return (dispatch) => {
    const token = Cookies.get('token');
      if (token) {
        dispatch(setToken(token));
        dispatch(getDashboard());
        console.log(token);
      }
    }
}

export const userLogOut = () => {
  return (dispatch) => {
    dispatch(logOut());
    Cookies.remove('token');
  }
}
