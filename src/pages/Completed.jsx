import React, { Component } from 'react';
<<<<<<< HEAD
import { Router , browserHistory } from 'react-router';
var {Link, IndexLink} = require('react-router');

import MissionMain from "MissionMain";
import QuestMain from "QuestMain";
import Logout from 'Logout';
import MainNav from 'MainNav';

import CompletedMissionList from 'CompletedMissionList';
=======
import MainNav from 'MainNav';
>>>>>>> 682834c1e3b898fb1af980a0785e165dcb2abf8a

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
<<<<<<< HEAD
    handleDropdownMilestone(e){
        this.setState({
            dropdownMilestone: e.target.value
        })
=======
    render() {
        return (
            <div>
                <MainNav />
                    <div className='container' id="separator">   
            	       <p>Completed Missions and Quests</p>




























                    </div>
            </div>
        );
>>>>>>> 682834c1e3b898fb1af980a0785e165dcb2abf8a
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
		fetch('/completed', {
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

		const { loginUser, missions, missiontasks } = this.state;

		console.log(missions);
		console.log(missiontasks);
    	return (
      		<div>
              <MainNav/>
                <div className='container' id="homepageDiv"></div>
      			<h1 className="text-center" id="pageTitle">Hello {loginUser}, here are your Completed Items</h1>
      			<div className="row">
      				<div className="col-lg-1 col-lg-offset-5" role="group">
                        <Link to="/home"><button className="btn btn-warning">Back Home</button></Link>
                        <Link to="/searchall"><button className="btn btn-info">Find All Users Missions/Quests</button></Link>
                        <Link to="/questshome"><button className="btn btn-info" id="missionAdd">Create Another Quest</button></Link>
                        <Link to="/missionshome"><button className="btn btn-info" id="missionAdd">Create Another Mission</button></Link>			
                    </div>
				</div>
	            <CompletedMissionList
                    missions={missions}
                    missiontasks={missiontasks}
                />
      		</div>
		);
	}
}