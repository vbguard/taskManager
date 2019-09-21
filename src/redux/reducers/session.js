import { authTypes } from '../actions/auth';

// const initailState = {
//   user: {},
//   token: ''
// };

const basicInitState = {
  user: 'test@test.com',
  token:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDg2MWQxYzQyZDczYzdjZGIzMGM1NDAiLCJpYXQiOjE1NjkwNzAzNjR9.V0EmcgYbniPEp8XaT4q970Zfm1pXMMun5a05avNPNgA'
};

export const sessionReducer = (state = basicInitState, { type, payload }) => {
  switch (type) {
    case authTypes.LOGIN_SUCCESS:
      return payload;

    case authTypes.LOGIN_ERROR:
      return { error: payload };

    case authTypes.LOGOUT:
      localStorage.removeItem('userToken');
      localStorage.removeItem('name');
      return basicInitState;

    default:
      return state;
  }
};
