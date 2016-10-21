import React, { Component } from 'react';
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

    HiItems(items) {
        console.log(items);
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

        let items = [
          { id: 0, value: 'ruby' },
          { id: 1, value: 'javascript' },
          { id: 2, value: 'lua' },
          { id: 3, value: 'go' },
          { id: 4, value: 'julia' }
        ]

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
                <Search items={items} />
 
                <Search items={items}
                    placeholder='Pick your language'
                    maxSelected={3}
                    multiple={true}
                    onItemsChanged={this.HiItems.bind(this)} />
            </div>
		);
	}
}