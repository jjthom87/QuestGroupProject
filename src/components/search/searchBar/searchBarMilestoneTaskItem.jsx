import React, { Component } from 'react';
var {Link, IndexLink} = require('react-router');

export default class SearchBarMilestoneTaskItem extends React.Component {
	
	render(){
		const { milestoneTasks } = this.props;

		var singleMilestoneTask = () => {
 			return milestoneTasks.map((milestonetask, index) => {
				return (
					<div className="alltaskitem">
							<p id="taskText" key={index}>{milestonetask.task}</p>
					</div>
				);
		});
		return (
			<div>
				<p className="mstext">Tasks</p>
				<ul>{singleMilestoneTask()}</ul>
			</div>
		)
	}
}


}