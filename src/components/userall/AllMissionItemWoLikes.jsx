import React, { Component } from 'react';
import CommentForm from 'CommentForm';

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
		const { id, title, description, missiontasks, completedOn, isCompleted } = this.props;

		const filteredComments = comments.filter((comment) => comment.MissionId === id);

		var singleTask = () => {
			return missiontasks.map((task, index) => {
				return (
					<div>
						<li>
							<p key={index} id="taskText">{task.task}</p>
						</li>
					</div>
				)
			})
		}
		const renderComments = filteredComments.map((comment, index) => {
			return (
				<div>
					<p key={index}>{comment.usersName}: {comment.comment}</p>
					<p>Commented on {comment.createdOn}</p>
				</div>
			)
		})
		return (
			<div className="panel panel-default" id={"panel" + id}>
				<div className="panel-heading">
				<span> <a data-toggle="collapse" data-target={"#collapse" + id} 
           			href={"#collapse" + id}><strong>Mission: </strong> {title}</a></span>
				</div>
				<div id={"collapse" + id}className="panel-collapse collapse">
				<div className="panel-body">
				<p>Description: {description}</p>
				{singleTask()}
				<p>Completed On: {completedOn}</p>
				<CommentForm onComment={this.handleComment.bind(this)}/>
				{renderComments}
				</div>
				</div>
			</div>
		)
	}
}