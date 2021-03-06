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
        	likes: this.props.likes,
        	commentee: this.props.loginUser,
        	questName: this.props.title,
        };
    }
	handleComment(comment) {
		const { id, comments, commentee, questName, commenterImage } = this.state;

		const newComment = {
			comment,
			createdOn: moment().format('MMM Do YYYY'),
			QuestId: id,
			commentee,
			questName
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
		const { id, title, description, milestones, milestonetasks, completedOn, isCompleted, allUsers, loginUser } = this.props;

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
		const owl = "https://s-media-cache-ak0.pinimg.com/originals/9e/b4/97/9eb497079e582509e89febf7552ddc02.png"
		const renderComments = filteredComments.map((comment, index) => {
			const filteredUser = allUsers.filter((user) => user.id === comment.UserId);
			if (filteredUser[0].profileImage === ''){
				return (
					<div className="alltaskitem">
						<p key={index}><img src={owl} style={{width: 30, height: 30}}/><strong> {comment.usersName}:</strong> {comment.comment}</p>
						<p> - <strong>{comment.createdOn}</strong></p>
					</div>
				)
			} else {
				return (
					<div className="alltaskitem">
						<p key={index}><img src={filteredUser[0].profileImage} style={{width: 30, height: 30}}/><strong> {comment.usersName}:</strong> {comment.comment}</p>
						<p> - <strong>{comment.createdOn}</strong></p>
					</div>
				)
			}
		})
		const renderCompletedOn = () => {
			if (typeof completedOn === 'string'){
				return (
					<div>
						<p>Completed On: {completedOn}</p>
					</div>
				)
			} else {
				return (
					<div>
					</div>
				)
			}
		}
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
				{renderCompletedOn()}
				<div className="panel-headingCom commentTop">
				<span> <a data-toggle="collapse" data-target={"#qccollapse" + id} 
           			href={"#qccollapse" + id}>Comments</a></span>
				</div>
				<div id={"qccollapse" + id}className="panel-collapse collapse">
				<div className="row">
					<div className="text-center">
						<CommentForm onComment={this.handleComment.bind(this)}/><button onClick={this.handleLike.bind(this)} id="likes"><span className="hvr-icon-bounce" aria-hidden="true" id="x"></span>{likes}</button>
					</div>
				</div>
				{renderComments}
				</div>
				</div>
				</div>
			</div>
		)
	}
}