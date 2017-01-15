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

        const owl = "https://s-media-cache-ak0.pinimg.com/originals/9e/b4/97/9eb497079e582509e89febf7552ddc02.png"
        const renderQuest = () => {
        if (questCreator[0].profileImage === ''){
                return (
					<div>
						 <br></br>
						 <Link to={`/userforall/${questCreator[0].id}`}><img src={owl} style={{width: 60, height: 60}} /></Link><p className="userSearchText">    {questCreator[0].name} Created {title} Quest on {createdOn}</p>
						 <br></br>
					</div>
                )
            } else {
                return (
					<div>
						 <br></br>
				 		<Link to={`/userforall/${questCreator[0].id}`}><img src={questCreator[0].profileImage} style={{width: 60, height: 60}} /></Link><p className="userSearchText">    {questCreator[0].name} Created {title} Quest on {createdOn}</p>
				 		 <br></br>
					</div>
                )
            }
        }

		return (
			<div>
				{renderQuest()}
			</div>
		);
	}
}