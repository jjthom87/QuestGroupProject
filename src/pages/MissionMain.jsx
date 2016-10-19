import React, { Component, cloneElement } from 'react';
import { Router , browserHistory } from 'react-router';
var {Link, IndexLink} = require('react-router');
import CreateMission from 'CreateMission';
import CreateTask from 'CreateTask';
import MainNav from 'MainNav';
import MissionListforMM from 'MissionListforMM';

export default class MissionMain extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            missions: [],
            tasks: [],
            dropdownItem: ''
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
    toggleTask(taskId) {
        const { tasks } = this.state;

        const foundtask = tasks.find((task) => task.uuid === taskId);

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
                        tasks: tasks,
                    });
                });
        }
    }
    deleteTask(taskId){
        const { tasks } = this.state;

        const foundTask = _.remove(tasks, task => task.uuid === taskId);

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
                    tasks: tasks
               });
        });
    }
    handleDropdownChange(e){
        this.setState({
            dropdownItem: e.target.value
        })
    }
    createMission(creds) {
        const { missions } = this.state;

        const newMiss = {
            title: creds.title,
            description: creds.description
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
    handleCreateTask(taskInput) {
        const { tasks, dropdownItem} = this.state;
        console.log(taskInput);
        const newTask = {
            task: taskInput.task,
            dateTask: taskInput.dateTask,
            timeTask: taskInput.timeTask,
            dropdownItem: dropdownItem
        }
        fetch('/task/create/', {
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
                    tasks: tasks.concat(results)
                });
            });
    }
    componentWillMount(){
        const {missions, tasks} = this.state;
        
        fetch('/missionhome', {
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
        }).then((response) => response.json())
        .then((results) => {
            console.log(results);
            this.setState({
            
                missions: missions.concat(results),
                tasks: tasks.concat(results)

            });
        });
    }
    render() {
        const {missions, tasks, dropdownItem } = this.state; 
        const filteredMission = missions.filter((mission) => dropdownItem === mission.title);
        const filteredTasks = tasks.filter((task) => dropdownItem === task.missionName);
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
                    <select name="Please Select Mission to add Task to" value={this.state.dropdownItem} onChange={this.handleDropdownChange.bind(this)}>
                        <option selected disabled>Choose Mission to add Task to</option>
                        {renderMissionDropdown()}
                    </select>
                    <CreateTask createTask={this.handleCreateTask.bind(this)}/>
                </div>
                <MissionListforMM missions = {filteredMission} tasks = {filteredTasks} toggleTask={this.toggleTask.bind(this)}
                                deleteMission={this.deleteMission.bind(this)}
                                deleteTask={this.deleteTask.bind(this)}/>
            </div>
         );
    }
}