import React, { Component } from 'react';
import Login from 'Login';
import { Router , browserHistory } from 'react-router';

export default class LoginPage extends React.Component {
	constructor(...args){
		super(...args)
		this.state = {
		}
	}
	handleNewData (creds) {
		const { authenticated } = this.state;
		const loginUser = {
			username: creds.username,
			password: creds.password
		}
		fetch('/api/users/login', {
			method: 'post',
			body: JSON.stringify(loginUser),
			headers: {
				'Authorization': 'Basic'+btoa('username:password'),
				'content-type': 'application/json',
				'accept': 'application/json'
			},
			credentials: 'include'
		}).then((response) => {
			if (response.statusText === "OK"){
				localStorage.setItem('token', response.headers.get('Auth'));
				browserHistory.push('/feedpage');
				response.json();
			} else {
				alert ('Incorrect Login Credentials');
			}
		})
	}
	render() {
		return (
			<div className="row">
				<div className="column small-centered small-11 medium-6 large-5">

					<div className="container">
						<Login onLogin={this.handleNewData.bind(this)}/>
						<p className="animated fadeInDown" id="loginText">If you haven't registered yet</p>
						 	<p className="animated fadeInDown" id="loginText">Please go to the Sign Up Page!</p>
					</div>
				</div>
			</div>
		);
	}
}