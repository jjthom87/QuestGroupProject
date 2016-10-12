import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";


import Layout from "./pages/layout";
import MissionMain from "./components/mission/missionmain";
import QuestMain from "./components/quest/questmain";

import MissionsListHeader from './components/mission/missions-list-header';
import MissionsListItem from './components/mission/missionsListItem';
import CreateMission from './components/mission/create-mission';
import MissionsList from './components/mission/missions-list';

import QuestsListHeader from './components/quest/quests-list-header';
import QuestsListItem from './components/quest/questsListItem';
import CreateQuest from './components/quest/create-quest';
import QuestsList from './components/quest/quests-list';
import QuestTitle from './components/quest/quest-title';

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