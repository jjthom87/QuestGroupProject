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
    // validateInput(milestone) {
    //     if(!milestone) {
    //         return ("Please enter a milestones.");
    //     } else if(_.find(this.props.quests, quest => quest.milestone === milestone)) {
    //         return ("Duplicate milestones exists.");
    //     } else {
    //         return null;
    //     }
    // }
    render() {
        return (
            <div>
                <h2 className="missionTitle">Form A New Quest!</h2>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <div>
                        <input type="text" placeholder="Quest Title" ref="title" />
                    </div>
                    <div>
                        <input type="text" placeholder="Quest Description" ref="description" />
                    </div>
                    <div>
                        <input type="submit" placeholder="Add Quest" />
                    </div>
                    {this.renderError()}
                </form>
            </div>
        );
    }
}
