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
		const owl = "https://s-media-cache-ak0.pinimg.com/originals/9e/b4/97/9eb497079e582509e89febf7552ddc02.png"
		const renderUser = () => {
			if (profileImage === ''){
				return (
					<div>
						<br></br>
						<Link to={`/userforall/${id}`}><img src={owl} style={{width: 60, height: 60}} /></Link><p className="userSearchText">    {name} Joined On {createdOn}</p>
						<br></br>
					</div>
				)
			} else {
				return (
					<div>
						<br></br>
						<Link to={`/userforall/${id}`}><img src={profileImage} style={{width: 60, height: 60}} /></Link><p className="userSearchText">    {name} Joined On {createdOn}</p>
						<br></br>
					</div>
				)
			}
		}
		return (
			<div>
				{renderUser()}
			</div>
		);
	}
}