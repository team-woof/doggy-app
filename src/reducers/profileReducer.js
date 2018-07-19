export function profileIdReceive(state = "", action) {
    switch (action.type) {
        case "PROFILE_ID_RECEIVE":
            return action.profileIdReceive;
        default:
            return state;
    }
}
