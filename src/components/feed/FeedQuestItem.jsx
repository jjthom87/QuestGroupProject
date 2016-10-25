import React, { Component } from 'react';
var {Link, IndexLink} = require('react-router');

export default class FeedQuestItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	render(){

		const { createdOn, title, allUsers, UserId } = this.props;

		const questCreator = allUsers.filter((user) => user.id === UserId)

		return (
			<div>
				 <br></br>
				 <Link to={`/userforall/${questCreator[0].id}`}><img src={questCreator[0].profileImage} style={{width: 60, height: 60}} /></Link><p className="userSearchText">    {questCreator[0].name} Created {title} Quest on {createdOn}</p>
				 <br></br>
			</div>
		);
	}
}