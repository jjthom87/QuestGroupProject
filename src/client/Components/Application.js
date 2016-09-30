
import React, { Component, cloneElement } from 'react';
// import NewTodoItem from './NewTodoItem';

class Application extends Component {

	constructor(props, context) {
		// whenever you overwrite React Component's constructor method, you must
	  // call super() so it will instantiate the Component class it inherits
	  // from
		super(props, context);

		// set initial state
		this.state = {
			items: []
		};
	}

	componentWillMount() {
		fetch('/api/items')
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					items: json
				});
			})
	}

	// creating a method which is responsible for updating our state with a new
	// item just like we did with `toggleCompleted`: we have to setup a way for
	// our child components to update OUR state. in `render` we pass it down
	// (bound to `this`) to a child component.
	addNewItem(text) {
		const { items } = this.state;

		const newItem = {
			text // ES6 shorthand for `text: text`
		};

		fetch('/api/items', {
			method: 'POST',
			body: JSON.stringify(newItem),
			headers: {
				'content-type': 'application/json'
			}
		}).then((response) => response.json())
			.then((json) => {
				this.setState({
					items: items.concat(json)
				});
			});
	}

	toggleCompleted(itemId) {
		const { items } = this.state;

		// find the first item in our state which has the ID we're looking for (itemId)
		const item = items.find((item) => item._id === itemId);

		// if we found an item w/ that id, we toggle its `isCompleted` property
		if (item) {
			item.isCompleted = !item.isCompleted;

			fetch(`/api/items/${item._id}`, {
				method: 'PUT',
				body: JSON.stringify(item),
				headers: { 'content-type': 'application/json' }
			}).then((response) => response.json())
				.then((json) => {
					// then we update our state with the updated items array. note that
					// `item` has the item by reference, meaning that when we changed its
					// isCompleted property, the array `items` was updated as well
					this.setState({
						items: items
					});
				});
		}
	}

	render() {
		return (
			<div className="Application">
				{/* Note that we're mapping `onAdd` to `addNewItem` */}
				<NewTodoItem onAdd={this.addNewItem.bind(this)} />
				{
					// this component's children is the component from routes.jsx that
					// react-router matched! (ie IndexPage/CompletedPage/ActivePage)
					// sine react-router already instantiated/rendered that child
					// component, the only way we can overwrite its props is if we clone
					// it and pass it new props. dont worry about it too much for now.
					cloneElement(this.props.children, {
						// pass down all items as-is. on the child component, they will be
						// available as a prop (this.props.items)!
					  items: this.state.items,

					  // we must pass down our toggleCompleted method so that the
					  // individual TodoItem components can invoke it and thus update
					  // our state. when it's invoked, it relies on `this` mapping to
					  // THIS component instance when it calls setState, which is why we
					  // need to bind here.
					  toggleCompleted: this.toggleCompleted.bind(this)
				  })
				}
				<div className="navigation">
					<a href="#/">All</a>&nbsp;
					<a href="#/active">Active</a>&nbsp;
					<a href="#/completed">Completed</a>&nbsp;
				</div>
			</div>
		);

	}
}

export default Application;