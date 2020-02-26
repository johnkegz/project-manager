import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../project/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { GET_PROJECTS } from "../../graphql/queries";
import { useQuery } from "@apollo/react-hooks";

export function DashBoard(){
  // render() {
    // const { projects, auth, notifications } = this.props;
    const { loading, error, data } = useQuery(GET_PROJECTS);
    
    // if (!auth.uid) return <Redirect to='/signin' />;
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    console.log("data >>", data)
    return (
      <div className='dashboard container'>
        <div className='row'>
          <div className='col s12 m6'>
            <ProjectList projects={data} />
            {/* <ProjectList projects={projects} /> */}
          </div>
          <div className='col s12 m5 offset-m1'>
            {/* <Notification notifications={notifications} /> */}
          </div>
        </div>
      </div>
    );
  // }
}

const mapStateToProps = state => {
  return {
    // projects: state.projects.projects
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ["createAt", "desc"] },
    { collection: "notifications", orderBy: ["time", "desc"] },
    { collection: "users" }
  ])
)(DashBoard);
