import { combineReducers } from 'redux';

import { homeReducer } from './homeReducer';
import { fetchDefaults } from './fetchDefaults';

export default combineReducers({
  homeReducer,
  fetchDefaults
});

