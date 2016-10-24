import React, { Component } from 'react';
import CommentForm from 'CommentForm';
var ReactBootstrap = require('react-bootstrap');
var Panel = ReactBootstrap.Panel;
var moment = require('moment');

export default class AllMissionItemWoLikes extends React.Component { 
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

		const { comments } = this.state;
		const { id, title, description, missiontasks, completedOn, isCompleted, createdOn, likes, allUsers } = this.props;

		const filteredComments = comments.filter((comment) => comment.MissionId === id);

		var singleTask = () => {
			return missiontasks.map((task, index) => {
				var taskClassName = task.isCompleted ? 'task-completed' : 'task-notCompleted';
				return (
					<div>
						<li>
							<p className={taskClassName} key={index} id="taskText">{task.task}</p>
						</li>
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
				</div>
				<div id={"mcollapse" + id}className="panel-collapse collapse">
					<div className="panel-body">
						<p>Description: {description}</p>
						<p>Created On: {createdOn}</p>
						{singleTask()}
						<p>Completed On: {completedOn}</p>
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