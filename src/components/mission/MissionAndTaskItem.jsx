import React, { Component } from 'react';
var moment = require('moment');
import { Line } from 'rc-progress'; 

export default class MissionAndTaskItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        	color: '#37C7FA'
        };
    }
	render(){

		const { id, uuid, title, deleteMission, deleteMissionTask, completeMission, description, percent, toggleMissionTask, missiontasks, createdOn, isCompleted, active } = this.props;

		var completedTasks = missiontasks.filter((task) => task.isCompleted);

		const doit = ((completedTasks.length/missiontasks.length) * 100);
		const percentage = parseInt(doit);

		var singleTask = () => {
			return missiontasks.map((task, index) => {
				var taskClassName = task.isCompleted ? 'task-completed' : 'task-notCompleted';
				return (
					<div>
						<span>
							<input
					  			type="checkbox"
					  			checked={isCompleted}
					  			onChange={() => toggleMissionTask(task.uuid)}
				  			/>
							<p className={taskClassName} id="taskText">{task.task}</p>
							<span className="glyphicon glyphicon-remove-circle" onClick={() => deleteMissionTask(task.uuid)}></span>
						</span>
						
					</div>
				)
			})
		}
		var renderDate = () => {
			var message = "Added on ";
			var timestamp = createdOn

			return message + moment(timestamp).format('MMM Do YYYY @ h:mm a')
		}
		return (
			<div className="panel panel-default" id="panel1">

				<div className="panel-heading">
					<span> <a data-toggle="collapse" data-target="#collapseOne" 
           href="#collapseOne"><strong>Mission:</strong> {title}</a></span>
		   <Line percent={percentage} strokeWidth="4" strokeColor="#3FC7FA"/>
				</div>
				<div id="collapseOne" className="panel-collapse collapse in">
					<div className="panel-body">
						<strong><p>You are {percentage}% done with this mission</p></strong>
						<div>
							<p><strong>Description:</strong>{description}</p>
						</div>
						<div>
							<p><strong>Tasks</strong></p>
							{singleTask()}
						</div>
						<div>
							<button onClick={() => deleteMission(id)}>Delete Mission</button>
							<button onClick={() => completeMission(id)}>Complete Mission</button>
						</div>
						
						</div>
					</div>
			</div>
		)
	}
}