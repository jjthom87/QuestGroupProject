import React, { Component } from 'react';
import { Link, IndexLink } from "react-router";
import MissionMain from 'MissionMain';
import QuestMain from 'QuestMain';
import Logout from 'Logout';
import { Router , browserHistory } from 'react-router';

// import Footer from "../components/layout/Footer";
// import Nav from "../components/layout/Nav";

export default class UserHomePage extends React.Component {
  	constructor(props, context) {
		super(props, context);
		this.state = {
			loginUser: '',
			fullLoginUser: '',
			missions: [],
			createdOn: '',
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
  		const { missions } = this.state
		fetch('/home', {
			credentials: 'include',
			headers: {
				Auth: localStorage.getItem('token')
			}
		}).then((response) => response.json())
		.then((results) => {
			this.setState({
				fullLoginUser: results.currentUser,
				loginUser: results.currentUser.firstname,
				missions: results.missions
			});
		});
	}
	render() {
		const { loginUser, missions } = this.state;
		const filtered = missions.map((mission) => mission.description);
    	return (
      		<div>
      			<Logout onLogout={this.logoutHandler.bind(this)} />
      			<h1 className="homepageTitle text-center">Welcome Home {loginUser}</h1>
      			<div className="row collapse navbar-collapse">
      				<div className="col-md-5">
      				</div>
      				<div col-md-6>
						<ul className="nav navbar-nav">
							<li>
								<button className="btn btn-info"><Link to="/missionshome">Create a Mission</Link></button>
							</li>
							<li>
								<button className="btn btn-info"><Link to="/questshome">Create a Quest</Link></button>
							</li>
						</ul>
					</div>
				</div>
      		</div>
		);
	}
}