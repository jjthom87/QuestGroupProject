import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from 'react-bootstrap';

export default class CreateTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mission: ''
        };
    }
    handleCreateTask(event) {
        event.preventDefault();

        const taskInput = this.refs.taskInput.value;

        if (taskInput.length > 0) {
            this.refs.taskInput.value = '';
        }
        this.props.createTask(taskInput);
    }
    render() {
        var renderTaskForm = () => {
                return (
                    <div>
                        <form onSubmit={this.handleCreateTask.bind(this)}>
                            <input type="text" placeholder="Create Task" ref="taskInput" />
                            <input type="submit" value="Add Task"/>
                        </form>
                    </div>
                );
        }
        return (
            <div>
                {renderTaskForm()}
            </div>
        );
    } 
}