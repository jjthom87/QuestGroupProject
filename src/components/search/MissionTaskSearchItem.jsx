import React, { Component } from 'react';
var moment = require('moment');
import { Line } from 'rc-progress'; 

export default class MissionTaskSearchItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        	color: '#37C7FA'
        };
    }
	render(){

		const { id, uuid, title, description, percent, missiontasks, createdOn, isCompleted, active } = this.props;

		var completedTasks = missiontasks.filter((task) => task.isCompleted);

		const doit = ((completedTasks.length/missiontasks.length) * 100);
		const percentage = parseInt(doit);

		var singleTask = () => {
			return missiontasks.map((task, index) => {
				var taskClassName = task.isCompleted ? 'task-completed' : 'task-notCompleted';
				return (
					<div>
						<span>
							<p className={taskClassName} id="taskText">{task.task}</p>
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
					<span> <strong>{title}</strong> </span>
		  			<Line percent={percentage} strokeWidth="4" strokeColor="#3FC7FA"/>
		  			<p>Achievement: <strong> {percentage}%</strong></p>
				</div>
					<div className="panel-body">
						<div>
							<p><strong>Description:</strong>{description}</p>
						</div>
						<div>
							<p>
								<strong><u>Tasks</u></strong>
							</p>
							<ul>{singleTask()}</ul>
						</div>
					</div>
			</div>
		)
	}
}