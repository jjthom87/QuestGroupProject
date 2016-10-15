import React, { Component } from 'react';

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

        const missionInput = this.refs.createMission.value;
        const validateInput = this.validateInput(missionInput);


        if(validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createMission(missionInput);
        this.refs.createMission.value = '';

    }
    validateInput(taskInput) {
        if(!taskInput) {
            return ("Please enter a task.");
        } else if(_.find(this.props.missions, mission => mission.taskInput === taskInput)) {
            return ("Duplicate task exists.");
        } else {
            return null;
        }
    }
    render() {
        return (
            <div>
                <h2 className="missionTitle">Form A New Mission!</h2>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <input type="text" placeholder="Add Task" ref="createMission" />
                    <input type="submit" placeholder="Add Mission" />
                    {this.renderError()}
                </form>
            </div>
        );
    }
}
