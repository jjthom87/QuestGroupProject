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
                    <div className="row">
                        <div className="col-xs-2 col-md-2">
                            <img src={user.profileImage} style={{width: 100, height: 100}}/>
                        </div>
                        <div className="col-xs-6">   

                        <p key={index} className="searchResults"><strong>UserName:</strong>{user.username}</p>
                        <p className="searchResults"><strong>Start Date: </strong>{missionCreatedOn}</p>
                        <p className="searchResults"><strong>Likes: </strong>{missionLikes}</p>
                        </div>
                    </div>
                );
            });
        }

        var picture = () => {
            return users.map((user, index) => {
                return (
                    <span id="userImage">
                        <img src={user.profileImage} style={{width: 30, height: 30}}/>
                    </span>
                );
            });
        }

        return (
            <div className="panelback userprofilediv" id={"panel" + id}>
                 <div className="panel-heading topPanel">
                    <span className="searchPanelHeader"> <a data-toggle="collapse" data-target={"#mcollapse" + id} 
                    href={"#mcollapse" + id}>{picture()}<strong >Mission: </strong>{missionTitle}</a></span>
                </div>
                <div id={"mcollapse" + id}className="panel-collapse collapse">
                    <div className="panel-body">
                        {singleUser()}
                        <div className="searchRow"><strong>Status: </strong><p className="searchResults">{missionStatus()}</p></div>
                        <div className="searchRow"><strong>Description: </strong><p className="searchResults">{missionDescription}</p></div>
                        
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