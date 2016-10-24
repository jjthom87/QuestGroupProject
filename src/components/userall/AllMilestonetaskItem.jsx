import React, { Component } from 'react';

export default class AllMilestonetaskItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	render(){
		const { milestones, milestonetasks } = this.props;

		const renderMilestonetasks = milestonetasks.map((milestonetask, index) => {
			return (
				<div className="alltaskitem">
						<p id="taskText" key={index}>{milestonetask.task}</p>
				</div>
			)
		})
		return (
			<div>
				<p>Tasks</p>
				<ul>{renderMilestonetasks}</ul>
			</div>
		)
	}
}