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

		const { id, uuid, title, deleteMission, description, percent, toggleTask, tasks, createdOn, isCompleted, active } = this.props;

		var completedTasks = tasks.filter((task) => task.isCompleted);

		const percentage = ((completedTasks.length/tasks.length) * 100);

		var singleTask = () => {
			return tasks.map((task, index) => {
				var taskClassName = task.isCompleted ? 'task-completed' : 'task-notCompleted';
				return (
					<div>
						<li>
							<input
					  			type="checkbox"
					  			checked={isCompleted}
					  			onChange={() => toggleTask(task.uuid)}
				  			/>
							<p className={taskClassName}>{task.task}</p>
						</li>
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
			<div>
				<div>
					<p>Mission Title</p>
				</div>
				<div>
					<p>{title}</p>
				</div>
				<div>
					<p>Mission description</p>
				</div>
					<p>{description}</p>
				<div>
					<p>Tasks</p>
					{singleTask()}
				</div>
				<div>
					<button onClick={() => deleteMission(id)}>Delete</button>
				</div>
				<Line percent={percentage} strokeWidth="4" strokeColor="#3FC7FA"/>
				<p>You are {percentage}% done with this mission</p>
			</div>
		)
	}
}