import React, { Component } from 'react';
import Login from 'Login';
import { Router , browserHistory } from 'react-router';

export default class LoginPage extends React.Component {
	constructor(...args){
		super(...args)
		this.state = {
			authenticated: true
		}
	}
	handleNewData (creds) {
		const { authenticated } = this.state;
		const loginUser = {
			username: creds.username,
			password: creds.password
		}
		fetch('/users/login', {
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
				this.setState({
					authenticated: !authenticated
				})
				localStorage.setItem('token', response.headers.get('Auth'));
				browserHistory.push('/home');
				response.json();
			} else {
				this.setState({
					authenticated: authenticated
				})
				alert ('Incorrect Login Credentials');
			}
		})
	}
	authenticateLogin(){
		  const {authenticated} = this.props;
		  if (!authenticated){
		    browserHistory.push('/')
		  }
	}
	render() {
		return (
			<div className="row">
				<div className="column small-centered small-11 medium-6 large-5">
					<div className="container">
						<h1 className="container_header text-center">Login</h1>
						<Login onLogin={this.handleNewData.bind(this)}/>
					</div>
				</div>
			</div>
		);
	}
}