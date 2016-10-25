import React, { Component } from 'react';
var {Link, IndexLink} = require('react-router');

export default class FeedUserItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	render(){

		const { id, name, username, createdOn, profileImage } = this.props;

		return (
			<div>
				<br></br>
				<Link to={`/userforall/${id}`}><img src={profileImage} style={{width: 60, height: 60}} /></Link><p className="userSearchText">    {name} Joined On {createdOn}</p>
				<br></br>
			</div>
		);
	}
}