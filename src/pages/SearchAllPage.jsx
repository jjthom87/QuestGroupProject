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
import MissionAndTaskItem from 'MissionAndTaskItem';
import MissionSearchItem from 'MissionSearchItem';
import QuestSearchItem from 'QuestSearchItem';

export default class SearchAllPage extends React.Component {
  	constructor(props) {
		super(props);
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

    handleDropdownMission(e){
        this.setState({
            dropdownMission: e.target.value
        })
    }
    handleDropdownQuest(e){
        this.setState({
            dropdownQuest: e.target.value
        })
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
				fullLoginUser: results.currentUser,
                loginUser: results.currentUser.name,
                missions: results.missions,
                quests: results.quests,
                missiontasks: results.missiontasks,
                milestones: results.milestones,
                milestonetasks: results.milestonetasks
			});
		});
	}

	render() {

        const { id, index, missions, quests, missiontasks, milestones, dropdownMission, dropdownQuest, milestonetasks} = this.state;

        var renderMissionDropdown = () => {
            return missions.map((mission, index) => {
                return (
                    <option value={mission.title} className="dropdown-item">{mission.title}</option>
                );  
            });
        }

        var renderQuestDropdown = () => {
            return quests.map((quest, index) => {
                return (
                    <option value={quest.title} className="dropdown-item">{quest.title}</option>
                );  
            });
        }

    	return (
            <div className="container">
            <MainNav/>
          		<div className="row" id="separator">
                            <div className="row">
                                <div className="col-md-1">
                                    <Link to="/home"><button className="btn btn-warning">Back Home</button></Link>
                                </div>
                            </div>

                            <div className="col-md-3">
                            </div>

                            <div className="row">
                                <div className="panel panel-success col-md-3 qmbox">
                                    <select name="Please Select Mission" value={this.state.dropdownMission} onChange={this.handleDropdownMission.bind(this)}>
                                        <option selected disabled>Find Mission</option>
                                        {renderMissionDropdown()}
                                    </select>
                                    <MissionsList
                                        missions={missions}
                                        missiontasks={missiontasks}
                                    />
                                </div>
                            </div>

                            <div className="col-md-3">
                            </div>

                            <div className="row">
                                <div className="panel panel-success col-md-3 qmbox">
                                    <select name="Please Select Quest" value={this.state.dropdownQuest} onChange={this.handleDropdownQuest.bind(this)}>
                                        <option selected disabled>Find Quest</option>
                                        {renderQuestDropdown()}
                                    </select>
                                    <QuestsList
                                        quests={quests}
                                        milestones={milestones}
                                        milestonetasks={milestonetasks}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                            </div>
                </div>
            </div>
		);
	}
}