import axios from 'axios';
import { loginSuccess, loginError, authRequest } from '../redux/actions/auth';
import * as api from './entyPoints';
import { fetchTasksStart, fetchTasksSucces, fetchTasksError } from '../redux/actions/tasksActions';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

const setToken = token => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export const requestUserLogin = credendials => dispatch => {
  dispatch(authRequest());

  const res = axios.post(api.url.loginUser(), credendials);
  return res;
};

export const fetchPosts = credendials => dispatch => {
  dispatch(fetchTasksStart());
  axios
    .get(api.url.getTasks(), credendials)
    .then(resp => dispatch(fetchTasksSucces(resp.data.tasks)))
    .catch(error => dispatch(fetchTasksError(error)));
};
