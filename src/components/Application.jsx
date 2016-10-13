import React, { Component, cloneElement } from 'react';
// import Nav from '../Components/Nav';

class Application extends Component {
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

export default Application;