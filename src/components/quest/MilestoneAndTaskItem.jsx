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

		const { id, title, dateQuest, deleteQuest, completeQuest, deleteMilestone, milestones, taskCompleted, milestonetasks, deleteMilestoneTask, toggleMilestoneTask } = this.props;

		const renderMilestonetasks = milestonetasks.map((milestonetask, index) => {
			var milestoneTaskClassName = milestonetask.taskCompleted ? 'task-completed' : 'task-notCompleted';
			return (
				<div>
					<li>
						<input
							type="checkbox"
							checked={taskCompleted}
							onChange={() => toggleMilestoneTask(milestonetask.uuid)}
						/>
						<p key={index} className={milestoneTaskClassName}>{milestonetask.task}</p>
						<span className="glyphicon glyphicon-remove-circle" onClick={() => deleteMilestoneTask(milestonetask.uuid)}></span>
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