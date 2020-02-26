export default function reducer(state, action) {
    switch(action.type) {
        case "ADD_PROJECT":
            return {
                ...state,
                projects: [...action.payload]
            };
        default:
            return state
    }
}