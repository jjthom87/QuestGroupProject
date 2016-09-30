import React, { Component } from 'react';
// import TodoItemList from '../Components/TodoItemList';

class IndexPage extends Component {

	render() {
		const { items, toggleCompleted } = this.props;

		return (
			<div>
				<h1>Index Page</h1>
				<TodoItemList
				  items={items} // pass down ALL items
				  toggleCompleted={toggleCompleted} // pass Application's toggleCompleted as-is!
			  />
			</div>
		);

	}
}

export default IndexPage;