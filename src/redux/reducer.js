import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { sessionReducer } from './reducers/sessionReducer';
import { tasksReducer } from './reducers/tasksReducer';

const sessionPersistConfig = {
  key: 'session',
  storage
};

const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, sessionReducer),
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
