import React, { Component, PropTypes } from 'react';
import { Router , browserHistory } from 'react-router';
var {Link, IndexLink} = require('react-router');
var _ = require('lodash');
import QuestMain from "QuestMain";
import Logout from 'Logout';
import MainNav from 'MainNav';
import MissionTaskSearchItem from 'MissionTaskSearchItem';
import MissionSearchList from 'MissionSearchList';
import QuestSearchList from 'QuestSearchList';
import SearchBarForm from 'searchBarForm';
import SearchBarList from 'searchBarList';

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
            searchFetch: '',
            users: []
        };
    }

    handleDropdownChange(e){
        this.setState({
            dropdownMission: e.target.value
        })
    }
    handleSearch(searchText){
        this.setState({
            searchFetch: searchText.toLowerCase()
        })
    }
    componentWillMount(){
        fetch('/api/search', {
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
                milestonetasks: results.milestonetasks,
                users: results.users
            });
        });
    }

    render() {
        const { users, searchFetch, missions, quests, milestones, milestonetasks, missiontasks } = this.state;

        const filteredMissions = missions.filter((mission) => {
            var text = mission.title.toLowerCase();
            return searchFetch.length === 0 || text.indexOf(searchFetch) > -1
        });

        const filteredQuests = quests.filter((quest) => {
            var text = quest.title.toLowerCase();
            return searchFetch.length === 0 || text.indexOf(searchFetch) > -1
        });

    	return (
            <div>
              <MainNav/>
                <div className='container' id="searchAllPage"> 
              		<div className="row">

                    </div>   

                    <div className="row">
                        <SearchBarForm onSearch={this.handleSearch.bind(this)}/> 
                    </div>

                    <div className="row">
                        <div className="text-center center-block">
                            <SearchBarList
                                filteredMissions={filteredMissions}
                                filteredQuests={filteredQuests}
                                missionTasks={missiontasks}
                                milestoneTasks={milestonetasks}
                                milestones={milestones}
                                users={users}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}