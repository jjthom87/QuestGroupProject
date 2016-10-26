import React, { Component } from 'react';
var {Link, IndexLink} = require('react-router');

export default class FeedCommentItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	render(){

		const { UserId, usersName, commentee, missionName, questName, allUsers, createdOn, profileImage } = this.props;

		const commenterImage = allUsers.filter((user) => user.id === UserId);

		const owl = "https://s-media-cache-ak0.pinimg.com/originals/9e/b4/97/9eb497079e582509e89febf7552ddc02.png"
        const renderImage = () => {
	        if (commenterImage[0].profileImage === ''){
	                return (
	                    <img src={owl} style={{width: 60, height: 60}} />
	                )
	            } else {
	                return (
	                    <img src={commenterImage[0].profileImage} style={{width: 60, height: 60}} />
	                )
	            }
        }

		const renderComment = () => {
			if (typeof missionName === 'string'){
				return (
					<div>
						<br></br>
						<Link to={`/userforall/${commenterImage[0].id}`}>{renderImage()}</Link><p className="userSearchText">    {usersName} Commented On {commentee}'s {missionName} Mission on {createdOn}</p>
						<br></br>
					</div>
				)
			} else {
				return (
					<div>
						<br></br>
						<Link to={`/userforall/${commenterImage[0].id}`}>{renderImage()}</Link><p className="userSearchText">    {usersName} Commented On {commentee}'s {questName} Quest on {createdOn}</p>
						<br></br>
					</div>
				)
			}
		}
		return (
			<div>
				 {renderComment()}
			</div>
		);
	}
}