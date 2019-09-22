import { authTypes } from '../actions/authActions';

const initailState = {
  nickname: '',
  token: null
};

export const sessionReducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case authTypes.LOGIN_SUCCESS:
      return payload;

    case authTypes.LOGIN_ERROR:
      return { error: payload };

    case authTypes.LOGOUT:
      return initailState;

    default:
      return state;
  }
};
