import React, { Component } from 'react';
var LandingNav = require('navbars/LandingNav.js');

export default class Login extends React.Component {
	constructor(...args){
		super(...args)
		this.state = {
		}
	}
	onLoginSubmit(e){
		e.preventDefault();

		var creds = {};
		var username = this.refs.username.value;
		var password = this.refs.password.value;

		if (username.length > 0) {
			this.refs.username.value = '';
			creds.username = username;
		}

		if (password.length > 0) {
			this.refs.password.value = '';
			creds.password = password;
		}

		this.props.onLogin(creds);
	}
	render() {
		return (
			<div>
				<LandingNav/>
				<div id="loginForm">
					<form onSubmit={this.onLoginSubmit.bind(this)}>
						<h1 id="loginText"> Login </h1>
						<div id="submitButton">
							<input type="text" ref="username" placeholder="Enter Username"/>
						</div>
						<div id="submitButton">
							<input type="password" ref="password" placeholder="Enter Password"/>
						</div>
						<div id="submitButton">
							<input className="button expanded hollow" type="submit" />
						</div>
					</form>
				</div>
			</div>
		);
	}
}