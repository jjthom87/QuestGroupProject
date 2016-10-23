import React, { Component } from 'react';
var {Link, IndexLink} = require('react-router');
import QuestsList from 'QuestsList';
import CreateQuest from 'CreateQuest';
import CreateMilestone from 'CreateMilestone';
import CreateMilestoneTask from 'CreateMilestoneTask';
import MainNav from 'MainNav';
var moment = require('moment');

export default class QuestMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quests: [],
            milestones: [],
            dropdownQuest: '',
            milestonetasks: [],
            dropdownMilestone: '',
            createdOn: ''
        };
    }
    handleDropdownQuestChange(e){
        this.setState({
            dropdownQuest: e.target.value
        })
    }
    handleDropdownMilestoneChange(e){
        this.setState({
            dropdownMilestone: e.target.value
        })
    }
    createQuest(creds) {
        const { quests } = this.state;
        
        const newQuest = {
            title: creds.title,
            description: creds.description,
            selection: creds.selection,
            dateQuest: creds.dateQuest,
            createdOn: moment().format('MMM Do YYYY @ h:mm a')
        }
        fetch('/api/quest/create', {
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
        const { milestones, dropdownQuest } = this.state;

        const newMilestone = {
            milestone: milestoneInput,
            dropdownQuest: dropdownQuest,
        }
        fetch('/api/milestone/create/', {
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
    handleCreateMilestoneTask(milestoneTaskInput){
        const { milestonetasks, dropdownQuest, dropdownMilestone } = this.state;

        const newMilestoneTask = {
            milestonetask: milestoneTaskInput.task,
            dropdownMilestone: dropdownMilestone,
            dropdownQuest: dropdownQuest
        }
        fetch('/api/milestonetask/create/', {
            method: 'post',
            body: JSON.stringify(newMilestoneTask),
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
        }).then((response) => response.json())
            .then((results) => {
                this.setState({
                    milestonetasks: milestonetasks.concat(results)
                });
            });
    }
    componentWillMount(){
        const { quests, milestones, milestonetasks } = this.state;

        fetch('/api/questhome', {
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
        }).then((response) => response.json())
        .then((results) => {
            console.log(results);
            this.setState({
                quests: results.quests,
                milestones: results.milestones
            });
        });   
    }
    render() {
        const { quests, milestones, milestonetasks, dropdownQuest } = this.state;

        const filteredMilestones = milestones.filter((milestone) => dropdownQuest === milestone.questName); 

        var renderQuestDropdown = () => {
            return quests.map((quest, index) => {
                return (
                    <option key={index} value={quest.title} className="dropdown-item">{quest.title}</option>
                );  
            });
        }

        var renderMilestoneDropdown = () => {
            return filteredMilestones.map((milestone, index) => {
                return (
                    <option key={index} value={milestone.milestone} className="dropdown-item">{milestone.milestone}</option>
                );
            })
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
                        <div className="row">    
                            <div className="col-md-5 col-md-offset-1" id="missionForm">
                                <CreateQuest
                                    quests={quests}
                                    createQuest={this.createQuest.bind(this)}
                                />
                                <select name="Please Select Quest to add Milestone to" value={this.state.dropdownQuest} onChange={this.handleDropdownQuestChange.bind(this)}>
                                    <option selected disabled>Choose Quest to add Milestone to</option>
                                    {renderQuestDropdown()}
                                </select>
                                <CreateMilestone milestones={milestones} createMilestone={this.handleCreateMilestone.bind(this)}/>
                                <select name="Please Select Milestone to add Task to" value={this.state.dropdownMilestone} onChange={this.handleDropdownMilestoneChange.bind(this)}>
                                    <option selected disabled>Choose Milestone to Add Task to</option>
                                    {renderMilestoneDropdown()}
                                </select>
                                <CreateMilestoneTask createMilestoneTask={this.handleCreateMilestoneTask.bind(this)}/>
                            </div>
                        </div>
                </div>
            </div>
         );
    }
}