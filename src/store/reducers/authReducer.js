const initialState = {
    authError: null
}
export default (state=initialState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed'
            }
        
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            }
        
        case 'SIGNOUT_SUCCESS':
            console.log("signout success");
            return state
        default:
            return state
    }
}
