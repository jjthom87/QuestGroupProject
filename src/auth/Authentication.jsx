import React, { Component } from 'react';
import { Router , browserHistory } from 'react-router';
var auth = require('auth');

export default class Authentication extends React.Component {
	login(){
		if(!auth.loggedIn()){
			browserHistory.push('/')
		}
	}
	render(){
		return (
			<Router.RouteHandler login={this.login.bind(this)}/>
		)
	}
}