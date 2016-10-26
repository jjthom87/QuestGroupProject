import React, { Component } from 'react';
import { Router , browserHistory } from 'react-router';
var {Link, IndexLink} = require('react-router');
var moment = require('moment');

import MissionMain from "MissionMain";
import QuestMain from "QuestMain";
import Logout from 'Logout';
import MainNav from 'MainNav';
import AllMissionListWoLikes from 'AllMissionListWoLikes';
import AllMissionListWoLikesW from 'AllMissionListWoLikesW';
import AllQuestListWoLikes from 'AllQuestListWoLikes';
import AllQuestListWoLikesW from 'AllQuestListWoLikesW';
import SearchYourItemForm from 'SearchYourItemForm';

export default class UserAllPage extends React.Component {
  	constructor(props, context) {
		super(props, context);
		this.state = {
			loginUser: '',
			loginId: '',
			fullLoginUser: '',
			missions: [],
			quests: [],
            missiontasks: [],
            milestonetasks: [],
            milestones: [],
			createdOn: '',
			searchText: '',
			profileImage: '',
			allUsers: []
		};
	}
	handleSearch(searchText){
		this.setState({
			searchText: searchText.toLowerCase()
		})
	}
	logoutHandler(){
		fetch('/api/users/logout', {
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

        fetch(`/api/mission/delete/${deleteMission[0].id}`,{
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
    completeMission(missionId){
        const { missions } = this.state;

        const completeMission = _.remove(missions, mission => mission.id === missionId);

        const data = {
            completeMission,
            completedOn: moment().format('MMM Do YYYY @ h:mm a')
        }
        fetch(`/api/mission/complete/${completeMission[0].id}`,{
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
                missions: missions
            })
        }); 
    }
    toggleMissionTask(taskId) {
        const { missiontasks } = this.state;

        const foundtask = missiontasks.find((task) => task.uuid === taskId);

        if (foundtask) {
            foundtask.isCompleted = !foundtask.isCompleted;

            fetch(`/api/missiontask/toggle/${foundtask.uuid}`, {
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

        fetch(`/api/missiontask/delete/${foundTask[0].uuid}`,{
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
  	componentWillMount(){
		fetch('/api/userall', {
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
				loginId: results.currentUser.id,
				missions: results.missions,
				quests: results.quests,
                missiontasks: results.missiontasks,
                milestones: results.milestones,
                milestonetasks: results.milestonetasks,
                profileImage: results.profileImage,
                allUsers: results.allUsers
			});
		});
	}
	render() {

		const { loginUser, missions, missiontasks, quests, milestones, milestonetasks, searchText, allUsers } = this.state;

		const incompleteMissions = missions.filter((mission) => !mission.missionCompleted);
		const completeMissions = missions.filter((mission) => mission.missionCompleted);
		const incompleteQuests = quests.filter((quest) => !quest.questCompleted);
		const completeQuests = quests.filter((quest) => quest.questCompleted);

		const filteredIncMiss = incompleteMissions.filter((search) => {
			var title = search.title.toLowerCase();
			return searchText.length === 0 || title.indexOf(searchText) > -1
		});

		const filteredComMiss = completeMissions.filter((search) => {
			var title = search.title.toLowerCase();
			return searchText.length === 0 || title.indexOf(searchText) > -1
		});

		const filteredIncQuest = incompleteQuests.filter((search) => {
			var title = search.title.toLowerCase();
			return searchText.length === 0 || title.indexOf(searchText) > -1
		});

		const filteredComQuest = completeQuests.filter((search) => {
			var title = search.title.toLowerCase();
			return searchText.length === 0 || title.indexOf(searchText) > -1
		});

        const owl = "https://s-media-cache-ak0.pinimg.com/originals/9e/b4/97/9eb497079e582509e89febf7552ddc02.png"
        const renderImage = () => {

        if (this.state.profileImage === ''){
                return (
                    <img className="text-center center-block" src={owl} style={{width: 250, height: 250}}/>
                )
            } else {
                return (
                    <img className="text-center center-block" src={this.state.profileImage} style={{width: 250, height: 250}}/>
                )
            }
        }

    	return (
      		<div>
      			<div>
              		<MainNav/>
                	<div  id="separator">
      					<h1 className="text-center" id="pageTitle">{loginUser}'s Profile Page</h1>
      					    {renderImage()}
							<div className="text-center center-block">
								<p className="searchHeader">Search By Title</p>
								<SearchYourItemForm onSearch={this.handleSearch.bind(this)}/>
							</div>
							<div className="row">
								<div className="col-md-3">
									<p className="forAllHeader text-center">Incomplete Missions</p>
									<AllMissionListWoLikesW
					                    missions={filteredIncMiss}
					                    missiontasks={missiontasks}
							            toggleMissionTask={this.toggleMissionTask.bind(this)}
		                                deleteMission={this.deleteMission.bind(this)}
		                                completeMission={this.completeMission.bind(this)}
		                                deleteMissionTask={this.deleteMissionTask.bind(this)}
		                                allUsers={allUsers}
					                />
								</div>
								<div className="col-md-3">
									<p className="forAllHeader text-center">Completed Missions</p>
						            <AllMissionListWoLikes
					                    missions={filteredComMiss}
					                    missiontasks={missiontasks}
                                        deleteMission={this.deleteMission.bind(this)}
					                   	allUsers={allUsers}
					                />
					            </div>
					            <div className="col-md-3">
					            	<p className="forAllHeader text-center">Incomplete Quests</p>
					           		<AllQuestListWoLikesW
					                    quests={filteredIncQuest}
					                    milestones={milestones}
					                    milestonetasks={milestonetasks}
		                                deleteQuest={this.deleteQuest.bind(this)}
		                                completeQuest={this.completeQuest.bind(this)}
		                                toggleMilestone={this.toggleMilestone.bind(this)}
		                                deleteMilestone={this.deleteMilestone.bind(this)}
		                                toggleMilestoneTask={this.toggleMilestoneTask.bind(this)}
		                                deleteMilestoneTask={this.deleteMilestoneTask.bind(this)}
		                                allUsers={allUsers}					                    
					                />
					            </div>
				            	<div className="col-md-3">
				            		<p className="forAllHeader text-center">Completed Quests</p>
				            		<AllQuestListWoLikes
					                    quests={filteredComQuest}
					                    milestones={milestones}
					                    milestonetasks={milestonetasks}
                                        deleteQuest={this.deleteQuest.bind(this)}
					                    allUsers={allUsers}
					                />
				            	</div>
				        	</div>
      				</div>
      			</div>
      		</div>
		);
	}
}