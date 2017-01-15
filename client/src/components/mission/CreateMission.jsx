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
            alert('Be Sure Enter Mission Title');
        }

        if (description.length > 0) {
            this.refs.description.value = '';
            creds.description = description;
        } else {
            alert('Be Sure Enter Mission Description');
        }

        if(selection){
            creds.selection = selection;
            this.setState({
                selection: ''
            })
        }

        this.props.createMission(creds);
    }
    render() {
        return (
            <div>
                <h2 className="missionTitle">Mission Time!</h2>
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
                        <input type="submit" value="Add Mission" />
                    </div>
                </form>
            </div>
        );
    }
}
