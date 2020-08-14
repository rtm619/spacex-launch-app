import { combineReducers } from 'redux';

import spaceXReducer from './spaceX.reducer';

const allReducers = {
  spaceXReducer,
};

export default combineReducers(allReducers);
