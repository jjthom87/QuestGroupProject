import React, { Component } from 'react'; 

export default class FeedUserMissionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	render(){

		const { createdOn, title, missiontasks, comments } = this.props;

		return (
			<div>
				 <br></br>
				 	<p className="userSearchText">    You Created {title} Mission on {createdOn} & have added {missiontasks.length} Tasks</p>
				 <br></br>
			</div>
		);
	}
}