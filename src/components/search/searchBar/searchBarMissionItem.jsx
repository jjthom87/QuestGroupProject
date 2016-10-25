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
                        <img src={user.profileImage} style={{width: 30, height: 30}}/>
                    </div>
                );
            });
        }

        return (
            <div className="panel panel-default" id={"panel" + id}>
                 <div className="panel-heading">
                    <span> <a data-toggle="collapse" data-target={"#mcollapse" + id} 
                    href={"#mcollapse" + id}><strong>Mission: </strong> {missionTitle}</a></span>
                </div>
                <div id={"mcollapse" + id}className="panel-collapse collapse">
                    <div className="panel-body">
                        <div className="searchPrefix"><strong>Description: </strong><p className="missionSearchText">{missionDescription}</p></div>
                        <div className="searchPrefix"><strong>Username: </strong><div className="missionSearchText">{singleUser()}</div></div>
                        <div className="searchPrefix"><strong>Start Date: </strong><p className="missionSearchText">{missionCreatedOn}</p></div>
                        <div className="searchPrefix"><strong>Likes: </strong><p className="missionSearchText">{missionLikes}</p></div>
                        <div className="searchPrefix"><strong>Status: </strong><p className="missionSearchText">{missionStatus()}</p></div>
                        <div className="searchPrefix"><strong>Tasks: </strong><div className="missionSearchText">{singleTask()}</div></div>
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