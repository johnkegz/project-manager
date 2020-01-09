export const createProject = (project) => {
    return (dispatch, getState, { getFirestore, getFirebase })=>{
        console.log("project ++++", project);
        // Make async call to the database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'booju',
            authorlastName: 'Peter',
            authorId: 12348,
            createAt: new Date(),
        }).then(() => dispatch({type: 'CREATE_PROJECT', project: project})
        ).catch(error => dispatch({type: 'CREATE_PROJECT_ERROR', error}));    
    }
}