import React, { Component } from 'react'

export class CreateProject extends Component {
    state={
        title: '',
        content: ''
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state );
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
        return (
            <div className="container">
               <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">title</label>
                        <input type="text" id='title' onChange={this.handleOnChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="title">content</label>
                        <textarea id="content" cols="90" rows="10" onChange={this.handleOnChange} className="materialize-textarea"></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create project</button>
                    </div>
               </form> 
            </div>
        )
    }
}

export default CreateProject;
