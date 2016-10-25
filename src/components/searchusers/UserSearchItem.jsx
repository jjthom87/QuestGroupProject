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
						<div className="qmboxCompleted col-md-4 col-md-offset-4" id="usersearchresult">
							<img className="text-center center-block img-responsive" src={profileImage} />
							<div className="searchPrefix">Name: <p className="userSearchText">{name}</p></div>
							
							<div className="searchPrefix">Username: <p className="userSearchText">{username}</p></div>
							
							<div className="searchPrefix">Joined On: <p className="userSearchText">{createdOn}</p></div>
						</div>
				</Link>
			</div>
		);
	}
}