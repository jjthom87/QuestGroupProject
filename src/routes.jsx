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
import SearchAllPage from 'SearchAllPage';
import Authentication from 'Authentication';
import Completed from 'Completed';
import UserForAllPage from 'UserForAllPage';
import UserAllPage from 'UserAllPage';
import UserSearchPage from 'UserSearchPage';
import FeedPage from 'FeedPage';

// COMPONENT ROUTES============================================================
export default (
  	<Router history={browserHistory}>
  		<Route component={Application}>
		<Route path="/" component={HomePage} />
		<Route path="/missionshome" component={MissionMain} />
		<Route path="/questshome" component={QuestMain} />
        <Route path="/register" component={CreateAccountPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/create" component={UserHomePage} />
        <Route path="/searchall" component={SearchAllPage} />
        <Route path="/completed" component={Completed} />
        <Route path="/userall" component={UserAllPage} />
        <Route path="/userforall/:id" component={UserForAllPage} />
        <Route path="/searchusers" component={UserSearchPage} />
        <Route path="/feedpage" component={FeedPage} />
    	</Route>
  	</Router>
);