const initialState = {
    projects: [
        {id:1, title:'Try one', content:'bubu buu bubu bubub'},
        {id:2, title:'Try two', content:'bubu buu bub bubub'},
        {id:3, title:'Try three', content:'bubu buu bubu bubub'},
        {id:4, title:'Try four', content:'bubu buu bubub'}
    ]
}
export default (state=initialState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('project created oo', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('project created oo', action.error);
            return state;
        default:
            return state;
    }
    // return state;
}
