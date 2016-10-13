import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import requireAuth from './components/require_authentication';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Application from "./components/Application"

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

import CreateAccountPage from './pages/CreateAccountPage';
import CreateAccount from './components/users/CreateAccount';
import LoginPage from './pages/LoginPage';
import Login from './components/users/Login';

const app = document.getElementById('app');
const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
  <Router history={browserHistory}>

    <Route path="/" component={Layout}>

    	<Route path="missionshome" component={requireAuth(MissionMain)}>

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

        <Route path="register" component={CreateAccountPage}>
            <IndexRoute component={CreateAccount} />
        </Route>

        <Route path="login" component={LoginPage}>
            <IndexRoute component={Login} />
        </Route>
      
    </Route>

  </Router>,
app);