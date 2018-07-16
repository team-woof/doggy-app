export function homeReducer(state = "Doggy Dating Home", action) {
  switch (action.type) {
    case "homeReducer":
      return action;
    default:
      return state;
  }
}
