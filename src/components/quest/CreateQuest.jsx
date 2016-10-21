import React, { Component } from 'react';
import MainNav from 'MainNav';


export default class CreateQuest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            selection: ''
        };
    }
    handleRadio(e){
        this.setState({
            selection: e.target.value
        })
    }
    renderError() {
        if(!this.state.error) {
            return null;
        }
            return <div style={{color:'red'}}> { this.state.error } </div>;
        
    }
    handleCreate(event) {
        event.preventDefault();

        const { selection } = this.state;

        const creds = {};
        const title = this.refs.title.value;
        const description = this.refs.description.value;
        const dateQuest = this.refs.dateQuest.value;

        if (title.length > 0) {
            this.refs.title.value = '';
            creds.title = title;
        } else {
            alert('Enter Quest Title');
        }

        if (description.length > 0) {
            this.refs.description.value = '';
            creds.description = description;
        } else {
            alert('Enter Quest Description');
        }

        if(selection){
            creds.selection = selection
        } else {
            alert('Please choose an option for public');
        }

        creds.dateQuest = dateQuest;

        this.props.createQuest(creds);
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
                        <p className="publicSelection">Expected Completion Date</p>
                        <input type="date" ref="dateQuest" />
                    </div>
                    <div className="publicSelection">
                        <p className="publicText">Public</p>
                            <p className="publicSelect">Yes
                            <input 
                                className="yesPublic" 
                                type="radio" 
                                value="Yes" 
                                name="publicChoice"
                                checked={this.state.selection === "Yes"} 
                                onChange={this.handleRadio.bind(this)}
                            />
                            No
                            <input 
                                className="noPublic" 
                                type="radio" 
                                value="No" 
                                name ="publicChoice"
                                checked={this.state.selection === "No"} 
                                onChange={this.handleRadio.bind(this)}
                            />
                            </p>
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
