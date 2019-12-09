import React from 'react'
import { NavLink } from 'react-router-dom';

export default function SignedInLink() {
    return (
        <nav className="nav-wrapper grey darken-3">
            <ul className="right ">
                <li><NavLink to="/" >New Project</NavLink></li>
                <li><NavLink to="/" >Log Out</NavLink></li>
                <li><NavLink to="/" className="btn btn-floating blue lighten-10">NN</NavLink></li>
            </ul>
        </nav>
    )
}
