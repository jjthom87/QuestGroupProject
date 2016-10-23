import React, { Component } from 'react';

export default class UserSearchItem extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	render(){

		const { id, name, username, createdAt } = this.props;

		return (
			<div className="text-center">
				<p>User Id: {id}</p>
				<p>Name: {name}</p>
				<p>Username: {username}</p>
				<p>Joined On: {createdAt}</p>
			</div>
		);
	}
}