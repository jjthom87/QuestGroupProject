import React, { Component } from 'react';

// another "dumb" component responsible for just rendering the HTML relevant
// for ONE todo item
class TodoItem extends Component {

	render() {
		const { text, id, isCompleted, toggleCompleted } = this.props;

		return (
			<li>
				{/* Whenever the value of the checkbox changes
					(ie user checks/unchecks it),
					`toggleCompleted` will FINALLY get invoked with the correct item id
				 */}
				<input
				  type="checkbox"
				  checked={isCompleted}
				  onChange={() => toggleCompleted(id)} // we're creating a new function on 'the fly' here which is already bound to the correct id
			  />
				{text}
			</li>
		);
	}
}

export default TodoItem;