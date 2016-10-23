import React, { Component } from 'react';
import MainNav from 'MainNav';

export default class CreateMission extends React.Component {
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

        if (title.length > 0) {
            this.refs.title.value = '';
            creds.title = title;
        } else {
            alert('Enter Mission Title');
        }

        if (description.length > 0) {
            this.refs.description.value = '';
            creds.description = description;
        }

        if(selection){
            creds.selection = selection;
            this.setState({
                selection: ''
            })
        }

        this.props.createMission(creds);
    }
    // validateInput(taskInput) {
    //     if(!taskInput) {
    //         return ("Please enter a task.");
    //     } else if(_.find(this.props.missions, mission => mission.taskInput === taskInput)) {
    //         return ("Duplicate task exists.");
    //     } else {
    //         return null;
    //     }
    // }
    render() {
        return (
            <div>
                <h2 className="missionTitle">Form A New Mission!</h2>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <div>
                        <input type="text" placeholder="Mission Title" ref="title" />
                    </div>
                    <div>
                        <input type="text" placeholder="Mission Description" ref="description" />
                    </div>
                    <div className="publicSelection">
                        <span id="pubselectDiv">
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
                            </span>
                    </div>
                    <div>
                        <input type="submit" placeholder="Add Mission" />
                    </div>
                </form>
            </div>
        );
    }
}
