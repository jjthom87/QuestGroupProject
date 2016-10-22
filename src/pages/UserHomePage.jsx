import React, { Component } from 'react';
import { Router , browserHistory } from 'react-router';
var {Link, IndexLink} = require('react-router');
var _ = require('lodash');
import MissionsList from 'MissionsList';
import MissionMain from "MissionMain";
import QuestMain from "QuestMain";
import QuestsList from 'QuestsList';
import Logout from 'Logout';
import MainNav from 'MainNav';
var moment = require('moment');

export default class UserHomePage extends React.Component {
  	constructor(props, context) {
		super(props, context);
		this.state = {
			loginUser: '',
			fullLoginUser: '',
			missions: [],
			quests: [],
            missiontasks: [],
            milestonetasks: [],
            milestones: [],
            dropdownQuest: '',
            dropdownMission: '',
            dropdownMilestone: '',
			createdOn: ''
		};
	}
    handleDropdownMission(e){
        this.setState({
            dropdownMission: e.target.value
        })
    }
    handleDropdownQuest(e){
        this.setState({
            dropdownQuest: e.target.value
        })
    }
    handleDropdownMilestone(e){
        this.setState({
            dropdownMilestone: e.target.value
        })
    }
	logoutHandler(){
		fetch('/users/logout', {
			method: 'delete',
			headers: {
				Auth: localStorage.getItem('token'),
			},
			credentials: 'include'
		}).then((results) => {
			browserHistory.push('/');
		});
	}
	deleteMission(id){
        const { missions } = this.state;

        const deleteMission = _.remove(missions, mission => mission.id === id);

        fetch(`/mission/delete/${deleteMission[0].id}`,{
            method: 'DELETE',
            body: JSON.stringify(deleteMission),
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
        }).then((response) => response.json())
        .then((results) => {
            this.setState({
                missions: missions
            })
        }); 
    }
    deleteQuest(id){
        const { quests } = this.state;

        const deleteQuest = _.remove(quests, quest => quest.id === id);

        fetch(`/quest/delete/${deleteQuest[0].id}`,{
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
    completeMission(missionId){
        const { missions } = this.state;

        const foundMission = missions.find((mission) => mission.id === missionId);

        fetch(`/mission/complete/${completeMission.id}`,{
            method: 'PUT',
            body: JSON.stringify(completeMission),
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
        }).then((response) => response.json())
        .then((results) => {
            this.setState({
                missions: missions
            })
        }); 
    }
    completeQuest(questId){
        const { quests } = this.state;

        const foundQuest = quests.find((quest) => quest.id === questId);

        fetch(`/quest/complete/${completeQuest.id}`,{
            method: 'PUT',
            body: JSON.stringify(completeQuest),
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
    toggleMissionTask(taskId) {
        const { missiontasks } = this.state;

        const foundtask = missiontasks.find((task) => task.uuid === taskId);

        if (foundtask) {
            foundtask.isCompleted = !foundtask.isCompleted;

            fetch(`/missiontask/toggle/${foundtask.uuid}`, {
                method: 'PUT',
                body: JSON.stringify(foundtask),
                headers: {
                    Auth: localStorage.getItem('token'),
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                credentials: 'include'
            }).then((response) => response.json())
                .then((json) => {
                    this.setState({
                        missiontasks: missiontasks
                    });
                });
        }
    }
    deleteMissionTask(taskId){
        const { missiontasks } = this.state;

        const foundTask = _.remove(missiontasks, task => task.uuid === taskId);

        fetch(`/missiontask/delete/${foundTask[0].uuid}`,{
            method: 'DELETE',
            body: JSON.stringify(foundTask),
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
        }).then((response) => response.json())
            .then((results) => {
                this.setState({
                    missiontasks: missiontasks
               });
        });
    }
    toggleMilestone(milestoneId) {
        const { milestones } = this.state;

        const foundmilestone = milestones.find((milestone) => milestone.uuid === milestoneId);

        if (foundmilestone) {
            foundmilestone.isCompleted = !foundmilestone.isCompleted;

            fetch(`/milestone/toggle/${foundmilestone.uuid}`, {
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

        fetch(`/milestone/delete/${foundmilestone[0].uuid}`,{
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

            fetch(`/milestonetask/toggle/${foundmilestonetask.uuid}`, {
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

        fetch(`/milestonetask/delete/${foundmilestonetask[0].uuid}`,{
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
  	componentWillMount(){
		fetch('/home', {
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
		}).then((response) => response.json())
		.then((results) => {
			this.setState({
				fullLoginUser: results.currentUser,
				loginUser: results.currentUser.name,
				missions: results.missions,
				quests: results.quests,
                missiontasks: results.missiontasks,
                milestones: results.milestones,
                milestonetasks: results.milestonetasks
			});
		});
	}
	render() {
		const { loginUser, missions, quests, missiontasks, milestones, dropdownMission, dropdownQuest, dropdownMilestone, milestonetasks, deleteMilestoneTask, toggleMilestoneTask } = this.state;

        const filteredMission = missions.filter((mission) => dropdownMission === mission.title);
        const filteredTasks = missiontasks.filter((task) => dropdownMission === task.missionName);
        const filteredQuest = quests.filter((quest) => dropdownQuest === quest.title);
        const filteredMilestones = milestones.filter((milestone) => dropdownQuest === milestone.questName);
        const filteredMilestoneTasks = milestonetasks.filter((milestonetask) => dropdownMilestone === milestonetask.questName);

        var renderMissionDropdown = () => {
            return missions.map((mission, index) => {
                return (
                    <option value={mission.title} className="dropdown-item">{mission.title}</option>
                );  
            });
        }

        var renderQuestDropdown = () => {
            return quests.map((quest, index) => {
                return (
                    <option value={quest.title} className="dropdown-item">{quest.title}</option>
                );  
            });
        }

        var renderMilestoneDropdown = () => {
            return filteredMilestones.map((milestone, index) => {
                return (
                    <option value={milestone.milestone} className="dropdown-item">{milestone.milestone}</option>
                );  
            });
        }
    	return (
      		<div>
              <MainNav/>
                <div className='container' id="homepageDiv">
      			<h1 className="text-center" id="pageTitle">Welcome Home {loginUser}</h1>
      			<div className="row">
      				<div className="col-lg-1 col-lg-offset-5" role="group">

						
						<Link to="/completed"><button className="btn btn-info">See Completed Missions and Quests</button></Link>
                        <Link to="/searchall"><button className="btn btn-info">Find a Mission or Quest</button></Link>			
                    </div>

				</div>
    				<div className="row">
                        <div className="panel panel-success col-md-3 qmbox col-md-offset-3">
                            <select name="Please Select Mission" value={this.state.dropdownMission} onChange={this.handleDropdownMission.bind(this)}>
                                <option selected disabled>Find Mission</option>
                                {renderMissionDropdown()}
                            </select>
                            <Link to="/missionshome"><button className="btn btn-info" id="missionAdd"><span className="glyphicon glyphicon-plus" ></span></button></Link>
                            <MissionsList
                                missions={filteredMission}
                                missiontasks={filteredTasks}
                                toggleMissionTask={this.toggleMissionTask.bind(this)}
                                deleteMission={this.deleteMission.bind(this)}
                                completeMission={this.completeMission.bind(this)}
                                deleteMissionTask={this.deleteMissionTask.bind(this)}
                            />
                        </div>
                        <div className="panel panel-success col-md-3 qmbox">
                            <select name="Please Select Quest" value={this.state.dropdownQuest} onChange={this.handleDropdownQuest.bind(this)}>
                                <option selected disabled>Find Quest</option>
                                {renderQuestDropdown()}
                            </select>
                            <select name="Please Select Milestone" value={this.state.dropdownMilestone} onChange={this.handleDropdownMilestone.bind(this)}>
                                <option selected disabled>Find Milestone</option>
                                {renderMilestoneDropdown()}
                            </select>
                            <Link to="/questshome"><button className="btn btn-info" id="missionAdd"><span className="glyphicon glyphicon-plus" ></span></button></Link>
                            <QuestsList
                                quests={filteredQuest}
                                milestones={filteredMilestones}
                                milestonetasks={filteredMilestoneTasks}
                                deleteQuest={this.deleteQuest.bind(this)}
                                completeQuest={this.completeQuest.bind(this)}
                                deleteMilestone={this.deleteMilestone.bind(this)}
                                toggleMilestoneTask={this.toggleMilestoneTask.bind(this)}
                                deleteMilestoneTask={this.deleteMilestoneTask.bind(this)}
                            />
                        </div>
    		            <div className="col-md-3">
    		            </div>
    		        </div>
                </div> 
      		</div>
		);
	}
}