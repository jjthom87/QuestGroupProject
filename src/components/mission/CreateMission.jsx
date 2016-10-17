import React, { Component } from 'react';
import CreateTask from 'CreateTask';

export default class CreateMission extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }
    renderError() {
        if(!this.state.error) {
            return null;
        }
            return <div style={{color:'red'}}> { this.state.error } </div>;
        
    }
    handleCreate(event) {
        event.preventDefault();

        const creds = {};
        const title = this.refs.title.value;
        const description = this.refs.description.value;

        if (title.length > 0) {
            this.refs.title.value = '';
            creds.title = title;
        }

        if (description.length > 0) {
            this.refs.description.value = '';
            creds.description = description;
        }

        this.props.createMission(creds);
    }
    // validateInput(taskInput) {
    //     if(!taskInput) {
    //         return ("Please enter a task.");
    //     } else if(_.find(this.props.missions, mission => mission.taskInput === taskInput)) {
    //         return ("Duplicate task exists.");
    //     } else {
    //         return null;
    //     }
    // }
    render() {
        return (
            <div>
                <h2 className="missionTitle">Form A New Mission!</h2>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <div>
                        <input type="text" placeholder="Mission Title" ref="title" />
                    </div>
                    <div>
                        <input type="text" placeholder="Mission Description" ref="description" />
                    </div>
                    <div>
                        <input type="submit" placeholder="Add Mission" />
                    </div>
                    {this.renderError()}
                </form>
            </div>
        );
    }
}
