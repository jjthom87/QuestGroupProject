import React, { Component } from 'react';

export default class Logout extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		};
	}
	onFormSubmit(e){
		e.preventDefault();

		var { fullLoginUser } = this.props;

		this.props.onLogout(fullLoginUser);
	}
	render() {
		return (
			<div className="row">
				<div className = "small-10 large-10 columns">
				</div>
				<div className="small-2 large-2 columns">
					<form onSubmit={this.onFormSubmit.bind(this)}>
						<button className="button success">Logout</button>
					</form>
				</div>
			</div>
		);
	}
}