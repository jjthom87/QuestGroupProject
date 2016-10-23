import React, { Component } from 'react';

export default class CountdownForm extends React.Component {
	onSubmit(e){
		e.preventDefault();

		var creds = {};
		var hours = this.refs.hours.value;
		var minutes = this.refs.minutes.value;

		if (hours.match(/^[0-9]*$/) && hours < 60){
			this.refs.hours.value='';
			creds.hours = parseInt(hours, 10)
		 } else {
			alert('Please Enter valid number for hours');
		}

		if (minutes.match(/^[0-9]*$/) && minutes < 60){
			this.refs.minutes.value='';
			creds.minutes = parseInt(minutes, 10)
		} else {
			alert('Please Enter valid number for minutes');
		}

		this.props.onSetCountdown(creds);
	}
	render(){
		return(
			<div>
				<form onSubmit={this.onSubmit.bind(this)}>
					Hours: <input type="text" ref="hours" placeholder="Enter amount of hours" />
					Min: <input type="text" ref="minutes" placeholder="Enter time in minutes" />
					<input type="submit" value="Start"/>
				</form>
			</div>
		)
	}
}