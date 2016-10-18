import React, { Component } from 'react';
var moment = require('moment');
import { Line } from 'rc-progress'; 

export default class MissionAndTaskItem extends React.Component {
	render(){
		const { id, uuid, title, deleteMission, description, toggleTask, tasks, createdOn, isCompleted, active } = this.props;
		
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
				<Line percent="10" strokeWidth="4" strokeColor="D3D3D3"/>
			</div>
		)
	}
}