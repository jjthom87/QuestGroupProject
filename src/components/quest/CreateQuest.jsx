import React, { Component } from 'react';
import MainNav from 'MainNav';


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

        const quest = this.refs.createQuest.value;
        const validateInput = this.validateInput(quest);

        if(validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createQuest(quest);
        this.refs.createQuest.value = '';
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
            <MainNav/>
                <h2> Build Your New Quest! </h2>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <input type="text" placeholder="Add Quest" ref="createQuest"/>
                    <button> Add New Quest </button>
                    {this.renderError()}
                </form>
            </div>
        );
    }
}
