import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import Layout from "./pages/layout";
import MissionMain from "./components/missionmain";
import QuestMain from "./components/questmain";

import MissionsListHeader from './components/missions-list-header';
import MissionsListItem from './components/missionsListItem';
import CreateMission from './components/create-mission';
import MissionsList from './components/missions-list';

import QuestsListHeader from './components/quests-list-header';
import QuestsListItem from './components/questsListItem';
import CreateQuest from './components/create-quest';
import QuestsList from './components/quests-list';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>

    <Route path="/" component={Layout}>

    	<Route path="missionshome" component={MissionMain}>

    	    <IndexRoute component={CreateMission} />
    	    <IndexRoute component={MissionsList}>

    	    	<IndexRoute component={MissionsListHeader} />
    			<IndexRoute component={MissionsListItem} />

    		</IndexRoute>

    	</Route>

    	<Route path="questshome" component={QuestMain}>

    		<IndexRoute component={CreateQuest} />
    	    <IndexRoute component={QuestsList}>

    	    	<IndexRoute component={QuestsListHeader} />
    			<IndexRoute component={QuestsListItem} />

    		</IndexRoute>

    	</Route>
      
    </Route>

  </Router>,
app);