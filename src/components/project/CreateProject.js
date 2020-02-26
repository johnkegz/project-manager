import React, { Component, useEffect, useContext, useState } from 'react'
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
// import {graphql} from "react-apollo";
import { useMutation } from '@apollo/react-hooks';
import { ADD_PROJECT } from '../../graphql/mutation';


export default function CreateProject(props){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [addProject] = useMutation(ADD_PROJECT)
    return (
        <div className="container">
           <form onSubmit={e=>{
               try{
               e.preventDefault();
                addProject({ variables: { userId: 1, title: title, description: description } });
                props.history.push('/');
               }catch(e){
                   console.log("e++++", e)
               }
           }} className="white">
                <h5 className="grey-text text-darken-3">Create New Project</h5>
                <div className="input-field">
                    <label htmlFor="title">title</label>
                    <input type="text" id='title' onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="title">content</label>
                    <textarea id="content" cols="90" rows="10" onChange={e => setDescription(e.target.value)} className="materialize-textarea"></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create project</button>
                </div>
           </form> 
        </div>
    ) 
}
