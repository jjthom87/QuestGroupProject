import React, { Component } from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

export default class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	count: 0,
        	countdownStatus: 'stopped'
        };
    }
	handleSetCountdown(seconds){
		console.log(seconds);
		this.setState({
			count: seconds,
			countdownStatus: 'started'
		});
	}
	componentDidUpdate(prevProps, prevState){
		if (this.state.countdownStatus !== prevState.countdownStatus) {
			switch(this.state.countdownStatus){
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({count: 0});
				case 'paused':
					clearInterval(this.timer)
					this.timer = undefined;
					break;
			}
		}
	}
	// componentWillUpdate: function (nextProps, nextState) {
	// 	this
	// },
	// componentWillMount: function () {
	// 	console.log('componentWillMount');
	// },
	// componentDidMount: function () {
	// 	console.log('componentDidMount');
	// },
	componentWillUnmount() {
		console.log('componentWillUnmount');
		clearInterval(this.timer);
		this.timer = undefined;
	}
	startTimer(){
		this.timer = setInterval(() => {
			var newCount = this.state.count - 1;
			this.setState({
				count: newCount >= 0 ? newCount : 0
			});
			if (newCount === 0){
				this.setState({countdownStatus: 'stopped'});
			}
		}, 1000)

	}
	handleStatusChange(newStatus){
		this.setState({
			countdownStatus: newStatus
		})
	}
	render() {
		var {count, countdownStatus} = this.state;
		var renderControlArea = () => {
			if (countdownStatus !== 'stopped') {
				return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
			} else {
				return <CountdownForm onSetCountdown={this.handleSetCountdown} />
			}
		};

		return (
			<div>
				<h1 className="page-title">Countdown</h1>
				<Clock totalSeconds={count}/>
				{renderControlArea()}
			</div>
		)
	}
}