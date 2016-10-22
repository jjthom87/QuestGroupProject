import React, { Component } from 'react';

export default class AllMissionItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	render(){

		const { id, title, description, missiontasks, completedOn, isCompleted } = this.props;
		var singleTask = () => {
			return missiontasks.map((task, index) => {
				return (
					<div>
						<li>
							<p id="taskText">{task.task}</p>
						</li>
					</div>
				)
			})
		}
		return (
			<div>
				<p>Title: {title}</p>
				<p>Description: {description}</p>
				{singleTask()}
				<p>Completed On: {completedOn}</p>
			</div>
		)
	}
}