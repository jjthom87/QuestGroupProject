import React, { Component } from 'react';

export default class CreateTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	error: ''
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

        const taskInput = this.refs.taskInput.value;
        const validateInput = this.validateInput(taskInput);

        if(validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        if (taskInput.length > 0) {
			this.refs.taskInput.value = '';
			this.setState({ error: null });
		}
        this.props.createTask(taskInput);
    }
    validateInput(taskInput) {
        if(!taskInput) {
            return ("Please enter a task.");
        } else if(_.find(this.props.tasks, task => task.taskInput === taskInput)) {
            return ("Duplicate task exists.");
        } else {
            return null;
        }
    }
    render() {
        return (
            <div>
	            <form onSubmit={this.handleCreate.bind(this)}>
	                <input type="text" placeholder="Create Task" ref="taskInput" />
	                <input type="submit" placeholder="Add Task" />
	                {this.renderError()}
	            </form>
            </div>
        );
    }
}