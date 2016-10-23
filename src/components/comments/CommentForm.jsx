import React, { Component } from 'react';

export default class CommentForm extends React.Component {
	constructor(...args){
		super(...args)
		this.state = {
		}
	}
	onCommentSubmit(e){
		e.preventDefault();

		const comment = this.refs.comment.value;

		if (comment.length > 0) {
			this.refs.comment.value = '';
		    this.props.onComment(comment);
		} else {
			alert('Please Enter Text');
		}

	}
	render() {
		return (
			<div>
				<div>
					<form onSubmit={this.onCommentSubmit.bind(this)}>
						<h1 id="loginText"> Comment Here </h1>
						<div id="submitButton">
							<input type="text" ref="comment" placeholder="Enter Comment"/>
						</div>
						<div id="submitButton">
							<input className="btn btn-default" type="submit" />
						</div>
					</form>
				</div>
			</div>
		);
	}
}