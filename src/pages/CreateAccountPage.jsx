import React, { Component } from 'react';
import CreateAccount from 'CreateAccount';
import { Router , browserHistory } from 'react-router';
var moment = require('moment');

import LandingNav from 'LandingNav';

export default class CreateAccountPage extends React.Component {
	handleNewData (creds) {
		const newUser = {
			name: creds.name,
			username: creds.username,
			password: creds.password,
			confirmPassword: creds.confirmPassword,
			profileImage: creds.profileImage,
			createdOn: moment().format('MMM Do YYYY @ h:mm a')
		}
		fetch('/api/users/create', {
			method: 'post',
			body: JSON.stringify(newUser),
			headers: {
				'content-type': 'application/json'
			}
		}).then((response) => response.json())
		.then((results) => {
			if (results.createdAt){
				browserHistory.push('/login');
			} else {
				results.errors.filter((result) => alert('Username Already Taken'));
			}
		})
	}
	render() {
		return (
			<div>
				<LandingNav/>
				<div className = "row">
					<div className="column small-centered small-11 medium-6 large-5 regdiv">
						<div className="container" id="regdiv">
							<CreateAccount onCreate={this.handleNewData.bind(this)}/>
							<p className="animated fadeInDown" id="loginText">Already have an account? Please login</p>
						</div>
					</div>

				</div>
			</div>
		);
	}
}