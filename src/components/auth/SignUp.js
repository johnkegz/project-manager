import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../../graphql/mutation";

export function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.sigUp({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password
    });
  };
  //   const handleOnChange = e => {
  //     setState({
  //       [e.target.id]: e.target.value
  //     });
  //   };
  const { auth, authError, newUser } = props;

  const [addUser] = useMutation(ADD_USER);

  if (newUser) {
    console.log("????????", newUser);
    return addUser({
      variables: {
        password: newUser.password,
        firstName: newUser.firstName,
        lastName: newUser.lastName
      }
    });
  }

  console.log("Auth ---", auth);
  // if (auth.uid) return <Redirect to="/" />
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='white'>
        <h5 className='grey-text text-darken-3'>Sign In</h5>
        <div className='input-field'>
          <label htmlFor='firstName'>FirstName</label>
          <input
            type='text'
            id='firstName'
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className='input-field'>
          <label htmlFor='lastName'>LastName</label>
          <input
            type='text'
            id='lastName'
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className='input-field'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='input-field'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className='input-field'>
          <button className='btn pink lighten-1 z-depth-0'>Login</button>
        </div>
        <div className='red-text center'>
          {authError ? <p>{authError}</p> : null}
        </div>
      </form>
    </div>
  );
}
const mapStateToProps = state => {
  console.log("state >>>>>+++++", state);
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
    newUser: state.auth.newUser
  };
};

const mapDispatchTopProps = dispatch => {
  return {
    sigUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchTopProps)(SignUp);
