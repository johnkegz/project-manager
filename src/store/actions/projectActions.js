export const createProject = (project) => {
    return (dispatch, getState)=>{
        // Make async call to the database
        dispatch({type: 'CREATE_PROJECT', project: project})   
    }
}