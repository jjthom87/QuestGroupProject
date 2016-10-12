import React, { Component, cloneElement } from 'react';

class Createmission extends Component {
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

    render() {
        return (
            <div>
                <h2>Form A New Mission!</h2>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <input type="text" placeholder="Add Task" ref="createInput" />
                    <input type="submit" placeholder="Add Mission" />
                    {this.renderError()}
                </form>
            </div>
        );
    }

    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const taskInput = createInput.value;
        const validateInput = this.validateInput(taskInput);

        }
    }
    renderError() {
        if(!this.state.error) {
            return null;
        }
            return <div style={{color:'red'}}> { this.state.error } </div>;
        
    }
    handleCreate(event) {
        event.preventDefault();


        this.setState({ error: null });
        this.props.createTask(taskInput);
        this.refs.createInput.value = '';

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
                <h2>Form A New Mission!</h2>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <input type="text" placeholder="Enter Mission" ref="description" />
                    <input type="submit" placeholder="Add Mission" />
                    {this.renderError()}
                </form>
            </div>
        );
    }
}

