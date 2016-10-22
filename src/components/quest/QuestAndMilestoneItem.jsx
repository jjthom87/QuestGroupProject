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

		const { id, title, dateQuest, deleteQuest, completeQuest, deleteMilestone, description, toggleMilestone, milestones, createdOn, isCompleted, taskCompleted, active, milestonetasks, deleteMilestoneTask, toggleMilestoneTask } = this.props;
		console.log(dateQuest);
		var completedMilestones = milestones.filter((milestone) => milestone.isCompleted);
		var completedMilestoneTasks = milestonetasks.filter((milestonetask) => milestonetask.taskCompleted);

		const doit = ((completedMilestoneTasks.length)/milestonetasks.length * 100);
		const percentage = parseInt(doit);

		var singleMilestone = () => {
			return milestones.map((milestone, index) => {
				var filteredMilestoneTasks = milestonetasks.filter((milestonetask) => milestonetask.MilestoneUuid === milestone.uuid);
				return filteredMilestoneTasks.map((milestonetask, index) => {
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
							<button onClick={() => deleteMilestoneTask(milestonetask.uuid)}>X</button>
						</li>
						<button onClick={() => deleteMilestone(milestone.uuid)}>X</button>
					</div>
				)
			  })
			})
		}
        var renderDate = () => {
            var message = "Quest Due ";
            const dated = dateQuest.split('-').join('');

            return message + moment(dated, "YYYYMMDD").fromNow();
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
					<button onClick={() => completeQuest(id)}>Complete Quest</button>
				</div>
				<Line percent={percentage} strokeWidth="4" strokeColor="#3FC7FA"/>
				<p>You are {percentage}% done with this quest</p>
				<p>{renderDate()}</p>
			</div>
		)
	}
}