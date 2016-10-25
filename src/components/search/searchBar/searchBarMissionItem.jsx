import React, { Component } from 'react';
var {Link, IndexLink} = require('react-router');

export default class SearchBarItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderMissionItem() {
        const { missionTasks, missionTitle, missionDescription , missionCompleted, missionCreatedOn, missionLikes } = this.props;

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
                    <div className="alltaskitem">
                            <p key={index} id="taskText">{task.task}</p>
                    </div>
                )
            })
        }

        return (
            <div>
                 <div className="panel panel-success qmboxCompleted">
                    <div className="searchPrefix"><strong>Mission Title: </strong><p className="missionSearchText">{missionTitle}</p></div>
                    <div className="searchPrefix"><strong>Description: </strong><p className="missionSearchText">{missionDescription}</p></div>
                    <div className="searchPrefix"><strong>Start Date: </strong><p className="missionSearchText">{missionCreatedOn}</p></div>
                    <div className="searchPrefix"><strong>Likes: </strong><p className="missionSearchText">{missionLikes}</p></div>
                    <div className="searchPrefix"><strong>Status: </strong><p className="missionSearchText">{missionStatus()}</p></div>
                    <div className="searchPrefix"><strong>Tasks: </strong><p className="missionSearchText">{singleTask()}</p></div>
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