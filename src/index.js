import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Application from "./components/app";
import MissionMain from "./components/missionmain";
import QuestMain from "./components/questmain";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Application}>
    	<Route path="missionshome" component={MissionMain}  />
    	<Route path="questshome" component={QuestMain} />
      
    </Route>
  </Router>,
app);