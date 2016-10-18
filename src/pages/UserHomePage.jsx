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
            dropdownMission: '',
			createdOn: '',
            oneMissionAndTasks: [],
		};
	}
    handleDropdownMission(e){
        this.setState({
            dropdownMission: e.target.value
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
    toggleTask(taskId) {
        const { tasks } = this.state;

        const foundtask = tasks.find((task) => task.uuid === taskId);

        if (foundtask) {
            foundtask.isCompleted = !foundtask.isCompleted;

            fetch(`/task/toggle/${foundtask.uuid}`, {
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
                        tasks: tasks
                    });
                });
        }
    }
    toggleMilestone(milestone) {
        const foundMilestone= _.find(this.state.quests, quest => quest.milestone === milestone);
        foundMilestone.isCompleted = !foundMilestone.isCompleted;
        this.setState({ quests: this.state.quests });
    }
    saveMilestone(oldMilestone, newMilestone, oldDate, newDate) {
        const foundMilestone=_.find(this.state.quests, quest => quest.milestone === oldMilestone);
        foundMilestone.milestone=newMilestone;
        foundMilestone.date=newDate;
        this.setState({quests: this.state.quests});
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
                tasks: results.tasks
			});
		});
	}
	render() {
		const { loginUser, missions, quests, tasks, dropdownMission } = this.state;

        const filteredMission = missions.filter((mission) => dropdownMission === mission.title);
        const filteredTasks = tasks.filter((task) => dropdownMission === task.missionName);

        var renderMissionDropdown = () => {
            return missions.map((mission, index) => {
                return (
                    <option value={mission.title} className="dropdown-item">{mission.title}</option>
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
                            <select name="Please Select Mission to add Task to" value={this.state.dropdownMission} onChange={this.handleDropdownMission.bind(this)}>
                                <option selected disabled>Find Mission</option>
                                {renderMissionDropdown()}
                            </select>
                        <div className="panel panel-success col-md-3 qmbox">
                            <MissionsList
                                missions={filteredMission}
                                tasks={filteredTasks}
                                toggleTask={this.toggleTask.bind(this)}
                                saveTask={this.saveTask.bind(this)}
                                deleteMission={this.deleteMission.bind(this)}
                            />
                        </div>
                        <div className="panel panel-success col-md-3 qmbox">
                            <QuestsList
                                quests={quests}
                                toggleMilestone={this.toggleMilestone.bind(this)}
                                saveMilestone={this.saveMilestone.bind(this)}
                                deleteQuest={this.deleteQuest.bind(this)}
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