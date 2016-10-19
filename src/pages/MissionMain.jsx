import React, { Component, cloneElement } from 'react';
import { Router , browserHistory } from 'react-router';
var {Link, IndexLink} = require('react-router');
import CreateMission from 'CreateMission';
import CreateTask from 'CreateTask';
import MainNav from 'MainNav';

export default class MissionMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            missions: [],
            tasks: [],
            dropdownItem: ''
        };
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
        const {missions} = this.state;
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
                missions: missions.concat(results)
            });
        });
    }
    render() {
        const { missions } = this.state; 

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
            </div>
         );
    }
}