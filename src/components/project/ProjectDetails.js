import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

function ProjectDetails(props) {
  const id = props.match.params.id;
  console.log("project >>", props.project);
  const { project } = props;
  if (project) {
    return (
      <div className='container section project-details'>
        <div className='card z-depth-0'>
          <div className='card-content'>
            <span className='card-title'>{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className='card-action gret lighten-4 grey-text'>
            <div>{project.authorFirstName} {project.authorlastName}</div>
            <div>{project.createAt}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className='container'>Loading...</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("state map ++", state);

  const id = ownProps.match.params.id;
  console.log("ownProps map ++", id);
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
