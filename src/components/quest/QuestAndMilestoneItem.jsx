import React, { Component } from 'react';
var moment = require('moment');
import { Line } from 'rc-progress'; 

export default class QuestAndMilestoneItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        	color: '#37C7FA'
        };
    }
	render(){

		const { id, uuid, title, deleteQuest, deleteMilestone, description, toggleMilestone, milestones, createdOn, isCompleted, taskCompleted, active, milestonetasks, deleteMilestoneTask, toggleMilestoneTask } = this.props;

		var completedMilestones = milestones.filter((milestone) => milestone.isCompleted);
		var completedMilestoneTasks = milestonetasks.filter((milestonetask) => milestonetask.taskCompleted);

		const doit = (((completedMilestones.length + completedMilestoneTasks.length)/(milestones.length + milestonetasks.length)) * 100);
		const percentage = parseInt(doit);

		var singleMilestone = () => {
			return milestones.map((milestone, index) => {
				var filteredMilestoneTasks = milestonetasks.filter((milestonetask) => milestonetask.MilestoneUuid === milestone.uuid);
				var milestoneClassName = milestone.isCompleted ? 'task-completed' : 'task-notCompleted';
				var milestoneTaskClassName = filteredMilestoneTasks.taskCompleted ? 'task-completed' : 'task-notCompleted';
				return filteredMilestoneTasks.map((milestonetask, index) => {
				return (
					<div>
						<li>
							<input
					  			type="checkbox"
					  			checked={isCompleted}
					  			onChange={() => toggleMilestone(milestone.uuid)}
				  			/>
							<p className={milestoneClassName}>{milestone.milestone}</p>
							<button onClick={() => deleteMilestone(milestone.uuid)}>X</button>
						</li>
						<ul>
							<li>
								<input
						  			type="checkbox"
						  			checked={taskCompleted}
						  			onChange={() => toggleMilestoneTask(milestonetask.uuid)}
					  			/>
								<p className={milestoneTaskClassName}>{milestonetask.task}</p>
								<button onClick={() => deleteMilestoneTask(milestonetask.uuid)}>X</button>
							</li>
						</ul>
					</div>
				)
			  })
			})
		}
		var renderDate = () => {
			var message = "Added on ";
			var timestamp = createdOn

			return message + moment(timestamp).format('MMM Do YYYY @ h:mm a')
		}
		return (
			<div>
				<div>
					<p>Quest Title</p>
				</div>
				<div>
					<p>{title}</p>
				</div>
				<div>
					<p>Quest description</p>
				</div>
					<p>{description}</p>
				<div>
					<p>Milestones</p>
					{singleMilestone()}
				</div>
				<div>
					<button onClick={() => deleteQuest(id)}>Delete Quest</button>
				</div>
				<Line percent={percentage} strokeWidth="4" strokeColor="#3FC7FA"/>
				<p>You are {percentage}% done with this quest</p>
			</div>
		)
	}
}