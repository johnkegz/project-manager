import React from 'react'
import { NavLink } from 'react-router-dom';

export default function SignedOutLinks() {
    return (
        <nav className="nav-wrapper grey darken-3">
            <ul className="right ">
                <li><NavLink to="/signup" >sign up</NavLink></li>
                <li><NavLink to="/signin" >login</NavLink></li>
            </ul>
        </nav>
    )
}
