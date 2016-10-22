import React, { Component } from 'react';

export default class CountdownForm extends React.Component {
	onSubmit(e){
		e.preventDefault();
		var seconds = this.refs.seconds.value;

		if (seconds.match(/^[0-9]*$/)){
			this.refs.seconds.value='';
			this.props.onSetCountdown(parseInt(seconds, 10));
		}
	}
	render(){
		return(
			<div>
				<form onSubmit={this.onSubmit.bind(this)}>
					<input type="text" ref="seconds" placeholder="Enter time in seconds" />
					<input type="submit" value="Start"/>
				</form>
			</div>
		)
	}
}