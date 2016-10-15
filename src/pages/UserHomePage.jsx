import React, { Component } from 'react';
var {Link, IndexLink} = require('react-router');
import MissionsList from 'MissionsList';
import MissionMain from "MissionMain";
import QuestMain from "QuestMain";
import QuestsList from 'QuestsList';
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
			quests: [],
			createdOn: ''
		};
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
    deleteQuest(id){
        const { quests } = this.state;

        const deleteQuest = _.remove(quests, quest => quest.id === id);

        fetch(`/quest/delete/${deleteQuest[0].id}`,{
            method: 'DELETE',
            body: JSON.stringify(deleteQuest),
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
        }).then((response) => response.json())
        .then((results) => {
            this.setState({
                quests: quests
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
    toggleMilestone(milestone) {
        const foundMilestone= _.find(this.state.quests, quest => quest.milestone === milestone);
        foundMilestone.isCompleted = !foundMilestone.isCompleted;
        this.setState({ quests: this.state.quests });
    }
    saveMilestone(oldMilestone, newMilestone, oldDate, newDate) {
        const foundMilestone=_.find(this.state.quests, quest => quest.milestone === oldMilestone);
        foundMilestone.milestone=newMilestone;
        foundMilestone.date=newDate;
        this.setState({quests: this.state.quests});
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
				missions: results.missions,
				quests: results.quests
			});
		});
	}
	render() {
		const { loginUser, missions, quests } = this.state;

    	return (
      		<div>
      			<Logout onLogout={this.logoutHandler.bind(this)} />
      			<h1 className="text-center" id="pageTitle">Welcome Home {loginUser}</h1>
      			<div className="row collapse navbar-collapse">
      				<div className="col-md-5">
      				</div>
      				<div col-md-6>
						<ul className="nav navbar-nav">
							<li>
								<button className="btn btn-info"><Link to="/missionshome">Create a Mission</Link></button>
							</li>
							<li>
								<button className="btn btn-info"><Link to="/questshome">Create a Quest</Link></button>
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
					</div>
					<div className="col-md-4">
						<MissionsList
		                    missions={missions}
		                    toggleTask={this.toggleTask.bind(this)}
		                    saveTask={this.saveTask.bind(this)}
		                    deleteMission={this.deleteMission.bind(this)}
		                />
		            </div>
		           	<div className="col-md-7">
		                <QuestsList
		                    quests={quests}
		                    toggleMilestone={this.toggleMilestone.bind(this)}
		                    saveMilestone={this.saveMilestone.bind(this)}
		                    deleteQuest={this.deleteQuest.bind(this)}
		                />
		            </div>
		            <div className="col-md-8">
		            </div>
		        </div>
      		</div>
		);
	}
}