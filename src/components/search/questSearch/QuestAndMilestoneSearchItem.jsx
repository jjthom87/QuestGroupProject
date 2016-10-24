import React, { Component } from 'react';
var moment = require('moment');
import { Line } from 'rc-progress';
import MilestoneAndTaskSearchItem from 'MilestoneAndTaskSearchItem';
var ReactBootstrap = require('react-bootstrap');
var Panel = ReactBootstrap.Panel;
export default class QuestAndMilestoneItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        	color: '#37C7FA'
        };
    }
	render(){

		const { id, title, dateQuest, deleteQuest, completeQuest, deleteMilestone, description, toggleMilestone, milestones, createdOn, isCompleted, taskCompleted, active, milestonetasks, deleteMilestoneTask, toggleMilestoneTask} = this.props;

		var completedMilestones = milestones.filter((milestone) => milestone.isCompleted);
		var completedMilestonetasks = milestonetasks.filter((milestonetask) => milestonetask.taskCompleted);

		const doit = ((completedMilestones.length + completedMilestonetasks.length)/(milestones.length + milestonetasks.length) * 100);
		const percentage = parseInt(doit);


		var singleMilestone = () => {
			return milestones.map((milestone, index) => {
				var milestoneClassName = milestone.isCompleted ? 'task-completed' : 'task-notCompleted';
				var filteredMilestonetask = milestonetasks.filter((milestonetask) => milestonetask.MilestoneUuid === milestone.uuid);
				return (
					<div>
						<span>
							<p key={index} className={milestoneClassName}><strong> MileStone: </strong>{milestone.milestone}</p>
						</span>
							<MilestoneAndTaskSearchItem 
								milestonetasks={filteredMilestonetask}
                        	/>
					</div>
				)
			})
		}

        var renderDate = () => {
            var message = "Quest Due ";
            const dated = dateQuest.split('-').join('');

            return message + moment(dated, "YYYYMMDD").fromNow();
        }
		return (
			<div className="panel panel-default" id={"panel" + id}>
				<div className="panel-heading">
						<span> <a data-toggle="collapse" data-target={"#collapse" + id} href={"#collapse" + id}><strong>Quest: </strong> {title} </a></span>
						<Line percent={percentage} strokeWidth="4" strokeColor="#3FC7FA"/>
				</div>
				<div id={"collapse" + id} className="panel-collapse collapse in">
				<div className="panel-body">
					<div>
						<p>You are {percentage}% done with this quest</p>
					</div>
					<div>
						<p><strong>Description:</strong>{description}</p>
						<p>Created on: {createdOn}</p>
					</div>
					<div>
						{singleMilestone()}
					</div>
					<p>{renderDate()}</p>
				</div>
				</div>
			</div>
		)
	}
}