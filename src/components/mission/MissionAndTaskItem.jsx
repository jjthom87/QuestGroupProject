import React, { Component } from 'react';
var moment = require('moment');
import { Line } from 'rc-progress'; 
var ReactBootstap = require('react-bootstrap')
var Panel = ReactBootstap.Panel;

export default class MissionAndTaskItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	render(){

		const { id, title, deleteMission, deleteMissionTask, completeMission, description, toggleMissionTask, missiontasks, createdOn, isCompleted, dateTask, timeTask } = this.props;

		var completedTasks = missiontasks.filter((task) => task.isCompleted);

		const doit = ((completedTasks.length/missiontasks.length) * 100);
		
		const percentage = parseInt(doit);

		var singleTask = () => {
			return missiontasks.map((task, index) => {
				var taskClassName = task.isCompleted ? 'task-completed' : 'task-notCompleted';
				const dateTaskRender = () => {
					if(task.dateTask === '' && task.timeTask !== ''){
						return(
							<p className={taskClassName}>Complete at {task.timeTask}</p>
						)
					} else if(task.dateTask === '' && task.timeTask === ''){
						return (
							<p></p>
						)
					} else if (task.dateTask !== '' && task.timeTask === ''){
						return(
							<p className={taskClassName}>Complete on {task.dateTask}</p>
						)
					} else {
						return (
							<p className={taskClassName}>Complete on {task.dateTask} at {task.timeTask}</p>
						)
					}
				}
				return (
					<div className="alltaskitem">
						<span>
							<input
					  			type="checkbox"
					  			checked={isCompleted}
					  			onChange={() => toggleMissionTask(task.uuid)}
					  			key={index}
				  			/>
							<p className={taskClassName} id="taskText">{task.task}</p>
							{dateTaskRender()}<span className="hvr-icon-grow hvr-icon-fade" id="x" onClick={() => deleteMissionTask(task.uuid)}></span>
						</span>
					</div>
				)
			})
		}
		return (
			
			<div className="panelbackHome userprofilediv" id={"panel" + id}>
				<div className="panel-heading topPanel">
					<span> <a data-toggle="collapse" data-target={"#collapse" + id} 
           			href={"#collapse" + id}><strong>Mission: </strong> {title}</a></span>
		   			<Line percent={percentage} strokeWidth="4" strokeColor="#007B93"/>
				</div>
				<div id={"collapse" + id}className="panel-collapse collapse in">
					<div className="panel-body">
						<strong><p>You are {percentage}% done with this mission</p></strong>
						<div>
							<p id="taskText" ><strong>Description: </strong>{description}</p>
						</div>
						<div>
							<p><strong>CreatedOn: </strong>{createdOn}</p>
						</div>
						<div>
							<p id="taskText"><strong>Tasks</strong></p>
							{singleTask()}
						</div>
						<div>
							<button onClick={() => deleteMission(id)}> Delete Mission</button>
							<button onClick={() => completeMission(id)}> Complete Mission</button>
						</div>	
					</div>
				</div>
			</div>
			
		)
	}
}