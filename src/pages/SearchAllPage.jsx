import React, { Component, PropTypes } from 'react';
import Search from 'react-search'
import { Router , browserHistory } from 'react-router';
var {Link, IndexLink} = require('react-router');
var _ = require('lodash');
import QuestMain from "QuestMain";
import Logout from 'Logout';
import MainNav from 'MainNav';
import MissionTaskSearchItem from 'MissionTaskSearchItem';
import MissionSearchList from 'MissionSearchList';
import SearchBar from 'SearchBar';

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
            createdOn: '',
            searchFetch: ''
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
                </div>

                <SearchBar />

                
            </div>
        );
    }
}