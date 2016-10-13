import React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Application from "Application"

import Layout from "Layout";
import MissionMain from "MissionMain";
import QuestMain from "QuestMain";
import CreateAccountPage from 'CreateAccountPage';
import LoginPage from 'LoginPage';
import Homepage from 'Homepage';

export default (
  	<Router history={browserHistory}>
  		<Route component={Application}>
    		<Route path="/" component={Layout} />
    		<Route path="/missionshome" component={MissionMain} />
    		<Route path="/questshome" component={QuestMain} />
        	<Route path="/register" component={CreateAccountPage} />
        	<Route path="/login" component={LoginPage} />
        	<Route path="/home" component={Homepage} />
    	</Route>
  	</Router>
);