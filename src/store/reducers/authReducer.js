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

        case 'SIGNUP_SUCCESS':
            console.log("signUP successXXXXXXXXX", action.newUser);
            return {
                ...state,
                newUser: action.newUser,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log("signup error");
            return {
                ...state,
                authError: action.err.message
            }

        default:
            return state
    }
}
