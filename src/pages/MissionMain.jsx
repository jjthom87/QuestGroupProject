import React, { Component, cloneElement } from 'react';
import { Router , browserHistory } from 'react-router';
var {Link, IndexLink} = require('react-router');
import CreateMission from 'CreateMission';
import CreateMissionTask from 'CreateMissionTask';
import MainNav from 'MainNav';
import MissionListforMM from 'MissionListforMM';

export default class MissionMain extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            missions: [],
            missiontasks: [],
            dropdownMission: ''
        };
    }
    deleteMission(id){
        const { missions } = this.state;

        const deleteMission = _.remove(missions, mission => mission.id === id);

        fetch(`/mission/delete/${deleteMission[0].id}`,{
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
    toggleMissionTask(taskId) {
        const { missiontasks } = this.state;

        const foundtask = missiontasks.find((task) => task.uuid === taskId);

        if (foundtask) {
            foundtask.isCompleted = !foundtask.isCompleted;

            fetch(`/task/toggle/${foundtask.uuid}`, {
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

        fetch(`/task/delete/${foundTask[0].uuid}`,{
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
            selection: creds.selection
        }
        fetch('/mission/create', {
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
                    missions: missions.concat(results)
                });
            });
    }
    handleCreateMissionTask(taskInput) {
        const { missiontasks, dropdownMission} = this.state;
        console.log(taskInput);
        const newTask = {
            task: taskInput.task,
            dateTask: taskInput.dateTask,
            timeTask: taskInput.timeTask,
            dropdownMission: dropdownMission
        }
        fetch('/missiontask/create/', {
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
        
        fetch('/missionhome', {
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
                missiontasks: missiontasks.concat(results)
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
                    <option value={mission.title} className="dropdown-item">{mission.title}</option>
                );  
            });
        }
        return (
            <div>
                <MainNav />
                <div className="container" id="separator">
                    <div className="row">
                        <div className="col-md-1">
                            <button className="btn btn-warning"><Link to="/home">Back Home</Link></button>
                        </div>
                    </div>
                    <h1 id="pageTitle">Missions Home</h1>
                    <CreateMission
                        missions={missions}
                        createMission={this.createMission.bind(this)}
                    />
                    <select name="Please Select Mission to add Task to" value={this.state.dropdownMission} onChange={this.handleDropdownChange.bind(this)}>
                        <option selected disabled>Choose Mission to add Task to</option>
                        {renderMissionDropdown()}
                    </select>
                    <CreateMissionTask createTask={this.handleCreateMissionTask.bind(this)}/>
                </div>
                <MissionListforMM missions = {filteredMission} tasks = {filteredTasks} toggleTask={this.toggleMissionTask.bind(this)}
                                deleteMission={this.deleteMission.bind(this)}
                                deleteTask={this.deleteMissionTask.bind(this)}/>
            </div>
         );
    }
}