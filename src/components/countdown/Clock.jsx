import React, { Component } from 'react';

var Clock = React.createClass({
	getDefaultProps: function(){
		totalSeconds: 0
	},
	propTypes: {
		totalSeconds: React.PropTypes.number
	},
	formatSeconds: function(totalSeconds){
		var seconds = totalSeconds % 60;
		var minutes = Math.floor(totalSeconds / 60);
		var hours = Math.floor(totalSeconds / 3600);

		if (seconds < 10){
			seconds = '0' + seconds;
		}

		if (minutes < 10){
			minutes = '0' + minutes;
		}

		if (hours < 10){
			hours = '0' + hours;
		}

		return hours + ':' + minutes + ':' + seconds;
	},
	render: function(){
		var {totalSeconds} = this.props

		return (
			<div className = "clock">
				<span className = "clock-text">
					{this.formatSeconds(totalSeconds)}
				</span>
			</div>
		)
	}
});

module.exports = Clock;