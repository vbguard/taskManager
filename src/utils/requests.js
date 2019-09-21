import axios from 'axios';
import { loginSuccess, loginError, authRequest } from '../redux/actions/auth';
import * as api from './entyPoints';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

const setToken = token => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export const requestUserLogin = credentials => dispatch => {
  dispatch(authRequest());

  const res = axios.post(api.url.loginUser(), credentials);
  return res;
};
