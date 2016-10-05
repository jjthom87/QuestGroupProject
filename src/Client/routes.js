import React from 'react';

import { Route } from 'react-router';

// Load this component for ALL routes
import App from './src/Client/pages/layout';

import MissionHome from './pages/mission-home';
import QuestHome from './pages/quest-home';

export default (
	/* This means the Application component 
		is gonna be the parent of all components nested w/in this route! */
		<Route path="/" component={App}>
			<Route path="missionhome" component={MissionHome}></Route>
			<Route path="questhome" component={QuestHome}></Route>
		</Route>

);

	