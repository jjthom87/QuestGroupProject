import React from 'react';

export default class Createquest extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    render() {
        return (
            <div>
                <h2> Build Your New Quest! </h2>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <input type="text" placeholder="Add A Milestone!" ref="createInput"/>
                    <button> Add Milestone </button>
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
        const milestones = createInput.value;
        const validateInput = this.validateInput(milestones);

        if(validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createMilestone(milestones);
        this.refs.createInput.value = '';
    }

    validateInput(milestone) {
        if(!milestone) {
            return ("Please enter a milestones.");
        } else if(_.find(this.props.quests, quest => quest.milestone === milestone)) {
            return ("Duplicate milestones exists.");
        } else {
            return null;
        }
    }
}
