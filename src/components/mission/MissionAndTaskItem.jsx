import React, { Component } from 'react';
var moment = require('moment');

export default class MissionAndTakeItem extends React.Component {
	render(){
		const { id, title, deleteMission, description, missions, tasks, createdOn, isCompleted, active } = this.props;

		var renderDate = () => {
			var message = "Added on ";
			var timestamp = createdOn

			return message + moment(timestamp).format('MMM Do YYYY @ h:mm a')
		}
		console.log(missions.concat(tasks));

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
				<div>
					<p>Tasks</p>
				</div>
			</div>
		)
	}
}