import { combineReducers } from 'redux';
import { sessionReducer } from './reducers/session';

const rootReducer = combineReducers({
  session: sessionReducer
});

export default rootReducer;

// Store example

// const store = {
//   session: {
//     user: {
//       name: '',
//       email: ''
//     },
//     token: ''
//   },
//   tasks: [
//     {
//       setID: '',
//       _id: '',
//       title: '',
//       description: '',
//       isDone: false,
//       dates: ['', '', '']
//     }
//   ]
// };
