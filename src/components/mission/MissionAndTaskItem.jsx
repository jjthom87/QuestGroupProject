import React, { Component } from 'react';
var moment = require('moment');
import { Line } from 'rc-progress'; 

export default class MissionAndTaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	color: '#37C7FA',
        	percent: ''
        };
    }
    changeLine(){
    	const { tasks } = this.props
    	var completedTasks = tasks.filter((task) => !isCompleted);
    	this.setState({
    		percent: completedTasks.length/tasks.length
    	})
    }
	render(){

		const { id, uuid, title, deleteMission, description, percent, toggleTask, tasks, createdOn, isCompleted, active } = this.props;

		var completedTasks = tasks.filter((task) => !isCompleted);

		const percentage = completedTasks.length/tasks.length

		var singleTask = () => {
			return tasks.map((task, index) => {
				return (
					<div>
						<input
				  			type="checkbox"
				  			checked={isCompleted}
				  			onChange={() => toggleTask(task.uuid)}
			  			/>
						<p>{task.task}</p>
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
			</div>
		)
	}
}