// FRONT-END: React Routes
// Establishing our Component hierarchy for passing down states/props
// Setting route paths for link navigation

// DEPENDENCIES================================================================
import React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

// REQUIRE COMPONENTS==========================================================
// Parent
import Application from "Application"
// Children
import HomePage from "HomePage";
import MissionMain from "MissionMain";
import QuestMain from "QuestMain";
import CreateAccountPage from 'CreateAccountPage';
import LoginPage from 'LoginPage';
import UserHomePage from 'UserHomePage';
import Authentication from 'Authentication';

// COMPONENT ROUTES============================================================
export default (
  	<Router history={browserHistory}>
  		<Route component={Application}>
    		<Route path="/" component={HomePage} />
    		<Route path="/missionshome" component={MissionMain} />
    		<Route path="/questshome" component={QuestMain} />
        <Route path="/register" component={CreateAccountPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/home" component={UserHomePage} />
    	</Route>
  	</Router>
);