import React, { Component } from 'react';

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
				<form onSubmit={this.onLoginSubmit.bind(this)}>
					<div>
						<input type="text" ref="username" placeholder="Enter Username"/>
					</div>
					<div>
						<input type="password" ref="password" placeholder="Enter Password"/>
					</div>
					<div>
						<input className="button expanded hollow" type="submit" />
					</div>
				</form>
			</div>
		);
	}
}