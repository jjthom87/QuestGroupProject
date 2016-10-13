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
		var firstname = this.refs.firstname.value;
		var lastname = this.refs.lastname.value;
		var username = this.refs.username.value;
		var password = this.refs.password.value;

		if (firstname.length > 0) {
			this.refs.firstname.value = '';
			creds.firstname = firstname;
		}

		if (lastname.length > 0) {
			this.refs.lastname.value = '';
			creds.lastname = lastname;
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
			<div>
				<form onSubmit={this.onCreateUser.bind(this)}>
					<div>
						<input type="text" ref="firstname" placeholder="Enter First Name"/>
					</div>
					<div>
						<input type="text" ref="lastname" placeholder="Enter Last Name"/>
					</div>
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