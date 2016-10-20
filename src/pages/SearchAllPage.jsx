import React, { Component } from 'react';
import { Router , browserHistory } from 'react-router';
var {Link, IndexLink} = require('react-router');
var _ = require('lodash');
import MissionsList from 'MissionsList';
import MissionMain from "MissionMain";
import QuestMain from "QuestMain";
import QuestsList from 'QuestsList';
import Logout from 'Logout';
import MainNav from 'MainNav';
import searchMissionQuestList from 'searchMissionQuestList';

export default class SearchAllPage extends React.Component {
  	constructor(props, context) {
		super(props, context);
		this.state = {
			loginUser: '',
			fullLoginUser: '',
			missions: [],
			quests: [],
            tasks: [],
            milestones: [],
            dropdownQuest: '',
            dropdownMission: '',
			createdOn: ''
		};
	}
  	componentWillMount(){
		fetch('/search', {
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
		}).then((response) => response.json())
		.then((results) => {
			this.setState({
				missions: results.missions,
				quests: results.quests,
                tasks: results.tasks,
                milestones: results.milestones
			});
		});
	}

	render() {
		const { loginUser, missions, quests, tasks, milestones, dropdownMission, dropdownQuest } = this.state;

    	return (
      		<div>
              <MainNav/>
                <div className='container' id="searchpageDiv">
      			<h1 className="text-center" id="pageTitle">Find Your Next Mission or Quest</h1>
    				<div className="row">
    					
                        <div className="panel panel-success col-md-3 qmbox">
                    
                            <MissionsList
                                missions={missions}
                                tasks={tasks}
                            />
                        </div>
                       
    		        </div>
                </div> 
      		</div>
		);
	}
}