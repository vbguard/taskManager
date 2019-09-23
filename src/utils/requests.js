import axios from 'axios';
// import { loginSuccess, loginError, authRequest } from '../redux/actions/authActions';
import * as api from './entyPoints';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

const setToken = token => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export const requestUserLogin = credentials => {
  const res = axios.post(api.url.loginUser(), credentials);
  return res;
};

export const fetchPosts = async credentials => {
  const res = await axios.get(api.url.getTasks(), setToken(credentials));
  return res;
};
