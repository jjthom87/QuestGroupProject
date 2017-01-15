import React, { Component, cloneElement } from 'react';

export default class Application extends React.Component {
	render() {
		return (
			<div className="Application">
				{
					cloneElement(this.props.children, {
				  })
				}
			</div>
		);
	}
}