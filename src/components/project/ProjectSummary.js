import React from 'react'

export default function ProjectSummary({project}) {
    return (
        <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <div className="card-title">{project.title}</div>
                    <p>Posted by {project.user.firstName} {project.user.lastName}</p>
                    <p className="grey-text">{project.time}</p>
                </div>
            </div>
    )
}
