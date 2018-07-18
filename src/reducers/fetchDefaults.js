export function fetchDefaults(
  state = {
    breeds: {},
    location: {}
  },
  action
) {
  switch (action.type) {
    case 'GET_DEFAULTS':
      return action.data;
    default:
      return state;
  }
}
