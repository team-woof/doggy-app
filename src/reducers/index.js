import { combineReducers } from 'redux';

import { homeReducer } from './homeReducer';
import { fetchDefaults } from './fetchDefaults';
import { searchButtonResultReducer } from './searchButtonResultReducer';

export default combineReducers({
  homeReducer,
  fetchDefaults,
  searchResult:searchButtonResultReducer
});
