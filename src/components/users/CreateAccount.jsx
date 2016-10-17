import React, { Component } from 'react';

export default class CreateAccount extends React.Component {
	constructor(...args){
		super(...args)
		this.state = {
		}
	}
	onCreateUser(e){
		e.preventDefault();

		var creds = {};
		var name = this.refs.name.value;
		var username = this.refs.username.value;
		var password = this.refs.password.value;

		if (name.length > 0) {
			this.refs.name.value = '';
			creds.name = name;
		}

		if (username.length > 0) {
			this.refs.username.value = '';
			creds.username = username;
		}

		if (password.length > 0) {
			this.refs.password.value = '';
			creds.password = password;
		}

		this.props.onCreate(creds);
	}
	render() {
		return (
			<div id="regForm">
				<form onSubmit={this.onCreateUser.bind(this)}>
					<div>
						<h1 id="submitButton">Create Account</h1>
					</div>
					<div>
						<input type="text" ref="name" placeholder="Enter Name/Nickname"/>
					</div>
					<div>
						<input type="text" ref="username" placeholder="Enter Username"/>
					</div>
					<div>
						<input type="password" ref="password" placeholder="Enter Password"/>
					</div>
					<div id="submitButton">
						<input className="button expanded hollow" type="submit" />
					</div>
				</form>
			</div>
		);
	}
}