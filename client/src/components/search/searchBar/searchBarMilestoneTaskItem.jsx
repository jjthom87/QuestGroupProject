import React, { Component } from 'react';
var {Link, IndexLink} = require('react-router');

export default class SearchBarMilestoneTaskItem extends React.Component {
	
	render(){
		const { milestones, milestoneTasks } = this.props;

		const singleMilestoneTask =
 			milestoneTasks.map((milestonetask, index) => {
				return (
					<div >
						
						<p className="alltaskitem mstext"key={index}>{milestonetask.task}</p>
					</div>
				);
		});
		return (
			<div>
				<p className="mstext"><strong>Tasks </strong></p>
				{singleMilestoneTask}
			</div>
		)
	}
}