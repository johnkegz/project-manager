import React from 'react'
import { NavLink } from 'react-router-dom';

export default function SignedOutLinks() {
    return (
        <nav className="nav-wrapper grey darken-3">
            <ul className="right ">
                <li><NavLink to="/" >sign up</NavLink></li>
                <li><NavLink to="/" >login</NavLink></li>
            </ul>
        </nav>
    )
}
