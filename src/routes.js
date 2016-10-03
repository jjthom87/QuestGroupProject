import React from 'react';

import { Route } from 'react-router';

// Load this component for ALL routes
import Application from './Components/app';

// lists ALL todo items
import TodosListItem from './Components/TodosListItem';

export default (
	/* This means the Application component 
		is gonna be the parent of all components nested w/in this route! */
	<Route component={Application}>

		{/* when the address bar shows /#/, render the IndexPage component */}

		<Route path="/todoslistitem" component={TodosListItem} />
		<Route path="/mainpage" component={MainPage} />
	</Route>
);