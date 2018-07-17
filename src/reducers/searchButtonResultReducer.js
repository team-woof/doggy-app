export function searchButtonResultReducer(state = {}, action) {
  switch (action.type) {
    case 'GET_SEARCH_BUTTON_RESULTS':
      return action.data;
    default:
      return state;
  }
}
