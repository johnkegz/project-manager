export const signIn = (credentials) => {
    console.log("here +++", credentials);
    return (dispatch, getState, { getFirestore, getFirebase })=>{
        console.log("here +++");
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