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
			searchText: ''
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
                milestonetasks: results.milestonetasks
			});
		});
	}
	render() {

		const { loginUser, missions, missiontasks, quests, milestones, milestonetasks, searchText } = this.state;


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

    	return (
      		<div>
      			<div className='container'>
              		<MainNav/>
                	<div className="container" id="separator">
      					<h1 className="text-center" id="pageTitle">All of {loginUser}'s Quest's and Missions</h1>
      						<div className="row">
			      				<div>
			                        <Link to="/home"><button className="btn btn-warning">Back Home</button></Link>
			                    </div>			
							</div>
							<div className="text-center center-block">
								<SearchYourItemForm onSearch={this.handleSearch.bind(this)}/>
							</div>
							<div className="row">
								<div className="col-md-3">
									<p>Incomplete Missions</p>
									<AllMissionList
					                    missions={filteredIncMiss}
					                    missiontasks={missiontasks}
					                />
								</div>
								<div className="col-md-3">
									<p>Completed Missions</p>
						            <AllMissionList
					                    missions={filteredComMiss}
					                    missiontasks={missiontasks}
					                />
					            </div>
					            <div className="col-md-3">
					            	<p>Incomplete Quests</p>
					           		<AllQuestList
					                    quests={filteredIncQuest}
					                    milestones={milestones}
					                    milestonetasks={milestonetasks}
					                />
					            </div>
				            	<div className="col-md-3">
				            		<p>Completed Quests</p>
				            		<AllQuestList
					                    quests={filteredComQuest}
					                    milestones={milestones}
					                    milestonetasks={milestonetasks}
					                />
				            	</div>
				        	</div>
      				</div>
      			</div>
      		</div>
		);
	}
}