import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { sessionReducer } from './reducers/sessionReducer';

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token']
};

// const rootReducer = combineReducers({
//   session: sessionReducer
// });

const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, sessionReducer)
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
