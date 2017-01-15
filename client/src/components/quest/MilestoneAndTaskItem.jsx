import React, { Component } from 'react';
var moment = require('moment');

export default class MilestoneAndTaskItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	render(){
		const { taskCompleted, milestonetasks, deleteMilestoneTask, toggleMilestoneTask } = this.props;

		var renderMilestonetasks = () => {
			return milestonetasks.map((milestonetask, index) => {
			var milestoneTaskClassName = milestonetask.taskCompleted ? 'task-completed' : 'task-notCompleted';
				const dateTaskRender = () => {
					if(milestonetask.dateTask === '' && milestonetask.timeTask !== ''){
						return(
							<p className={milestoneTaskClassName}>Complete at {milestonetask.timeTask}</p>
						)
					} else if(milestonetask.dateTask === '' && milestonetask.timeTask === ''){
						return (
							<p></p>
						)
					} else if (milestonetask.dateTask !== '' && milestonetask.timeTask === ''){
						return(
							<p className={milestoneTaskClassName}>Complete on {milestonetask.dateTask}</p>
						)
					} else {
						return (
							<p className={milestoneTaskClassName}>Complete on {milestonetask.dateTask} at {milestonetask.timeTask}</p>
						)
					}
				}
				return (
					<div className="mstasks alltaskitem">
						<span>
							<input
								type="checkbox"
								checked={taskCompleted}
								onChange={() => toggleMilestoneTask(milestonetask.uuid)}
							/>
							<p key={index} className={milestoneTaskClassName}>{milestonetask.task}</p>
							{dateTaskRender()}<span className="hvr-icon-grow hvr-icon-fade" id="x" onClick={() => deleteMilestoneTask(milestonetask.uuid)}></span>
						</span>
					</div>
				)
			})
		}
		return (
			<div>
				<p>Tasks</p>
				{renderMilestonetasks()}
			</div>
		)
	}
}