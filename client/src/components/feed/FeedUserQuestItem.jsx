import React, { Component } from 'react'; 

export default class FeedUserQuestItem extends React.Component {
	render(){

		const { createdOn, title, milestones, milestonetasks, comments } = this.props;

		return (
			<div>
				 <br></br>
				 	<p className="userSearchText">    You Created {title} Quest on {createdOn} & have added {milestones.length} Milestones & {milestonetasks.length} Tasks</p>
				 <br></br>
			</div>
		);
	}
}