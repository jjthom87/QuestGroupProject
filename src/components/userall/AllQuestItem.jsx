import React, { Component } from 'react';

import AllMilestonetaskItem from 'AllMilestonetaskItem';

export default class AllQuestItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	render(){
		const { id, title, description, milestones, milestonetasks, completedOn, isCompleted } = this.props;
		var singleMilestone = () => {
			return milestones.map((milestone, index) => {
				var filteredMilestonetask = milestonetasks.filter((milestonetask) => milestonetask.MilestoneUuid === milestone.uuid);
				return (
					<div>
						<li>
							<p>Milestone</p>
							<p id="taskText">{milestone.milestone}</p>
							<AllMilestonetaskItem
								milestonetasks={filteredMilestonetask}
                        	/>
						</li>
					</div>
				)
			})
		}
		return (
			<div>
				<p>Title: {title}</p>
				<p>Description: {description}</p>
				{singleMilestone()}
				<p>Completed On: {completedOn}</p>
			</div>
		)
	}
}