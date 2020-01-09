import React, { Component } from 'react'
import { connect } from 'react-redux';
import {signIn} from "../../store/actions/authActions";

export class SignIn extends Component {
    state={
        email: '',
        password: ''
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.signIn(this.state)
        // console.log(this.state );
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
        console.log("props ++", this.props)
        return (
            <div className="container">
               <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={this.handleOnChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={this.handleOnChange}/>
                    </div>
                    <div className="input-field">
                        <input type="submit" value="submit" className="btn pink lighten-1 z-depth-0" />
                    </div>
                    <div className="red-text center">
                        {this.props.auth ? this.props.auth: null}
                    </div>
               </form> 
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

const mapStateToProps = state => {
    console.log('state.auth.authError +++', state);
    return {
        auth: state.auth.authError
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
