import React, { Component } from 'react';
import CommentForm from 'CommentForm';

var moment = require('moment');

export default class AllMissionItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        	id: this.props.id,
        	comments: [],
        	likes: this.props.likes
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
	handleLike(MissionId){
        const { id, likes } = this.state;

        MissionId = id;

        fetch(`/api/likemission/${MissionId}`,{
            method: 'PUT',
            body: JSON.stringify(MissionId),
        }).then((response) => response.json())
        .then((results) => {
        	this.setState({
        		likes: likes + 1
        	});
        }); 
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

		const { comments, likes } = this.state;
		const { id, title, description, missiontasks, completedOn, isCompleted } = this.props;

		const filteredComments = comments.filter((comment) => comment.MissionId === id);

		var singleTask = () => {
			return missiontasks.map((task, index) => {
				return (
					<div className="alltaskitem">
						<li>
							<p key={index} id="taskText">{task.task}</p>
						</li>
					</div>
				)
			})
		}
		const renderComments = filteredComments.map((comment, index) => {
			return (
				<div className="alltaskitem">
					<p key={index}><strong>{comment.usersName}:</strong> {comment.comment}</p>
					<p>Commented on {comment.createdOn}</p>
				</div>
			)
		})
		return (
			<div className="alllistdiv">
				<p id="titleall"><strong>{title}</strong></p>
				<p><strong>Description:</strong> {description}</p>
				{singleTask()}
				<p>Completed On: {completedOn}</p>
				<div className="row">
					<div className="text-center">
						<CommentForm onComment={this.handleComment.bind(this)}/><button onClick={this.handleLike.bind(this)} id="likes"><span className="hvr-icon-bounce" aria-hidden="true" id="x"></span>{likes}</button>
					</div>
				</div>
				{renderComments}
			</div>
		)
	}
}