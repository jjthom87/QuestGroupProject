import React, { Component } from 'react';
import { Router , browserHistory } from 'react-router';
var {Link, IndexLink} = require('react-router');

import MissionMain from "MissionMain";
import QuestMain from "QuestMain";
import Logout from 'Logout';
import MainNav from 'MainNav';

export default class FeedPage extends React.Component {
  	constructor(props, context) {
		super(props, context);
		this.state = {
		};
	}
  	componentWillMount(){
		fetch('/api/feedpage', {
			headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
		}).then((response) => response.json())
		.then((results) => {
			console.log(results);
			this.setState({
			});
		});
	}
	render() {

    	return (
      		<div>
      			<MainNav />
      		</div>
		);
	}
}