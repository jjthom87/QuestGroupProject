import React, { Component } from 'react';
var moment = require('moment');
import { Line } from 'rc-progress';

export default class MilestoneAndTaskItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	render(){

		const { taskCompleted, milestonetasks, deleteMilestoneTask, toggleMilestoneTask } = this.props;

		const renderMilestonetasks = milestonetasks.map((milestonetask, index) => {
			var milestoneTaskClassName = milestonetask.taskCompleted ? 'task-completed' : 'task-notCompleted';
			return (
				<div className="mstasks alltaskitem">
						<input
							type="checkbox"
							checked={taskCompleted}
							onChange={() => toggleMilestoneTask(milestonetask.uuid)}
						/>
						<p key={index} className={milestoneTaskClassName}>{milestonetask.task}</p>
						<span className="hvr-icon-grow hvr-icon-fade" id="x" onClick={() => deleteMilestoneTask(milestonetask.uuid)}></span>
				</div>
			)
		})
		return (
			<div>
				<p>Tasks</p>
				<span>{renderMilestonetasks}</span>
			</div>
		)
	}
}