import React, { Component } from 'react'; 

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
				<img src={profileImage} style={{width: 60, height: 60}} /><p className="userSearchText">    {name} Joined On: {createdOn}</p>
			</div>
		);
	}
}