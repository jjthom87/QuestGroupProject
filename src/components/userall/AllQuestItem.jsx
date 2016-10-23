import React, { Component } from 'react';
var moment = require('moment');

import CommentForm from 'CommentForm';
import AllMilestonetaskItem from 'AllMilestonetaskItem';

export default class AllQuestItem extends React.Component { 
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
	handleLike(QuestId){
        const { id, likes } = this.state;

        QuestId = id;

        fetch(`/api/likequest/${QuestId}`,{
            method: 'PUT',
            body: JSON.stringify(QuestId),
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
		const { id, title, description, milestones, milestonetasks, completedOn, isCompleted } = this.props;

		const filteredComments = comments.filter((comment) => comment.QuestId === id);

		var singleMilestone = () => {
			return milestones.map((milestone, index) => {
				var filteredMilestonetask = milestonetasks.filter((milestonetask) => milestonetask.MilestoneUuid === milestone.uuid);
				return (
					<div>
						<li>
							<p>Milestone</p>
							<p key={index} id="taskText">{milestone.milestone}</p>
							<AllMilestonetaskItem
								milestonetasks={filteredMilestonetask}
                        	/>
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
			<div className="alllistdiv">
				<p><strong> {title}</strong></p>
				<p>Description: {description}</p>
				{singleMilestone()}
				<p>Completed On: {completedOn}</p>
				<div className="row">
					<div className="text-center">
						<CommentForm onComment={this.handleComment.bind(this)}/><button onClick={this.handleLike.bind(this)}><span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>{likes}</button>
					</div>
				</div>
				{renderComments}
			</div>
		)
	}
}