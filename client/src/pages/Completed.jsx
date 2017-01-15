import React, { Component } from 'react';
import { Router , browserHistory } from 'react-router';
var {Link, IndexLink} = require('react-router');

import MissionMain from "MissionMain";
import QuestMain from "QuestMain";
import Logout from 'Logout';
import MainNav from 'MainNav';

import CompletedMissionList from 'CompletedMissionList';
import CompletedQuestList from 'CompletedQuestList';

export default class Completed extends React.Component {
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
		fetch('/api/completed', {
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
      					<h1 className="text-center" id="pageTitle">Hello {loginUser}, here are your Completed Items</h1>
      						<div className="row">
		      					<div className="col-lg-1 col-lg-offset-5" role="group">
				      				
		                        	<Link to="/searchall"><button className="btn btn-info">Find All Users Missions/Quests</button></Link>
		                        	<Link to="/questshome"><button className="btn btn-info" id="missionAdd">Create Another Quest</button></Link>
		                        	<Link to="/missionshome"><button className="btn btn-info" id="missionAdd">Create Another Mission</button></Link>			
		                    	</div>
							</div>
							<div className="row">
									<div className="col-md-1">
									</div>

									<div className="panel panel-success col-md-4 qmboxCompleted">
								            <CompletedMissionList
							                    missions={missions}
							                    missiontasks={missiontasks}
							                />
							        </div>

							        <div className="panel panel-success col-md-4 qmboxCompleted">
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