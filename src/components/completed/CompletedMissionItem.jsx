import React, { Component } from 'react';
var moment = require('moment');

export default class CompletedMissionItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	render(){

		const { id, title, description, missiontasks, createdOn, completedOn, isCompleted } = this.props;
		var singleTask = () => {
			return missiontasks.map((task, index) => {
				return (
					<div>
						<li>
							<p id="taskText" key={index}>{task.task}</p>
						</li>
					</div>
				)
			})
		}
		return (
			<div>
				<p>Title: {title}</p>
				<p>Description: {description}</p>
				<p>Created On: {createdOn}</p>
				{singleTask()}
				<p>Completed On: {completedOn}</p>
			</div>
		)
	}
}