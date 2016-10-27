import React, { Component, cloneElement } from 'react';
import { Router , browserHistory } from 'react-router';
var {Link, IndexLink} = require('react-router');
import CreateMission from 'CreateMission';
import CreateMissionTask from 'CreateMissionTask';
import MainNav from 'MainNav';
import MissionListforMM from 'MissionListforMM';
var moment = require('moment');

export default class MissionMain extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            missions: [],
            missiontasks: [],
            dropdownMission: '',
            createdOn: ''
        };
    }
    deleteMission(id){
        const { missions } = this.state;

        const deleteMission = _.remove(missions, mission => mission.id === id);

        fetch(`/api/mission/delete/${deleteMission[0].id}`,{
            method: 'DELETE',
            body: JSON.stringify(deleteMission),
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
        }).then((response) => response.json())
        .then((results) => {
            this.setState({
                missions: missions
            })
        }); 
    }
    completeMission(missionId){
        const { missions } = this.state;

        const completeMission = _.remove(missions, mission => mission.id === missionId);

        const data = {
            completeMission,
            completedOn: moment().format('MMM Do YYYY @ h:mm a')
        }
        fetch(`/api/mission/complete/${completeMission[0].id}`,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
        }).then((response) => response.json())
        .then((results) => {
            this.setState({
                missions: missions
            })
        }); 
    }
    toggleMissionTask(taskId) {
        const { missiontasks } = this.state;

        const foundtask = missiontasks.find((task) => task.uuid === taskId);

        if (foundtask) {
            foundtask.isCompleted = !foundtask.isCompleted;

            fetch(`/api/missiontask/toggle/${foundtask.uuid}`, {
                method: 'PUT',
                body: JSON.stringify(foundtask),
                headers: {
                    Auth: localStorage.getItem('token'),
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                credentials: 'include'
            }).then((response) => response.json())
                .then((json) => {
                    this.setState({
                        missiontasks: missiontasks,
                    });
                });
        }
    }
    deleteMissionTask(taskId){
        const { missiontasks } = this.state;

        const foundTask = _.remove(missiontasks, task => task.uuid === taskId);

        fetch(`/api/missiontask/delete/${foundTask[0].uuid}`,{
            method: 'DELETE',
            body: JSON.stringify(foundTask),
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
        }).then((response) => response.json())
            .then((results) => {
                this.setState({
                    missiontasks: missiontasks
               });
        });
    }
    handleDropdownChange(e){
        this.setState({
            dropdownMission: e.target.value
        })
    }
    createMission(creds) {
        const { missions } = this.state;

        const newMiss = {
            title: creds.title,
            description: creds.description,
            selection: creds.selection,
            createdOn: moment().format('MMM Do YYYY @ h:mm a')
        }
        fetch('/api/mission/create', {
            method: 'post',
            body: JSON.stringify(newMiss),
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
        }).then((response) => response.json())
            .then((results) => {
                this.setState({
                    missions: missions.concat(results),
                });
            });
    }
    handleCreateMissionTask(taskInput) {
        const { missiontasks, dropdownMission} = this.state;

        const newTask = {
            task: taskInput.task,
            dateTask: taskInput.dateTask,
            timeTask: taskInput.timeTask,
            dropdownMission: dropdownMission
        }
        fetch('/api/missiontask/create/', {
            method: 'post',
            body: JSON.stringify(newTask),
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
        }).then((response) => response.json())
            .then((results) => {
                this.setState({
                    missiontasks: missiontasks.concat(results)
                });
            });
    }
    componentWillMount(){
        const {missions, missiontasks} = this.state;
        
        fetch('/api/missionhome', {
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
                missiontasks: results.missiontasks
            });
        });
    }
    render() {
        const {missions, missiontasks, dropdownMission } = this.state; 
        const filteredMission = missions.filter((mission) => dropdownMission === mission.title);
        const filteredTasks = missiontasks.filter((task) => dropdownMission === task.missionName);
        var renderMissionDropdown = () => {
            return missions.map((mission, index) => {
                return (
                    <option key={index} value={mission.title} className="dropdown-item">{mission.title}</option>
                );  
            });
        }
        return (
            <div className="container">
                <MainNav />

                    <div className="container" id="separator">
                        
                            <h1 id="pageHeader">Mission Page</h1>
                            <h2 className="text-center" id="pageDescription">
                                Add a Mission or select a previously added one from the dropdown
                            </h2>
                            <h2 className="text-center" id="pageDescription">
                                Next, add a Task/Tasks for that mission
                            </h2>
                            <h2 className="text-center" id="pageDescription">
                                You're done, Make sure to track your progress
                            </h2>
                            <br></br>
                        <div className="row">
                            <div className="col-md-5 col-md-offset-1" id="missionForm">
                                <CreateMission
                                    missions={missions}
                                    createMission={this.createMission.bind(this)}/>
                                    <select name="Please Select Mission to add Task to" value={this.state.dropdownMission} onChange={this.handleDropdownChange.bind(this)}>
                                    <option selected disabled>Choose Mission to add Task to</option>
                                    {renderMissionDropdown()}
                                    </select>
                                    <CreateMissionTask createTask={this.handleCreateMissionTask.bind(this)}/>
                            </div>
                        
                            <div className="col-md-5 col-md-offset-1" id="missionlistdiv">
                                <MissionListforMM 
                                    missions={filteredMission} 
                                    missiontasks={filteredTasks} 
                                    toggleMissionTask={this.toggleMissionTask.bind(this)}
                                    deleteMission={this.deleteMission.bind(this)}
                                    deleteMissionTask={this.deleteMissionTask.bind(this)}
                                    completeMission={this.completeMission.bind(this)}
                                />
                            </div>
                        </div>
                    </div>
            </div>
         );
    }
}