import React, { Component } from 'react';
var {Link, IndexLink} = require('react-router');

export default class SearchBarMissionItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderMissionItem() {
        const { id, users, missionTasks, missionTitle, missionDescription , missionCompleted, missionCreatedOn, missionLikes } = this.props;

        var missionStatus = () => {
            if(missionCompleted === true) {
                var missionAccomplished = "Mission Accomplished";
                return missionAccomplished;
            }
            else {
                var missionActive = "Active Mission";
                return missionActive;
            }
        }

        var singleTask = () => {
            return missionTasks.map((task, index) => {
                return (
                   
                    <p key={index} id="taskText">{task.task}</p>
                   
                );
            });
        }

        var singleUser = () => {
            return users.map((user, index) => {
                return (
                    <div>
                        <p key={index} id="userText">{user.username}</p>
                        <img src={user.profileImage} style={{width: 50, height: 50}}/>
                    </div>
                );
            });
        }

        return (
            <div className="panel panel-default" id={"panel" + id}>
                 <div className="panel-heading">
                    <span> <a data-toggle="collapse" data-target={"#mcollapse" + id} 
                    href={"#mcollapse" + id}><strong className="searchPanelHeader">Mission: </strong><p className="resultsTitle">"{missionTitle}"</p></a></span>
                </div>
                <div id={"mcollapse" + id}className="panel-collapse collapse">
                    <div className="panel-body">
                        <div className="searchRow"><strong>Description: </strong><p className="searchResults">{missionDescription}</p></div>
                        <div className="searchRow"><strong>Username: </strong><div className="searchResults">{singleUser()}</div></div>
                        <div className="searchRow"><strong>Start Date: </strong><p className="searchResults">{missionCreatedOn}</p></div>
                        <div className="searchRow"><strong>Likes: </strong><p className="searchResults">{missionLikes}</p></div>
                        <div className="searchRow"><strong>Status: </strong><p className="searchResults">{missionStatus()}</p></div>
                        <div className="searchRow"><strong>Tasks: </strong><div className="searchResults">{singleTask()}</div></div>
                    </div>
                </div>
            </div>
        );  
    }

    render() {

        return (
            <div>
               {this.renderMissionItem()}
            </div>
        );
    }
}

// Mission Model (for reference)
    // title: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // description: {
    //   type: DataTypes.TEXT,
    //   allowNull: false
    // },
    // missionName: {
    //   type: DataTypes.STRING
    // },
    // dateMission: {
    //   type: DataTypes.STRING
    // },
    // isCompleted: {
    //   type: DataTypes.BOOLEAN
    // },
    // public: {
    //   type: DataTypes.STRING
    // },
    // missionCompleted: {
    //   type: DataTypes.BOOLEAN
    // },
    // createdOn: {
    //   type: DataTypes.STRING
    // },
    // completedOn: {
    //   type: DataTypes.STRING
    // },
    // likes: {
    //   type: DataTypes.INTEGER
    // }