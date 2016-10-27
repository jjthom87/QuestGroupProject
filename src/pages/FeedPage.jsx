import React, { Component } from 'react';
import { Router , browserHistory } from 'react-router';
var {Link, IndexLink} = require('react-router');

import FeedCommentList from "FeedCommentList";
import FeedMissionsList from "FeedMissionsList";
import FeedQuestsList from "FeedQuestsList";
import FeedUserList from "FeedUserList";
import FeedUserMissionList from "FeedUserMissionList";
import FeedUserQuestList from "FeedUserQuestList";
import Logout from 'Logout';
import MainNav from 'MainNav';

export default class FeedPage extends React.Component {
  	constructor(props, context) {
		super(props, context);
		this.state = {
			loginUser: '',
			users: [],
			comments: [],
			missions: [],
			quests: [],
			userMissions: [],
			userQuests: [],
			allUsers: []
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
			this.setState({
				loginUser: results.currentUser.name,
				users: results.lastFiveUsers,
				comments: results.lastFiveComments,
				missions: results.lastFiveMissions,
				quests: results.lastFiveQuests,
				userMissions: results.userMissions,
				userQuests: results.userQuests,
				allUsers: results.allUsers
			});
		});
	}
	render() {

		const { loginUser, users, comments, missions, quests, userMissions, userQuests, allUsers } = this.state
		
    	return (
      		<div>
      			<MainNav />
      			<div id="separator">
	      			<h1 className="text-center" id="pageTitle">Hoot Hoot {loginUser}, Welcome to Bubo</h1>
	      			<h2 className="text-center" id="pageTitle">
	      				Go to the Create page to create a Mission/Quest or Search other Users
	      			</h2>
	      			<br></br>
	      			<h1 className="text-center" id="feedPageTitle">
	      				Recent User Activity Feed
	      			</h1>
	      			<br></br>
	      			<div className="row">
	      				<div className="col-md-1">
	      				</div>
	      				<div className="feedDiv qmboxCompleted col-md-5" id="usersearchresult">
	      					<p className="searchHeader text-center"><strong>Your Most Recent Quests</strong></p>
	      					<FeedUserQuestList
	      						allUsers={allUsers}
	      						userQuests={userQuests}
	      					/>
	      				</div>
	      				<div className="col-md-2">
	      				</div>
	      				<div className="feedDivr qmboxCompleted col-md-5" id="usersearchresult">
	      					<p className="searchHeader text-center"><strong>Your Most Recent Missions</strong></p>
	      					<FeedUserMissionList
	      						allUsers={allUsers}
	      						userMissions={userMissions}
	      					/>
	      				</div>
	      				<div className="col-md-1">
	      				</div>
	      			</div>
	      			<div className="row">
	      				<div className="col-md-1">
	      				</div>
	      				<div className="feedDiv qmboxCompleted col-md-5" id="usersearchresult">
	      					<p className="searchHeader text-center"><strong>All Users Most Recent Quests</strong></p>
	      					<FeedQuestsList
	      						allUsers={allUsers}
	      						quests={quests}
	      					/>
	      				</div>
	      				<div className="col-md-2">
	      				</div>
	      				<div className="feedDivr qmboxCompleted col-md-5" id="usersearchresult">
	      					<p className="searchHeader text-center"><strong>All Users Most Recent Missions</strong></p>
	      					<FeedMissionsList
	      						allUsers={allUsers}
	      						missions={missions}
	      					/>
	      				</div>
	      				<div className="col-md-1">
	      				</div>
	      			</div>
	      			<div className="row">
	      				<div className="col-md-1">
	      				</div>
	      				<div className="feedDiv qmboxCompleted col-md-5" id="usersearchresult">
	      					<p className="searchHeader text-center"><strong>Most Recent Accounts Created</strong></p>
	      					<FeedUserList
	      						allUsers={allUsers}
	      						users={users}
	      					/>
	      				</div>
	      				<div className="col-md-2">
	      				</div>
	      				<div className="feedDivr qmboxCompleted col-md-5" id="usersearchresult">
	      					<p className="searchHeader text-center"><strong>Most Recent Comments</strong></p>
	      					<FeedCommentList
	      						allUsers={allUsers}
	      						comments={comments}
	      					/>
	      				</div>
	      				<div className="col-md-1">
	      				</div>
	      			</div>
	      		</div>
      		</div>
		);
	}
}