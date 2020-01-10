export const createProject = (project) => {
    return (dispatch, getState, { getFirestore, getFirebase })=>{
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        console.log("profile $ id", profile, authorId);
        // Make async call to the database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createAt: new Date(),
        }).then(() => dispatch({type: 'CREATE_PROJECT', project: project})
        ).catch(error => dispatch({type: 'CREATE_PROJECT_ERROR', error}));    
    }
}