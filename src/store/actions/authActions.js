export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase })=>{
        const fireBase = getFirebase();
        fireBase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password,
        ).then(() => {
            dispatch({type: "LOGIN_SUCCESS"})
        }).catch(()=>{
            dispatch({type: "LOGIN_ERROR"})
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const fireBase = getFirebase();

        fireBase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'});
        })

    }
}