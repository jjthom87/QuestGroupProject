import React, { Component } from 'react';
var moment = require('moment');
import { Line } from 'rc-progress';

export default class MilestoneAndTaskItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        	color: '#37C7FA'
        };
    }
	render(){

		const { milestonetasks } = this.props;

		const renderMilestonetasks = milestonetasks.map((milestonetask, index) => {
			var milestoneTaskClassName = milestonetask.taskCompleted ? 'task-completed' : 'task-notCompleted';
			return (
				<div>
					<li>
						<p key={index} className={milestoneTaskClassName}>{milestonetask.task}</p>
					</li>
				</div>
			)
		})
		return (
			<div>
				<p>Tasks</p>
				<ul>{renderMilestonetasks}</ul>
			</div>
		)
	}
}