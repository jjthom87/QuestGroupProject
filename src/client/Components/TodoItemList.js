import React, { Component } from 'react';
import TodoItem from './TodoItem';

// this component is "dumb" as it has no state. really all its responsible
// for is iterating over an array of items and rendering TodoItem for each
// one
class TodoItemList extends Component {

	render() {
		const { items, toggleCompleted } = this.props;

		return (
			<ul className="TodoItemList">
				{
					// .map example:
					// [1, 2, 3].map((number) => number * 2)
					// will return [2, 4, 6]

					// .map just iterates over all of our items and returns a rendered
					// .TodoItem for each item
					items.map((item, index) =>
						<TodoItem
							toggleCompleted={toggleCompleted}
							isCompleted={item.isCompleted}
							text={item.text}
							id={item._id}
							key={index} // react wants a unique key on each element in a list so we just give it the index
						/>
					)
				}
			</ul>
		);
	}
}

export default TodoItemList;