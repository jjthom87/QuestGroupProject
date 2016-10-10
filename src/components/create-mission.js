import React from 'react';

export default class Createmission extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    render() {
        return (
            <div>
                <h2>Form A New Mission!</h2>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <input type="text" placeholder="Add Task" ref="createInput" />
                    <input type="date" placeholder="Add Date" ref="createDate" />
                    <button> Add New Task </button>
                    {this.renderError()}
                </form>
            </div>
        );
    }

    renderError() {
        if(!this.state.error) {
            return null;
        }
            return <div style={{color:'red'}}> { this.state.error } </div>;
        
    }

    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        const createDate = this.refs.createDate;
        const date = createDate.value;

        if(validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createTask(task, date);
        this.refs.createInput.value = '';
        this.refs.createDate.value = '';

    }

    validateInput(task) {
        if(!task) {
            return ("Please enter a task.");
        } else if(_.find(this.props.missions, mission => mission.task === task)) {
            return ("Duplicate task exists.");
        } else {
            return null;
        }
    }
}
