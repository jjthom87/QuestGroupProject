import React, { Component } from 'react';
var moment = require('moment');
import { Line } from 'rc-progress';
var ReactBootstrap = require('react-bootstrap');
var Panel = ReactBootstrap.Panel;
import MilestoneAndTaskItem from 'MilestoneAndTaskItem';

export default class QuestAndMilestoneItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        	color: '#37C7FA'
        };
    }
	render(){

		const { id, title, dateQuest, deleteQuest, completeQuest, deleteMilestone, description, toggleMilestone, milestones, createdOn, isCompleted, taskCompleted, milestonetasks, deleteMilestoneTask, toggleMilestoneTask} = this.props;

		var completedMilestones = milestones.filter((milestone) => milestone.isCompleted);
		var completedMilestonetasks = milestonetasks.filter((milestonetask) => milestonetask.taskCompleted);

		const doit = ((completedMilestones.length + completedMilestonetasks.length)/(milestones.length + milestonetasks.length) * 100);
		const percentage = parseInt(doit);

		var singleMilestone = () => {
			return milestones.map((milestone, index) => {
				var milestoneClassName = milestone.isCompleted ? 'task-completed' : 'task-notCompleted';
				var filteredMilestonetask = milestonetasks.filter((milestonetask) => milestonetask.MilestoneUuid === milestone.uuid);
				console.log(filteredMilestonetask)
				return (
					<div>
						<span className="questDescription">
							<input
					  			type="checkbox"
					  			checked={isCompleted}
					  			onChange={() => toggleMilestone(milestone.uuid)}
				  			/>
							<p key={index} className={milestoneClassName}><strong> MileStone: </strong>{milestone.milestone}</p>
							<span className="hvr-icon-grow hvr-icon-fade" id="x" onClick={() => deleteMilestone(milestone.uuid)}></span>
						</span>
						<div>
							<span>
								<MilestoneAndTaskItem 
									milestonetasks={filteredMilestonetask}
	                        		toggleMilestoneTask={toggleMilestoneTask}
	                        		deleteMilestoneTask={deleteMilestoneTask}
	                        	/>
	                        </span>
                        </div>
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
			<div className="panelbackHome userprofilediv" id={"panel" + id}>
				<div className="panel-heading topPanel">
						<span> <a data-toggle="collapse" data-target={"#qcollapse" + id} href={"#qcollapse" + id}><strong>Quest: </strong> {title} </a></span>
						<Line percent={percentage} strokeWidth="4" strokeColor="#3FC7FA"/>
				</div>
				<div id={"qcollapse" + id} className="panel-collapse collapse in">
				<div className="panel-body">
					<div>
						<p>You are {percentage}% done with this quest</p>
					</div>
					<div>
						<p id="taskText" className="mstext" ><strong>Description:</strong>{description}</p>
						<p>Created on: {createdOn}</p>
					</div>
					<div>
						{singleMilestone()}
					</div>
					<div>
						<button onClick={() => deleteQuest(id)}>Delete Quest</button>
						<button onClick={() => completeQuest(id)}>Complete Quest</button>
					</div>
					<p>{renderDate()}</p>
				</div>
				</div>
			</div>
		)
	}
}