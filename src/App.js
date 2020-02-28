import React, {useContext, useReducer} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import DashBoard from './components/dashboard/DashBoard';
import ProjectDetails from './components/project/ProjectDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/project/CreateProject';

import Context from './context'
import reducer from './reducer'

function App() {
  const initialState = useContext(Context)
  const [state,dispatch] = useReducer(reducer, initialState)
  return (
    <BrowserRouter>
    <Context.Provider value={{state, dispatch}}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/projects/:id" component={ProjectDetails} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/createproject" component={CreateProject} />
      </Switch>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
