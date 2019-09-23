import { combineReducers } from 'redux';
import { sessionReducer } from './reducers/session';
import { tasksReducer } from './reducers/tasksReducer';
import {formReducer} from './reducers/formReducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  userTasks: tasksReducer,
  form:formReducer
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
