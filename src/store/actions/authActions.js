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
            dispatch({type: "SIGNOUT_SUCCESS"});
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirestore ,getFirebase}) => {
        const fireBase = getFirebase();
        const fireStore = getFirestore();
        console.log("here + >>>>>>>>>>>>>>>>>>>>>>>>>>>")
        fireBase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            console.log("here + >>>>>>>>>>>>>>>>>>>>>>>>>>>")
            return fireStore.collection("users").doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            }).then(()=>{
                dispatch({ type: "SIGNUP_SUCCESS" })
            }).catch(err => {
                console.log("error >>>>>>>>>>>>>>>>>>>>>>>>>>>")
                dispatch({ type: "SIGNUP_ERROR", err })
            })
        }).catch(err => {
            console.log("error >>>>>>>>>>>>>>>>>>>>>>>>>>>")
            dispatch({ type: "SIGNUP_ERROR", err })
        })      
    }
}
