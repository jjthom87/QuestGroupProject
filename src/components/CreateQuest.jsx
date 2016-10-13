import React, { Component } from 'react';

export default class CreateQuest extends React.Component {
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

        const createInput = this.refs.createInput;
        const milestones = createInput.value;
        const validateInput = this.validateInput(milestones);

        const createDate = this.refs.createDate;
        const date = createDate.value;

        if(validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createMilestone(milestones, date);
        this.refs.createInput.value = '';
        this.refs.createDate.value = '';
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
    render() {
        return (
            <div>
                <h2> Build Your New Quest! </h2>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <input type="text" placeholder="Add Milestone" ref="createInput"/>
                    <input type="date" placeholder="Add Date" ref="createDate"/>
                    <button> Add New Milestone </button>
                    {this.renderError()}
                </form>
            </div>
        );
    }
}
