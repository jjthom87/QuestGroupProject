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

		const { id, uuid, title, deleteMission, deleteTask, description, percent, toggleTask, tasks, createdOn, isCompleted, active } = this.props;

		var completedTasks = tasks.filter((task) => task.isCompleted);

		const percentage = ((completedTasks.length/tasks.length) * 100);

		var singleTask = () => {
			return tasks.map((task, index) => {
				var taskClassName = task.isCompleted ? 'task-completed' : 'task-notCompleted';
				return (
					<div>
						<span>
							<input
					  			type="checkbox"
					  			checked={isCompleted}
					  			onChange={() => toggleTask(task.uuid)}
				  			/>
							<p className={taskClassName} id="taskText">{task.task}</p>
							<button onClick={() => deleteTask(task.uuid)}>X</button>
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
			<div>

				<div>
					<span><p><strong>Mission:</strong> {title}</p></span>
				</div>
				<div>
					<p><strong>Description:</strong>{description}</p>
				</div>
				<div>
					<p><strong>Tasks</strong></p>
					{singleTask()}
				</div>
				<div>
					<button onClick={() => deleteMission(id)}>Delete Mission</button>
				</div>
				<Line percent={percentage} strokeWidth="4" strokeColor="#3FC7FA"/>
				<p>You are {percentage}% done with this mission</p>
			</div>
		)
	}
}