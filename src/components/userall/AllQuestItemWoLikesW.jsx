import React, { Component } from 'react';
var moment = require('moment');
import { Line } from 'rc-progress';
var ReactBootstrap = require('react-bootstrap');
var Panel = ReactBootstrap.Panel;
import CommentForm from 'CommentForm';
import AllMilestonetaskItemW from 'AllMilestonetaskItemW';

export default class AllQuestItemWoLikesW extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        	id: this.props.id,
        	comments: []
        };
    }
	handleComment(comment) {
		const { id, comments } = this.state;

		const newComment = {
			comment,
			createdOn: moment().format('MMM Do YYYY'),
			QuestId: id
		}
		fetch('/api/users/comment', {
			method: 'post',
			body: JSON.stringify(newComment),
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
		}).then((response) => response.json())
		.then((results) => {
			this.setState({
			comments: comments.concat(results)
		  })
		})
	}
  	componentWillMount(){
  		const { comments } = this.state;
		fetch('/api/comments', {
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
		}).then((response) => response.json())
		.then((results) => {
			this.setState({
				comments: results
			});
		});
	}
	render(){

		const { comments } = this.state;
		const { id, title, likes, allUsers, deleteQuest, completeQuest, deleteMilestone, description, toggleMilestone, milestones, createdOn, isCompleted, taskCompleted, milestonetasks, deleteMilestoneTask, toggleMilestoneTask} = this.props;

		const filteredComments = comments.filter((comment) => comment.QuestId === id);

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
						<span className="questDescription">
							<input
					  			type="checkbox"
					  			checked={isCompleted}
					  			onChange={() => toggleMilestone(milestone.uuid)}
				  			/>
							<p key={index} className={milestoneClassName}><strong> Milestone: </strong>{milestone.milestone}</p>
							<span className="hvr-icon-grow hvr-icon-fade" id="x" onClick={() => deleteMilestone(milestone.uuid)}></span>
						</span>
							<AllMilestonetaskItemW
								milestonetasks={filteredMilestonetask}
                        		toggleMilestoneTask={toggleMilestoneTask}
                        		deleteMilestoneTask={deleteMilestoneTask}
                        	/>
					</div>
				)
			})
		}
		const renderComments = filteredComments.map((comment, index) => {
			const filteredUser = allUsers.filter((user) => user.id === comment.UserId);
			return (
				<div className="alltaskitem">
					<p key={index}><img src={filteredUser[0].profileImage} style={{width: 30, height: 30}}/><strong> {comment.usersName}:</strong> {comment.comment}</p>
					<p>Commented on {comment.createdOn}</p>
				</div>
			)
		})
		return (
			<div className="panelback userprofilediv" id={"panel" + id}>
				<div className="panel-heading topPanel">
					<span> <a data-toggle="collapse" data-target={"#qcollapse" + id} 
           			href={"#qcollapse" + id}><strong>Quest: </strong> {title}</a></span>
		   			<Line percent={percentage} strokeWidth="4" strokeColor="#007B93"/>
				</div>
				<div id={"qcollapse" + id} className="panel-collapse collapse">
					<div className="panel-body">
						<strong><p>You are {percentage}% done with this quest</p></strong>
						<div>
							<p id="taskText" className="mstext"><strong>Description: </strong>{description}</p>
						</div>
						<div>
							<p><strong>Created on: </strong>{createdOn}</p>
						</div>
						<div>
							
							{singleMilestone()}
						</div>
						<div>
							<button onClick={() => deleteQuest(id)}> Delete Quest</button>
							<button onClick={() => completeQuest(id)}> Complete Quest</button>
						</div>
						<div className="row">
							<div className="text-center">
								<CommentForm onComment={this.handleComment.bind(this)}/>
								<p>Likes: {likes}</p>
							</div>
						</div>
						{renderComments}
					</div>
				</div>
			</div>
		)
	}
}