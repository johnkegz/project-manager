import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../project/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { GET_PROJECTS, GET_NOTIFICATIONS } from "../../graphql/queries";
import { useQuery, useApolloClient } from "@apollo/react-hooks";

export function DashBoard(props){
    const { loading, error, data: projects } = useQuery(GET_PROJECTS);
    const { loading: notificationsLoading, error: notificationsError, data: notifications } = useQuery(GET_NOTIFICATIONS);
    const client = useApolloClient()
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
 
    const dat = client.readQuery({ query: GET_PROJECTS });
    console.log("data>>>>", dat);

    return (
      <div className='dashboard container'>
        <div className='row'>
          <div className='col s12 m6'>
            <ProjectList projects={projects} />
          </div>
          <div className='col s12 m5 offset-m1'>
            <Notification notifications={notifications} />
          </div>
        </div>
      </div>
    );
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
