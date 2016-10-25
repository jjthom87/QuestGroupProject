import React, { Component } from 'react'; 

export default class FeedCommentItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	render(){

		const { UserId, usersName, commentee, missionName, questName, allUsers, createdOn, profileImage } = this.props;

		const commenterImage = allUsers.filter((user) => user.id === UserId)

		const renderComment = () => {
			if (typeof missionName === 'string'){
				return (
					<div>
						<img src={commenterImage[0].profileImage} style={{width: 60, height: 60}} /><p className="userSearchText">    {usersName} Commented On {commentee}'s {missionName} Mission</p>
					</div>
				)
			} else {
				return (
					<div>
						<img src={commenterImage[0].profileImage} style={{width: 60, height: 60}} /><p className="userSearchText">    {usersName} Commented On {commentee}'s {questName} Quest</p>
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