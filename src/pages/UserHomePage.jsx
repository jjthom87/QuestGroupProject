import React, { Component } from 'react';
import { Router , browserHistory } from 'react-router';
var {Link, IndexLink} = require('react-router');
var _ = require('lodash');
import MissionsList from 'MissionsList';
import MissionMain from "MissionMain";
import QuestMain from "QuestMain";
import QuestsList from 'QuestsList';
import Logout from 'Logout';
import MainNav from 'MainNav';

export default class UserHomePage extends React.Component {
  	constructor(props, context) {
		super(props, context);
		this.state = {
			loginUser: '',
			fullLoginUser: '',
			missions: [],
			quests: [],
            tasks: [],
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
		fetch('/home', {
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
		}).then((response) => response.json())
		.then((results) => {
			this.setState({
				fullLoginUser: results.currentUser,
				loginUser: results.currentUser.firstname,
				missions: results.missions,
				quests: results.quests,
                tasks: results.tasks
			});
		});
	}
	render() {
		const { loginUser, missions, quests, tasks } = this.state;

        var dootyBall = missions.concat(tasks);

        console.log(dootyBall)

        var mappedDootyball = dootyBall.map((dooty) => dooty.missionName);

        console.log(mappedDootyball);

    	return (
      		<div>
              <MainNav/>
                <div className='container' id="homepageDiv">
      			<h1 className="text-center" id="pageTitle">Welcome Home {loginUser}</h1>
      			<div className="row">
      				<div className="col-lg-1 col-lg-offset-5" role="group">
						<button className="btn btn-info"><Link to="/missionshome">Create a Mission</Link></button>
						<button className="btn btn-info"><Link to="/questshome">Create a Quest</Link></button>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
					</div>
					<div className="col-md-3 qmbox">
						<MissionsList
		                    missions={missions}
                            tasks={tasks}
		                    toggleTask={this.toggleTask.bind(this)}
		                    saveTask={this.saveTask.bind(this)}
		                    deleteMission={this.deleteMission.bind(this)}
		                />
		            </div>
		           	<div className="col-md-3 qmbox">
		                <QuestsList
		                    quests={quests}
		                    toggleMilestone={this.toggleMilestone.bind(this)}
		                    saveMilestone={this.saveMilestone.bind(this)}
		                    deleteQuest={this.deleteQuest.bind(this)}
		                />
		            </div>
		            <div className="col-md-3">
		            </div>
		        </div>
                </div> 
      		</div>
		);
	}
}