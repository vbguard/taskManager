import { combineReducers } from 'redux';
import { sessionReducer } from './reducers/session';
import { tasksReducer } from './reducers/tasksReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  userTasks: tasksReducer
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
