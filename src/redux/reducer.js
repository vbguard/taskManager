import { combineReducers } from 'redux';
import { sessionReducer } from './reducers/session';
import { formReducer } from './reducers/formReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  tasks: formReducer
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
