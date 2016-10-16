import React, { Component } from 'react';
var {Link, IndexLink} = require('react-router');
import QuestsList from 'QuestsList';
import CreateQuest from 'CreateQuest';
import UserHomePage from 'UserHomePage';

export default class QuestMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quests: []
        };
    }
    createQuest(description) {
        const { quests } = this.state;
        
        const newQuest = {
            description
        }
        fetch('/quest/create', {
            method: 'post',
            body: JSON.stringify(newQuest),
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
        }).then((response) => response.json())
            .then((results) => {
                this.setState({
                    quests: quests.concat(results)
                });
            });
    }
    render() {
        return (
            <div>
            <div className="container" id="separator">
                <div className="row">
                    <div className="col-md-1">
                        <button className="btn btn-warning"><Link to="/home">Back Home</Link></button>
                    </div>
                </div>
                <h1 id="pageTitle">Quests Home</h1>
                <CreateQuest
                    quests={this.props.quests}
                    createQuest={this.createQuest.bind(this)}
                />  
            </div>     
            </div>
         )
    }
}