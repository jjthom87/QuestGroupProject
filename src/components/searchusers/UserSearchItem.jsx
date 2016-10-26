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

		const owl = "https://s-media-cache-ak0.pinimg.com/originals/9e/b4/97/9eb497079e582509e89febf7552ddc02.png"
		const renderImage = () => {

			if (profileImage === ''){
				return (
					<img src={owl} style={{width: 250, height: 250}} />
				)
			} else {
				return (
					<img src={profileImage} style={{width: 250, height: 250}} />
				)
			}
		}

		return (
			<div>
				<br></br>
				<Link to={`/userforall/${id}`}>
						<div className="qmboxCompleted col-md-4 col-md-offset-4" id="usersearchresult">
							{renderImage()}
							<div className="searchPrefix">Name: <p className="userSearchText">{name}</p></div>
							
							<div className="searchPrefix">Username: <p className="userSearchText">{username}</p></div>
							
							<div className="searchPrefix">Joined On: <p className="userSearchText">{createdOn}</p></div>
						</div>
				</Link>
				<br></br>
			</div>
		);
	}
}