import React, { Component } from 'react';
import { Router , browserHistory } from 'react-router';
var {Link, IndexLink} = require('react-router');

import MissionMain from "MissionMain";
import QuestMain from "QuestMain";
import Logout from 'Logout';
import MainNav from 'MainNav';
import AllMissionList from 'AllMissionList';
import AllQuestList from 'AllQuestList';
import SearchYourItemForm from 'SearchYourItemForm';

export default class UserForAllPage extends React.Component {
  	constructor(props, context) {
		super(props, context);
		this.state = {
			loginUser: '',
			loginId: this.props.params.id,
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
  	componentWillMount(){
		fetch(`/api/userforall/${this.props.params.id}`)
		.then((response) => response.json())
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
                allUsers: results.allUsers,
        		profileImage: results.currentUser.profileImage
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
      			<div >
              		<MainNav/>
                	<div id="separator">
      					<h1 className="text-center" id="pageTitle">All of {loginUser}'s Quest's and Missions</h1>
      						{renderImage()}
							<div className="text-center center-block">
								<p className="searchHeader">Search By Title</p>
								<SearchYourItemForm onSearch={this.handleSearch.bind(this)}/>
							</div>
							<div className="row">
								<div className="col-md-3">
									<p className="forAllHeader text-center">Incomplete Missions</p>
									<AllMissionList
										allUsers={allUsers}
					                    missions={filteredIncMiss}
					                    missiontasks={missiontasks}
					                    loginUser={loginUser}
					                />
								</div>
								<div className="col-md-3">
									<p className="forAllHeader text-center">Completed Missions</p>
						            <AllMissionList
						            	allUsers={allUsers}
					                    missions={filteredComMiss}
					                    missiontasks={missiontasks}
					                    loginUser={loginUser}
					                />
					            </div>
					            <div className="col-md-3">
					            	<p className="forAllHeader text-center">Incomplete Quests</p>
					           		<AllQuestList
					           			allUsers={allUsers}
					                    quests={filteredIncQuest}
					                    milestones={milestones}
					                    milestonetasks={milestonetasks}
					                    loginUser={loginUser}
					                />
					            </div>
				            	<div className="col-md-3">
				            		<p className="forAllHeader text-center">Completed Quests</p>
				            		<AllQuestList
				            			allUsers={allUsers}
					                    quests={filteredComQuest}
					                    milestones={milestones}
					                    milestonetasks={milestonetasks}
					                    loginUser={loginUser}
					                />
				            	</div>
				        	</div>
      				</div>
      			</div>
      		</div>
		);
	}
}