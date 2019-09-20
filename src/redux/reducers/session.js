import { authTypes } from '../actions/auth';

const initailState = {
  user: {},
  token: ''
};

export const sessionReducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case authTypes.LOGIN_SUCCESS:
      return payload;

    case authTypes.LOGIN_ERROR:
      return { error: payload };

    case authTypes.LOGOUT:
      localStorage.removeItem('userToken');
      localStorage.removeItem('name');
      return initailState;

    default:
      return state;
  }
};
