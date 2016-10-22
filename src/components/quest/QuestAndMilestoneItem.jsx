import React, { Component } from 'react';
var moment = require('moment');
import { Line } from 'rc-progress';
import MilestoneAndTaskItem from 'MilestoneAndTaskItem';

export default class QuestAndMilestoneItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        	color: '#37C7FA'
        };
    }
	render(){

		const { id, title, dateQuest, deleteQuest, completeQuest, deleteMilestone, description, toggleMilestone, milestones, createdOn, isCompleted, taskCompleted, active, milestonetasks, deleteMilestoneTask, toggleMilestoneTask } = this.props;

		var completedMilestones = milestones.filter((milestone) => milestone.isCompleted);
		var completedMilestonetasks = milestonetasks.filter((milestonetask) => milestonetask.taskCompleted);

		const doit = ((completedMilestones.length + completedMilestonetasks.length)/(milestones.length + milestonetasks.length) * 100);
		const percentage = parseInt(doit);


		var singleMilestone = () => {
			return milestones.map((milestone, index) => {
				var milestoneClassName = milestone.isCompleted ? 'task-completed' : 'task-notCompleted';
				var filteredMilestonetask = milestonetasks.filter((milestonetask) => milestonetask.MilestoneUuid === milestone.uuid);
				return (
					<div>
						<span>
					
							
							<input
					  			type="checkbox"
					  			checked={isCompleted}
					  			onChange={() => toggleMilestone(milestone.uuid)}
				  			/>
							<p className={milestoneClassName}><strong> MileStone: </strong>{milestone.milestone}</p>
							<span className="glyphicon glyphicon-remove-circle" onClick={() => deleteMilestone(milestone.uuid)}></span>
						
						</span>
							<MilestoneAndTaskItem 
								milestonetasks={filteredMilestonetask}
                        		toggleMilestoneTask={toggleMilestoneTask}
                        		deleteMilestoneTask={deleteMilestoneTask}
                        	/>
					</div>
				)
			})
		}
		// var singleMilestone = () => {
		// 	return milestones.map((milestone, index) => {
		// 		var filteredMilestoneTasks = milestonetasks.filter((milestonetask) => milestonetask.MilestoneUuid === milestone.uuid);
		// 		return filteredMilestoneTasks.map((milestonetask, index) => {
		// 			var milestoneTaskClassName = milestonetask.taskCompleted ? 'task-completed' : 'task-notCompleted';
		// 		return (
		// 			<div>
		// 				<li>
		// 					<input
		// 			  			type="checkbox"
		// 			  			checked={taskCompleted}
		// 			  			onChange={() => toggleMilestoneTask(milestonetask.uuid)}
		// 		  			/>
		// 					<p className={milestoneTaskClassName}>{milestonetask.task}</p>
		// 					<button onClick={() => deleteMilestoneTask(milestonetask.uuid)}>X</button>
		// 				</li>
		// 			</div>
		// 		)
		// 	  })
		// 	})
		// }
        var renderDate = () => {
            var message = "Quest Due ";
            const dated = dateQuest.split('-').join('');

            return message + moment(dated, "YYYYMMDD").fromNow();
        }
		return (
			<div className="panel panel-default" id="panel1">
				<div className="panel-heading">
						<span> <a data-toggle="collapse" data-target="#collapseOne" href="#collapseOne"><strong>Quest: </strong> {title} </a></span>
						<Line percent={percentage} strokeWidth="4" strokeColor="#3FC7FA"/>
				</div>
				<div id="collapseOne" className="panel-collapse collapse in">
				<div className="panel-body">
					<div>
						<p>You are {percentage}% done with this quest</p>
					</div>
					<div>
						<p><strong>Description:</strong>{description}</p>
						<p>{createdOn}</p>
					</div>
					<div>
						{singleMilestone()}
					</div>
					<div>
						<button onClick={() => deleteQuest(id)}>Delete Quest</button>
						<button onClick={() => completeQuest(id)}>Complete Quest</button>
					</div>
					<p>{renderDate()}</p>
				</div>
				</div>
			</div>
		)
	}
}