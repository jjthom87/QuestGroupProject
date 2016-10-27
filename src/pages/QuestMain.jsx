import React, { Component } from 'react';
var {Link, IndexLink} = require('react-router');
import { Router , browserHistory } from 'react-router';
import QuestsList from 'QuestsList';
import CreateQuest from 'CreateQuest';
import CreateMilestone from 'CreateMilestone';
import CreateMilestoneTask from 'CreateMilestoneTask';
import MainNav from 'MainNav';
import QuestListforQM from 'QuestListforQM';
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
    completeQuest(questId){
        const { quests } = this.state;

        const completeQuest = _.remove(quests, quest => quest.id === questId);

        const data = {
            completeQuest,
            completedOn: moment().format('MMM Do YYYY @ h:mm a')
        }

        fetch(`/api/quest/complete/${completeQuest[0].id}`,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
        }).then((response) => response.json())
        .then((results) => {
            this.setState({
                quests: quests
            })
        }); 
    }
    deleteQuest(id){
        const { quests } = this.state;

        const deleteQuest = _.remove(quests, quest => quest.id === id);

        fetch(`/api/quest/delete/${deleteQuest[0].id}`,{
            method: 'DELETE',
            body: JSON.stringify(deleteQuest),
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
        }).then((response) => response.json())
        .then((results) => {
            this.setState({
                quests: quests
            })
        }); 
    }
    toggleMilestone(milestoneId) {
        const { milestones } = this.state;

        const foundmilestone = milestones.find((milestone) => milestone.uuid === milestoneId);

        if (foundmilestone) {
            foundmilestone.isCompleted = !foundmilestone.isCompleted;

            fetch(`/api/milestone/toggle/${foundmilestone.uuid}`, {
                method: 'PUT',
                body: JSON.stringify(foundmilestone),
                headers: {
                    Auth: localStorage.getItem('token'),
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                credentials: 'include'
            }).then((response) => response.json())
                .then((json) => {
                    this.setState({
                        milestones: milestones
                    });
                });
        }
    }
    deleteMilestone(milestoneId){
        const { milestones } = this.state;

        const foundmilestone = _.remove(milestones, milestone => milestone.uuid === milestoneId);

        fetch(`/api/milestone/delete/${foundmilestone[0].uuid}`,{
            method: 'DELETE',
            body: JSON.stringify(foundmilestone),
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json' 
            },
            credentials: 'include'
        }).then((response) => response.json())
            .then((results) => {
                this.setState({
                    milestones: milestones
               });
        });
    }
    toggleMilestoneTask(milestoneTaskId) {
        const { milestonetasks } = this.state;

        const foundmilestonetask = milestonetasks.find((milestonetask) => milestonetask.uuid === milestoneTaskId);

        if (foundmilestonetask) {
            foundmilestonetask.taskCompleted = !foundmilestonetask.taskCompleted;

            fetch(`/api/milestonetask/toggle/${foundmilestonetask.uuid}`, {
                method: 'PUT',
                body: JSON.stringify(foundmilestonetask),
                headers: {
                    Auth: localStorage.getItem('token'),
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                credentials: 'include'
            }).then((response) => response.json())
                .then((json) => {
                    this.setState({
                        milestonetasks: milestonetasks
                    });
                });
        }
    }
    deleteMilestoneTask(milestonetaskId){
        const { milestonetasks } = this.state;

        const foundmilestonetask = _.remove(milestonetasks, milestonetask => milestonetask.uuid === milestonetaskId);

        fetch(`/api/milestonetask/delete/${foundmilestonetask[0].uuid}`,{
            method: 'DELETE',
            body: JSON.stringify(foundmilestonetask),
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json' 
            },
            credentials: 'include'
        }).then((response) => response.json())
            .then((results) => {
                this.setState({
                    milestonetasks: milestonetasks
               });
        });
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
                if(results === 'Please Select Quest to add Milestone to'){
                    alert('Please Select Quest to add Milestone to');
                } else {
                this.setState({
                    milestones: milestones.concat(results)
                });
            }
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
                console.log(results);
                if(results === 'Please Select Quest to add task to'){
                    alert('Please Select Quest to add Task to');
                } else if(results === 'Please Select Milestone to add task to'){
                    alert('Please Select Milestones to add task to')
                } else if(results === 'Please Select Quest and Milestone to add task to'){
                    alert('Please Select Quest and Milestone to add task to')
                } else {
                this.setState({
                    milestonetasks: milestonetasks.concat(results)
                });
            }
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
            this.setState({
                quests: results.quests,
                milestones: results.milestones,
                milestonetasks: results.milestonetasks
            });
        });   
    }
    render() {
        const { quests, milestones, milestonetasks, dropdownQuest, dropdownMilestone, deleteMilestone, deleteMilestoneTask, toggleMilestoneTask } = this.state;

        const filteredQuest = quests.filter((quest) => dropdownQuest === quest.title);
        const filteredMilestones = milestones.filter((milestone) => dropdownQuest === milestone.questName); 
        const filteredMilestoneTasks = milestonetasks.filter((milestonetask) => dropdownQuest === milestonetask.questName);

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
                    
                            <h1 id="pageHeader">Quest Page</h1>
                            <h2 className="text-center" id="pageDescription">
                                Add a Quest or select a previously added one from the dropdown
                            </h2>
                            <h2 className="text-center" id="pageDescription">
                                Next, add a Milestone/Milestones or select a previously added one from the dropdown needed to complete that Quest
                            </h2>
                            <h2 className="text-center" id="pageDescription">
                                Then, add a Task/Tasks needed to complete that Milestone
                            </h2>
                            <h2 className="text-center" id="pageDescription">
                                You're done. Make sure to track your progress
                            </h2>
                            <br></br>
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
                                <CreateMilestoneTask milestonetasks={milestonetasks} createMilestoneTask={this.handleCreateMilestoneTask.bind(this)}/>
                            </div>
                            <div className="col-md-4 col-md-offset-1" id="missionlistdiv">
                            <QuestListforQM
                                quests={filteredQuest}
                                milestones={filteredMilestones}
                                milestonetasks={filteredMilestoneTasks}
                                deleteQuest={this.deleteQuest.bind(this)}
                                completeQuest={this.completeQuest.bind(this)}
                                toggleMilestone={this.toggleMilestone.bind(this)}
                                deleteMilestone={this.deleteMilestone.bind(this)}
                                toggleMilestoneTask={this.toggleMilestoneTask.bind(this)}
                                deleteMilestoneTask={this.deleteMilestoneTask.bind(this)}/>
                            </div>
                        </div>
                </div>
            </div>
         );
    }
}