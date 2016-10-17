import React, { Component, cloneElement } from 'react';
import { Router , browserHistory } from 'react-router';
var {Link, IndexLink} = require('react-router');
import UserHomePage from 'UserHomePage';
import CreateMission from 'CreateMission';
import CreateTask from 'CreateTask';
import MissionMainItem from 'MissionMainItem';
import MissionDropdown from 'MissionDropdown';
import MainNav from 'MainNav';

export default class MissionMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            missions: [],
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
                browserHistory.push('/home');
            });
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
    toggleTask(task) {
        const foundtask= _.find(this.state.missions, mission => mission.task === task);
        foundtask.isCompleted = !foundtask.isCompleted;
        this.setState({ missions: this.state.missions});
    }
    // toggleTask(taskId) {
    //     const { missions } = this.state;

    //     // find the first item in our state which has the ID we're looking for (itemId)
    //     const foundtask = missions.find((foundTask) => foundtask._id === taskId);

    //     // if we found an item w/ that id, we toggle its `isCompleted` property
    //     if (foundtask) {
    //         foundtask.isCompleted = !foundtask.isCompleted;

    //         fetch(`/api/task/${foundtask._id}`, {
    //             method: 'PUT',
    //             body: JSON.stringify(foundtask),
    //             headers: { 'content-type': 'application/json' }
    //         }).then((response) => response.json())
    //             .then((json) => {
    //                 // then we update our state with the updated items array. note that
    //                 // `item` has the item by reference, meaning that when we changed its
    //                 // isCompleted property, the array `items` was updated as well
    //                 this.setState({
    //                     missions: missions
    //                 });
    //             });
    //     }
    // }
    saveTask(oldTask, newTask, oldDate, newDate) {
        const foundtask=_.find(this.state.missions, mission=> mission.task ===oldTask);
        foundtask.task=newTask;
        foundtask.date=newDate;
        this.setState({missions: this.state.missions});
    }
    handleCreateTask(task, id) {
        console.log(task);
        const { tasks } = this.state;
        
        const newTask = {
            task
        }
        fetch(`/task/create/`, {
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
                console.log(results)
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
            console.log(results);
            this.setState({
                missions: results
            });
        });
    }
    render() {

        const { missions } = this.state; 

        var renderMissionDropdown = () => {
            if (missions.length === 0){
                return (
                    <div className="dropdown open" aria-labelledby="dropdownMenuLink">
                        <li className="dropdown-item">No Missions to Add Task To</li>
                    </div>
                );
            }
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
                    <select className="form-control" value={this.state.dropdownItem} onChange={this.handleDropdownChange.bind(this)}>
                        {renderMissionDropdown()}
                    </select>
                    <p>Dropdown item is {this.state.dropdownItem}</p>
                </div>
            </div>
         );
    }
}

                    // <div value={this.state.dropdownItem} onChange={this.handleDropdownChange.bind(this)} className="dropdown">
                    //     <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Missions<span className="caret"></span></button>
                    //     <div value={this.state.dropdownItem} onChange={this.handleDropdownChange.bind(this)} className="dropdown-menu">
                    //         {renderMissionDropdown()}
                    //     </div>
                    // </div>
                    // <p>Dropdown is {this.state.dropdownItem}</p>