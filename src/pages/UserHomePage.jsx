import React, { Component } from 'react';
import { Link, IndexLink } from "react-router";
import CreateMission from 'CreateMission';
import MissionsList from 'MissionsList';
import Logout from 'Logout';
import { Router , browserHistory } from 'react-router';

// import Footer from "../components/layout/Footer";
// import Nav from "../components/layout/Nav";

export default class UserHomePage extends React.Component {
  	constructor(props, context) {
		super(props, context);
		this.state = {
			loginUser: '',
			fullLoginUser: '',
			missions: [],
			createdOn: ''
		};
	}
	toggleTask(task) {
        const foundtask= _.find(this.state.missions, mission => mission.task === task);
        foundtask.isCompleted = !foundtask.isCompleted;
        this.setState({ missions: this.state.missions});
	}
	saveTask(oldTask, newTask, oldDate, newDate) {
        const foundtask=_.find(this.state.missions, mission=> mission.task ===oldTask);
        foundtask.task=newTask;
        foundtask.date=newDate;
        this.setState({missions: this.state.missions});
    }
	handleDeleteMission(id){
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
	createMission(description) {
        const { missions } = this.state;
        
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
                    missions: missions.concat(results)
                });
            });
    }
	logoutHandler(){
		fetch('/users/logout', {
			method: 'delete',
			headers: {
				Auth: localStorage.getItem('token'),
			},
			credentials: 'include'
		}).then((results) => {
			browserHistory.push('/');
		});
	}
  	componentWillMount(){
  		const { missions } = this.state
		fetch('/home', {
			credentials: 'include',
			headers: {
				Auth: localStorage.getItem('token')
			}
		}).then((response) => response.json())
		.then((results) => {
			this.setState({
				fullLoginUser: results.currentUser,
				loginUser: results.currentUser.firstname,
				missions: results.missions
			});
		});
	}
	render() {
		const { loginUser, missions } = this.state;
		const filtered = missions.map((mission) => mission.description);
    	return (
      		<div>
      			<Logout onLogout={this.logoutHandler.bind(this)} />
      			<h1>Welcome Home {loginUser}</h1>
      			<CreateMission createMission={this.createMission.bind(this)}/>
      			<MissionsList 
      				missions={missions}
      				toggleTask={this.toggleTask.bind(this)}
                	saveTask={this.saveTask.bind(this)}
                	handleDeleteMission={this.handleDeleteMission.bind(this)} 
                />
      		</div>
		);
		}
}