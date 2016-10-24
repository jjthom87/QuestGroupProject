import React, { Component } from 'react';
var moment = require('moment');
import { Line } from 'rc-progress'; 
var ReactBootstrap = require('react-bootstrap');
var Panel = ReactBootstrap.Panel;
import CommentForm from 'CommentForm';

export default class AllMissionItemWoLikesW extends React.Component { 
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
			MissionId: id
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

		const { id, title, deleteMission, deleteMissionTask, completeMission, description, percent, toggleMissionTask, missiontasks, createdOn, isCompleted, allUsers } = this.props;

		var completedTasks = missiontasks.filter((task) => task.isCompleted);

		const doit = ((completedTasks.length/missiontasks.length) * 100);
		const percentage = parseInt(doit);

		var singleTask = () => {
			return missiontasks.map((task, index) => {
				var taskClassName = task.isCompleted ? 'task-completed' : 'task-notCompleted';
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
							<span className="hvr-icon-grow hvr-icon-fade" id="x" onClick={() => deleteMissionTask(task.uuid)}></span>
						</span>
						
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
			<div className="panel panel-default" id={"panel" + id}>
				<div className="panel-heading">
					<span> <a data-toggle="collapse" data-target={"#mcollapse" + id} 
           			href={"#mcollapse" + id}><strong>Mission: </strong> {title}</a></span>
		   			<Line percent={percentage} strokeWidth="4" strokeColor="#007B93"/>
				</div>
				<div id={"mcollapse" + id} className="panel-collapse collapse in">
					<div className="panel-body">
						<strong><p>You are {percentage}% done with this mission</p></strong>
						<div>
							<p id="taskText" className="alltaskitem"><strong>Description: </strong>{description}</p>
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
						<div className="row">
							<div className="text-center">
								<CommentForm onComment={this.handleComment.bind(this)}/>
							</div>
						</div>
						{renderComments}
					</div>
				</div>
			</div>
			
		)
	}
}