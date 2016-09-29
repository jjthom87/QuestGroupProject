import React from 'react';

import { Route } from 'react-router';

// Load this component for ALL routes
import Application from './Components/Application';

// (EM): a page component to be routed for Quests at some point - will evenutally change component name
import IndexPage from './Pages/IndexPage';

export default (
	/* This means the Application component 
		is gonna be the parent of all components nested w/in this route! */
	<Route component={Application}>

		{/* when the address bar shows /#/, render the IndexPage component */}
		<Route path="/" component={IndexPage} />

	</Route>
);