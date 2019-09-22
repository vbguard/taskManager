import axios from 'axios';
import { authRequest, loginSuccess, loginError, logoutSuccess } from './authActions';
import { setAuthToken, clearAuthToken } from '../../config/axiousConfig';

export const auth = credentials => dispatch => {
  dispatch(authRequest());

  axios
    .post('https://task-manager.goit.co.ua/api/auth', credentials)
    .then(({ data }) => {
      setAuthToken(data.token);
      dispatch(loginSuccess(data));
    })
    .catch(err => {
      alert('Wrong password');
      dispatch(loginError(err));
    });
};

export const logout = () => dispatch => {
  axios
    .post('https://task-manager.goit.co.ua/api/auth')
    .then(() => {
      clearAuthToken();
      dispatch(logoutSuccess());
    })
    .catch(err => console.log(err));
};