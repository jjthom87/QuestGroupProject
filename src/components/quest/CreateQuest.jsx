import React, { Component } from 'react';
import MainNav from 'MainNav';


export default class CreateQuest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        const dateQuest = this.refs.dateQuest.value;

        if (title.length > 0) {
            this.refs.title.value = '';
            creds.title = title;
        } else {
            alert('Be Sure Enter Quest Title');
        }

        if (description.length > 0) {
            this.refs.description.value = '';
            creds.description = description;
        } else {
            alert('Be Sure Enter Quest Description');
        }

        if(selection){
            this.setState({
                selection: ''
            })
            creds.selection = selection
        }

        creds.dateQuest = dateQuest;

        this.props.createQuest(creds);
    }
    render() {
        return (
            <div>
                <h2 className="missionTitle">Quest Time!</h2>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <div>
                        <input type="text" placeholder="Quest Title" ref="title" />
                    </div>
                    <div>
                        <input type="text" placeholder="Quest Description" ref="description" />
                    </div>
                    <div>
                        <p className="publicSelect">Expected Completion Date</p>
                        <br></br>
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
                        <input type="submit" value="Add Quest" />
                    </div>
                </form>
            </div>
        );
    }
}
