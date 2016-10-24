import React, { Component } from 'react';
var {Link, IndexLink} = require('react-router');

export default class UserSearchItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	render(){

		const { id, name, username, createdOn, profileImage } = this.props;

		return (
			<div>
				<Link to={`/userforall/${id}`}>
						<div className="panel panel-success qmboxCompleted">
							<img className="text-center center-block" src={profileImage} style={{width: 100, height: 100}}/>
							<div className="searchPrefix">Name: <p className="userSearchText">{name}</p></div>
							<div className="searchPrefix">Username: <p className="userSearchText">{username}</p></div>
							<div className="searchPrefix">Joined On: <p className="userSearchText">{createdOn}</p></div>
						</div>
				</Link>
			</div>
		);
	}
}