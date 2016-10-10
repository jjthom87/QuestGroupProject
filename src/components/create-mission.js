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
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="what task?" ref="createInput"/>
                <button> create task </button>
                {this.renderError()}
            </form>
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

        if(validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createTask(task);
        this.refs.createInput.value = '';
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
