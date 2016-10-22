import React, { Component } from 'react';

export default class AllMilestonetaskItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	render(){
		const { milestones, milestonetasks } = this.props;

		const renderMilestonetasks = milestonetasks.map(milestonetask => {
			return (
				<div>
					<li>
						<p>{milestonetask.task}</p>
					</li>
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