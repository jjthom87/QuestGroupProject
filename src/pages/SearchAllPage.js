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

export default class UserHomePage extends React.Component {
  	constructor(props, context) {
		super(props, context);
		this.state = {
			loginUser: '',
			fullLoginUser: '',
			missions: [],
			quests: [],
            tasks: [],
            milestones: [],
            dropdownQuest: '',
            dropdownMission: '',
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
  	componentWillMount(){
		fetch('/searchall', {
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
                tasks: results.tasks,
                milestones: results.milestones
			});
		});
	}
	render() {
		const { loginUser, missions, quests, tasks, milestones, dropdownMission, dropdownQuest } = this.state;

        const filteredMission = missions.filter((mission) => dropdownMission === mission.title);
        const filteredTasks = tasks.filter((task) => dropdownMission === task.missionName);
        const filteredQuest = quests.filter((quest) => dropdownQuest === quest.title);
        const filteredMilestones = milestones.filter((milestone) => dropdownQuest === milestone.questName);

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
    	return (
      		<div>
              <MainNav/>
                <div className='container' id="homepageDiv">
      			<h1 className="text-center" id="pageTitle">Welcome Home {loginUser}</h1>
      			<div className="row">
      				<div className="col-lg-1 col-lg-offset-5" role="group">
						<button className="btn btn-info"><Link to="/missionshome">Create a Mission</Link></button>
						<button className="btn btn-info"><Link to="/questshome">Create a Quest</Link></button>
					</div>
				</div>
    				<div className="row">
    					<div className="col-md-3">
    					</div>
                        <div className="panel panel-success col-md-3 qmbox">
                            <select name="Please Select Mission" value={this.state.dropdownMission} onChange={this.handleDropdownMission.bind(this)}>
                                <option selected disabled>Find Mission</option>
                                {renderMissionDropdown()}
                            </select>
                            <MissionsList
                                missions={filteredMission}
                                tasks={filteredTasks}
                                toggleTask={this.toggleTask.bind(this)}
                                deleteMission={this.deleteMission.bind(this)}
                                deleteTask={this.deleteTask.bind(this)}
                            />
                        </div>
                        <div className="panel panel-success col-md-3 qmbox">
                            <select name="Please Select Quest" value={this.state.dropdownQuest} onChange={this.handleDropdownQuest.bind(this)}>
                                <option selected disabled>Find Quest</option>
                                {renderQuestDropdown()}
                            </select>
                            <QuestsList
                                quests={filteredQuest}
                                milestones={filteredMilestones}
                                toggleMilestone={this.toggleMilestone.bind(this)}
                                deleteQuest={this.deleteQuest.bind(this)}
                                deleteMilestone={this.deleteMilestone.bind(this)}
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