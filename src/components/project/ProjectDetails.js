import React from 'react'

export default function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Enim qui sunt commodo aute anim veniam. Officia nisi cillum nisi ea exercitation deserunt tempor anim consequat tempor qui fugiat esse fugiat. Consectetur aliqua labore consectetur consequat aliqua consectetur enim consectetur aliqua ut voluptate minim dolore ea. Aliqua eiusmod voluptate ipsum nisi quis quis magna sunt voluptate culpa reprehenderit eiusmod aliquip eiusmod.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div >Posted by the next Ninja</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}
