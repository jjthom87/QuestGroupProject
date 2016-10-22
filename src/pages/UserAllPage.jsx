import React, { Component } from 'react';
import { Router , browserHistory } from 'react-router';
var {Link, IndexLink} = require('react-router');

import MissionMain from "MissionMain";
import QuestMain from "QuestMain";
import Logout from 'Logout';
import MainNav from 'MainNav';

import AllMissionList from 'AllMissionList';
import AllQuestList from 'AllQuestList';

export default class UserAllPage extends React.Component {
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
            dropdownQuest: '',
            dropdownMission: '',
            dropdownMilestone: '',
			createdOn: ''
		};
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
		fetch(`/api/userall/${this.props.params.id}`)
		.then((response) => response.json())
		.then((results) => {
			console.log(results);
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

		const { loginUser, missions, missiontasks, quests, milestones, milestonetasks } = this.state;

		incompleteMissions = missions.filter((mission) => !mission.missionCompleted);
		completeMissions = missions.filter((mission) => mission.missionCompleted);
		incompleteQuests = quests.filter((quest) => !quest.questCompleted);
		completeQuests = missions.filter((quest) => quest.questCompleted);

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
							<div className="row">
								<div className="col-md-3">
										<p>Incomplete Missions</p>
										<AllMissionList
						                    missions={incompleteMissions}
						                    missiontasks={missiontasks}
						                />
								</div>
								<div className="col-md-3">
									<p>Completed Missions</p>
						            <AllMissionList
					                    missions={completeMissions}
					                    missiontasks={missiontasks}
					                />
					            </div>
					            <div className="col-md-3">
					            	<p>Incomplete Quests</p>
					           		<AllQuestList
					                    quests={incompleteQuests}
					                    milestones={milestones}
					                    milestonetasks={milestonetasks}
					                />
					            </div>
				            	<div className="col-md-3">
				            		<p>Completed Quests</p>
				            		<AllQuestList
					                    quests={completeQuests}
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