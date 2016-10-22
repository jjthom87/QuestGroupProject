import React, { Component } from 'react';
import { Router , browserHistory } from 'react-router';
var {Link, IndexLink} = require('react-router');

import MissionMain from "MissionMain";
import QuestMain from "QuestMain";
import Logout from 'Logout';
import MainNav from 'MainNav';

import CompletedMissionList from 'CompletedMissionList';
import CompletedQuestList from 'CompletedQuestList';

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
		fetch(`/api/userall/${this.props.params.id}`, {
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

    	return (
      		<div>
      			<div className='container'>
              		<MainNav/>
                	<div className="container" id="separator">
      					<h1 className="text-center" id="pageTitle">All of {loginUser}'s</h1>
      						<div className="row">
			      				<div>
			                        <Link to="/home"><button className="btn btn-warning">Back Home</button></Link>
			                    </div>			
							</div>
							<div className="row">
									<div className="col-md-3">
									</div>
										<div className="col-md-4">
								            <CompletedMissionList
							                    missions={missions}
							                    missiontasks={missiontasks}
							                />
							            </div>
							            <div className="col-md-7">
							           		<CompletedQuestList
							                    quests={quests}
							                    milestones={milestones}
							                    milestonetasks={milestonetasks}
							                />
							            </div>
				            	<div className="col-md-8">
				            	</div>
				        	</div>
      				</div>
      			</div>
      		</div>
		);
	}
}