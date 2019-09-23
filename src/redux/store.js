import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleWares = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleWares));

const configureStore = () => {
  const store = createStore(rootReducer, enhancer);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducer', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
};

export const store = configureStore();
export const persistor = persistStore(store);
