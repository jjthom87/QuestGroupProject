import React, { Component } from 'react';

class NewTodoItem extends Component {
	constructor(...args) {
		// the spread operator (...) allows us to receive any number of arguments
		// and pass them as-is to super w/out having to specify them individually
		super(...args);

		// set up initial state
		this.state = {
			text: ''
		};
	}

	// when our form is submitted (ie Enter was pressed OR the submit button was
	// clicked), this method (event handler) will get fired
	handleSubmit(event) {
		// make sure we dont allow the browser to navigate away
		event.preventDefault();

		// extract 'text' out of this.state into its own const
		const { text } = this.state;

		// invoke `onAdd` (hint: it was given to us from our parent, Application)
		// which will update the items array in Application's state
		this.props.onAdd(text);

		// clear our state's text so the input field clears
		this.setState({ text: '' });
	}

	// define an event handler to be called whenever the value of the input
	// field below chages.
	handleChange(event) {
		// update our state with the text in the input field so we can retrieve it
		// easily later on onSubmit
		this.setState({
			text: event.target.value
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input
					onChange={this.handleChange.bind(this)}
					value={this.state.text} // set input's value to be the value in our state
					type="text"
					placeholder="Enter a new Todo"
				/>
				<button>Submit</button>
			</form>
		);
	}
}

export default NewTodoItem;