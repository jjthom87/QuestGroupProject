import React, { Component } from 'react';
import { Router , browserHistory } from 'react-router';
var {Link, IndexLink} = require('react-router');
var _ = require('lodash');
import QuestMain from "QuestMain";
import Logout from 'Logout';
import MainNav from 'MainNav';
import MissionTaskSearchItem from 'MissionTaskSearchItem';
import MissionSearchList from 'MissionSearchList';

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

    handleDropdownChange(e){
        this.setState({
            dropdownMission: e.target.value
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
                missions: results.missions,
                quests: results.quests,
                missiontasks: results.missiontasks,
                milestones: results.milestones,
                milestonetasks: results.milestonetasks
			});
		});
	}

	render() {

        const { missions, quests, missiontasks, dropdownMission } = this.state;

        var renderMissionDropdown = () => {
            return missions.map((mission, index) => {
                return (
                    <h1>{mission.title}</h1>
                );  
            });
        }

    	return (
<<<<<<< HEAD
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
=======
      		<div className="row">
                <div className="row">
                    <div className="col-md-1">
                        <button className="btn btn-warning"><Link to="/home">Back Home</Link></button>
                    </div>
                </div>

                <div className="row">
                    <div className="panel panel-success col-md-3 qmbox">
                        <MissionSearchList
                            missions={missions}
                            missiontasks={missiontasks}
                        />
                    </div>
>>>>>>> 10db475ba309aa4bbeac27307bc74f681f6115a2
                </div>
            </div>
		);
	}
}