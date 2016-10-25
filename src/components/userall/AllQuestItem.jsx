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
		const { id, title, description, milestones, milestonetasks, completedOn, isCompleted, allUsers } = this.props;

		const filteredComments = comments.filter((comment) => comment.QuestId === id);

		var singleMilestone = () => {
			return milestones.map((milestone, index) => {
				var filteredMilestonetask = milestonetasks.filter((milestonetask) => milestonetask.MilestoneUuid === milestone.uuid);
				return (
					<div >
							<span className="questDescription">
							<p ><strong>Milestone: </strong></p>
							<p key={index}  id="taskText">{milestone.milestone}</p>
							<AllMilestonetaskItem
								milestonetasks={filteredMilestonetask}
                        	/>
							</span>
					
					</div>
				)
			})
		}
		const renderComments = filteredComments.map((comment, index) => {
			const filteredUser = allUsers.filter((user) => user.id === comment.UserId);
			return (

				<div>
					<div>
					<p className="commentText" key={index}><img src={filteredUser[0].profileImage} style={{width: 35, height: 35}}/><strong>{comment.usersName}:</strong> {comment.comment}</p>
					</div>
					<p id="commentDate">Commented on {comment.createdOn}</p>
				</div>
			)
		})
		return (
			<div className="panelback" id={"panel" + id}>
				<div className="panel-heading topPanel">
				<span> <a data-toggle="collapse" data-target={"#qcollapse" + id} 
           			href={"#qcollapse" + id}> {title}</a></span>
				</div>
				<div id={"qcollapse" + id}className="panel-collapse collapse">
					<div className="panel-body">
				<p className="mstext"><strong>Description:</strong> {description}</p>
				{singleMilestone()}
				<p>Completed On: {completedOn}</p>
				<div className="row">
					<div className="text-center">
						<CommentForm onComment={this.handleComment.bind(this)}/><button onClick={this.handleLike.bind(this)} id="likes"><span className="hvr-icon-bounce" aria-hidden="true" id="x"></span>{likes}</button>
					</div>
				</div>
				{renderComments}
				</div>
				</div>
			</div>
		)
	}
}