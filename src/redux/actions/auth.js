export const authTypes = {
  AUTH_REQUEST: 'auth/AUTH_REQUEST',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_ERROR: 'auth/LOGIN_ERROR',
  LOGOUT: 'auth/USER_LOGOUT'
};

export const authRequest = () => ({
  type: authTypes.AUTH_REQUEST
});

export const loginSuccess = response => ({
  type: authTypes.LOGIN_SUCCESS,
  payload: response
});

export const loginError = error => ({
  type: authTypes.LOGIN_ERROR,
  payload: error.message
});

export const logoutSuccess = () => ({
  type: authTypes.LOGOUT
});
