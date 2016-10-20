import React, { Component } from 'react';
var {Link, IndexLink} = require('react-router');
import QuestsList from 'QuestsList';
import CreateQuest from 'CreateQuest';
import CreateMilestone from 'CreateMilestone';
import MainNav from 'MainNav';

export default class QuestMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quests: [],
            milestones: [],
            dropdownItem: ''
        };
    }
    handleDropdownChange(e){
        this.setState({
            dropdownItem: e.target.value
        })
    }
    createQuest(creds) {
        const { quests } = this.state;
        
        const newQuest = {
            title: creds.title,
            description: creds.description
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
    handleCreateMilestone(milestoneInput){
        const { milestones, dropdownItem } = this.state;

        const newMilestone = {
            milestone: milestoneInput,
            dropdownItem: dropdownItem
        }
        fetch('/milestone/create/', {
            method: 'post',
            body: JSON.stringify(newMilestone),
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
        }).then((response) => response.json())
            .then((results) => {
                this.setState({
                    milestones: milestones.concat(results)
                });
            });
    }
    componentWillMount(){
        const { quests } = this.state;

        fetch('/questhome', {
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
        const { quests } = this.state; 

        var renderQuestDropdown = () => {
            return quests.map((quest, index) => {
                return (
                    <option value={quest.title} className="dropdown-item">{quest.title}</option>
                );  
            });
        }
        return (
            <div>
                <MainNav />
                <div className="container" id="separator">
                    <div className="row">
                        <div className="col-md-1">
                            <Link to="/home"><button className="btn btn-warning">Back Home</button></Link>
                        </div>
                    </div>
                    <h1 id="pageTitle">Quests Home</h1>
                    <CreateQuest
                        quests={quests}
                        createQuest={this.createQuest.bind(this)}
                    />
                    <select name="Please Select Quest to add Milestone to" value={this.state.dropdownItem} onChange={this.handleDropdownChange.bind(this)}>
                        <option selected disabled>Choose Quest to add Milestone to</option>
                        {renderQuestDropdown()}
                    </select>
                    <CreateMilestone createMilestone={this.handleCreateMilestone.bind(this)}/>
                </div>
            </div>
         );
    }
}