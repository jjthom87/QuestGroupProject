import React, { Component } from 'react';
var {Link, IndexLink} = require('react-router');

export default class FeedMissionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	render(){

		const { createdOn, title, allUsers, UserId } = this.props;

		const missionCreator = allUsers.filter((user) => user.id === UserId)

        const owl = "https://s-media-cache-ak0.pinimg.com/originals/9e/b4/97/9eb497079e582509e89febf7552ddc02.png"
        const renderMission = () => {
        if (missionCreator[0].profileImage === ''){
                return (
					<div>
						 <br></br>
						 <Link to={`/userforall/${missionCreator[0].id}`}><img src={owl} style={{width: 60, height: 60}} /></Link><p className="userSearchText">    {missionCreator[0].name} Created {title} Mission on {createdOn}</p>
						 <br></br>
					</div>
                )
            } else {
                return (
					<div>
						 <br></br>
				 		<Link to={`/userforall/${missionCreator[0].id}`}><img src={missionCreator[0].profileImage} style={{width: 60, height: 60}} /></Link><p className="userSearchText">    {missionCreator[0].name} Created {title} Mission on {createdOn}</p>
				 		 <br></br>
					</div>
                )
            }
        }

		return (
			<div>
				{renderMission()}
			</div>
		);
	}
}