import { combineReducers } from 'redux';

import { homeReducer } from './homeReducer';
import { fetchDefaults } from './fetchDefaults';
import { profileIdReceive } from './profileReducer';
import { searchButtonResultReducer } from './searchButtonResultReducer';

export default combineReducers({
  homeReducer,
  fetchDefaults,
  searchResults: searchButtonResultReducer,
  profileIdReceive
});
