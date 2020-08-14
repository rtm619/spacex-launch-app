import { createStore } from 'redux';

import allReducers from '../reducers';

const configureStore = (initialState) => {
  const store = createStore(allReducers, initialState);
  return store;
};

export default configureStore;
