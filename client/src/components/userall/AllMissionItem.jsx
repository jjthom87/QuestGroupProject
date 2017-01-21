import React, { Component } from 'react';
import CommentForm from 'CommentForm';

var moment = require('moment');

export default class AllMissionItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        	id: this.props.id,
        	comments: [],
        	likers: this.props.likers,
        	likersLength: '',
        	newSet: '',
        	likersArray: [],
        	commentee: this.props.loginUser,
        	missionName: this.props.title,
        };
    }
	handleComment(comment) {
		const { id, comments, commentee, missionName, commenterImage } = this.state;

		const newComment = {
			comment,
			createdOn: moment().format('MMM Do YYYY'),
			MissionId: id,
			missionName,
			commentee
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
        const { id, likers, newSet } = this.state;

        MissionId = id;
        let set = '';
	        if(!likers){
	        	set = this.props.loginId
	        } else {
	        	var split = likers.split(' ');
				const convert = [];
				for(var i = 0; i < split.length; i++){
					if(split[i] !== ''){
						convert.push(parseInt(split[i]));
					}
				}
	        	for(var i = 0; i < convert.length; i++){
	        		if(convert[i] == this.props.loginId){
	        			convert.splice(i, 1);
	        			set = convert.join(' ');
	        		} else {
	        			set = likers + ' ' + this.props.loginId;
	        		}	
	        	}
	    	}
        const data = {
        	MissionId,
        	newSet: set
        }
        fetch(`/api/likemission/${MissionId}`,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        }).then((response) => response.json())
        .then((results) => {
        	this.setState({
        		likersLength: results.likers.split(' ').length
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

		const { comments, likersLength, likers } = this.state;
		const { id, title, description, missiontasks, completedOn, createdOn, isCompleted, allUsers, loginUser, missions, loginId } = this.props;
		const likersArray = likers.split(' ');
		const convert = [];
		for(var i = 0; i < likersArray.length; i++){
			if(likersArray[i] !== ''){
				convert.push(parseInt(likersArray[i]));
			}
		}
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

		var likeColor;
		for(var i = 0; i < convert.length; i++){
			if(convert[i] == loginId){
				likeColor = "blue"
			} else {
				likeColor = "black"
			}
		}

		return (
			<div className="panelback" id={"panel" + id}>
				<div className="panel-heading topPanel">
				<span> <a data-toggle="collapse" data-target={"#mcollapse" + id} 
           			href={"#mcollapse" + id}> {title}</a></span>
				</div>
				<div id={"mcollapse" + id}className="panel-collapse collapse">
				<div className="panel-body">
				<p className="mstext"><strong>Description:</strong> {description}</p>
				{renderCompletedOn()}
				{singleTask()}
				<div className="panel-headingCom commentTop">
				<span > <a data-toggle="collapse" data-target={"#mccollapse" + id} 
           			href={"#mccollapse" + id}>Comments</a></span>
				</div>
				<div id={"mccollapse" + id}className="panel-collapse collapse">
				<div className="row">
					<div className="text-center">
						<CommentForm onComment={this.handleComment.bind(this)}/><button onClick={this.handleLike.bind(this)} id="likes"><span className="hvr-icon-bounce" style={{ color: likeColor }} aria-hidden="true" id="x"></span>{convert.length}</button>
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