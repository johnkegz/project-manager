import React, { Component, useEffect, useContext, useState } from 'react'
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
// import {graphql} from "react-apollo";
import { useMutation, useQuery, useApolloClient } from '@apollo/react-hooks';
import { ADD_PROJECT, ADD_NOTIFICATION } from '../../graphql/mutation';
import { GET_PROJECTS } from "../../graphql/queries";


export default function CreateProject(props){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [addProject] = useMutation(ADD_PROJECT)
    const [addNotification] = useMutation(ADD_NOTIFICATION)
    const client = useApolloClient()
    return (
        <div className="container">
           <form onSubmit={e=>{
               try{
               e.preventDefault();
                addProject({ variables: { userId: 1, title: title, description: description } });
                // result.then(res => client.writeData({data: res.data.addProject}));
                addNotification({ variables: {title: "created project", userId: "1"} });
                // const dat = client.readQuery({ query: GET_PROJECTS });
                // console.log("data>>>>", dat);
                // props.history.push('/dashboard');
                window.location.replace('/dashboard')
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
