import React, { Component } from 'react';
import LandingNav from 'LandingNav';

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
							<span className="glyphicon glyphicon-user"><input type="text" ref="username" placeholder="Enter Username"/></span>
						</div>
						<div id="submitButton">
							<span className="glyphicon glyphicon-lock"><input type="password" ref="password" placeholder="Enter Password"/></span>
						</div>
						<div id="submitButton">
							<input className="btn btn-default" type="submit" value="Login"/>
						</div>
					</form>
				</div>
			</div>
		);
	}
}