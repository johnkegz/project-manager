import React from 'react'
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function ProjectList({projects}) {
    console.log("::::::::", projects)

    
    return (
        <div className="project-list section">
           {projects && projects.projects.map(project =>{
               console.log("????" , typeof moment(parseInt(project.createdAt)).calendar())
            project.time = moment(parseInt(project.createdAt)).calendar();
               return (
                <Link to={`/projects/${project.id}`} key={project.id }>
                    <ProjectSummary project={project}/>
                </Link>
                   )
           }
           ) }
        </div>
    )
}
