import React from 'react';

import { Route } from 'react-router';

// Load this component for ALL routes
import Application from './Components/app';

// lists ALL todo items

import missions-list from './Components/missions-list';
import quests-list from './Components/quests-list';


export default (
	/* This means the Application component 
		is gonna be the parent of all components nested w/in this route! */
	<Route component={Application}>

		{/* when the address bar shows /#/, render the IndexPage component */}

		<Route path="/missionslist" component={missions-list} />
		<Route path="/questslist" component={quests-list} />

		<Route path="/" component={MainPage} />

	</Route>
);