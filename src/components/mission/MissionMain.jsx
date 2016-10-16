import React, { Component, cloneElement } from 'react';
var {Link, IndexLink} = require('react-router');
import UserHomePage from 'UserHomePage';
import CreateMission from 'CreateMission';
import CreateTask from 'CreateTask';
<<<<<<< HEAD
import MissionMainItem from 'MissionMainItem';
=======
import MissionMainList from 'MissionMainList';
import MainNav from 'MainNav';
>>>>>>> 54dfec801f61afa7e6f2248356675d11d20dcdf3

export default class MissionMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mission: [],
            tasks: []
        };
    }
    createMission(description) {
        const { mission } = this.state;
        
        const newMiss = {
            description
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
                    mission: results.concat(results)
                });
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
        const {mission} = this.state;
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
                mission: results.mission,
            });
        });
    }
    render() {

        const { mission } = this.props;

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
                        missions={this.props.missions}
                        createMission={this.createMission.bind(this)}
                    />
                    <MissionMainList
                        missions={this.state.missions}
                        toggleTask={this.toggleTask.bind(this)}
                        saveTask={this.saveTask.bind(this)}
                        deleteMission={this.deleteMission.bind(this)}
                        createTask={this.handleCreateTask.bind(this)}
                    />
                </div>
<<<<<<< HEAD
                <h1 id="pageTitle">Missions Home</h1>
                <CreateMission
                    missions={this.props.missions}
                    createMission={this.createMission.bind(this)}
                />
                <MissionMainItem
                    mission={mission}
                    createTask={this.handleCreateTask.bind(this)}
                />
=======
>>>>>>> 54dfec801f61afa7e6f2248356675d11d20dcdf3
            </div>
         );
    }
}