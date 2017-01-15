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
				<div className="col-md-1">
					<form onSubmit={this.onFormSubmit.bind(this)}>
						<button className="btn-danger">Logout</button>
					</form>
				</div>
			</div>
		);
	}
}