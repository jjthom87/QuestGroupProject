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
		// var singleMilestoneTask = () => {
		// 	milestonetasks.map((milestonetask, index) => {
		// 		console.log(milestonetask);
		// 		var milestoneTaskClassName = milestonetask.taskCompleted ? 'task-completed' : 'task-notCompleted';
		// 		return (
		// 			<div>
		// 				<ul>
		// 					<li>
		// 						<input
		// 				  			type="checkbox"
		// 				  			checked={taskCompleted}
		// 				  			onChange={() => toggleMilestoneTask(milestonetask.uuid)}
		// 			  			/>
		// 						<p className={milestoneTaskClassName}>{milestonetask.task}</p>
		// 						<button onClick={() => deleteMilestoneTask(milestonetask.uuid)}>X</button>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 		)
		// 	})
		// }
		const renderMilestonetasks = milestonetasks.map(milestonetask => {
			var milestoneTaskClassName = milestonetask.taskCompleted ? 'task-completed' : 'task-notCompleted';
			return (
				<div>
					<li>
						<input
							type="checkbox"
							checked={taskCompleted}
							onChange={() => toggleMilestoneTask(milestonetask.uuid)}
						/>
						<p className={milestoneTaskClassName}>{milestonetask.task}</p>
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