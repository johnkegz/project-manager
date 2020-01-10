import React from 'react'
import { Link } from 'react-router-dom';
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from 'react-redux';

function Navbar(props) {
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks profile={props.profile}/> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Project manager</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    console.log("state +++", state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);
