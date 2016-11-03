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
        const owl = "https://s-media-cache-ak0.pinimg.com/originals/9e/b4/97/9eb497079e582509e89febf7552ddc02.png";

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
                    <p key={index} className="alltaskitem" >{task.task}</p> 
                );
            });
        }
        var singleUser = () => {
            return users.map((user, index) => {
                const renderImage = () => {
                    if (user.profileImage === ''){
                            return (
                                <img src={owl} style={{width: 120, height: 120}} />
                            )
                        } else {
                            return (
                                <img src={user.profileImage} style={{width: 120, height: 120}} />
                            )
                        }
                }
                return (
                    <div className="row">
                        <div className="col-xs-2 col-md-3" id="profimage">
                            {renderImage()}
                        </div>
                        <div className="col-xs-8 col-md-7">   
                        <p key={index} className="mstext"><strong>UserName:</strong>{user.username}</p>
                        <p className="mstext"><strong>Start Date: </strong>{missionCreatedOn}</p>
                        <p className="mstext"><strong>Likes: </strong>{missionLikes}</p>
                        </div>
                    </div>
                );
            });
        }
        var picture = () => {
            return users.map((user, index) => {
                const renderImageSmaller = () => {
                    if (user.profileImage === ''){
                            return (
                                <img src={owl} style={{width: 30, height: 30}} />
                            )
                        } else {
                            return (
                                <img src={user.profileImage} style={{width: 30, height: 30}} />
                            )
                        }
                }
                return (
                    <span id="userImage">
                        {renderImageSmaller()}
                    </span>
                );
            });
        }

        return (
            <div className="panelback userprofilediv" id={"panel" + id}>
                 <div className="panel-heading topPanel">
                    <span className="searchPanelHeader"><div className="resultPanelHeader"><a data-toggle="collapse" data-target={"#mcollapse" + id} 
                    href={"#mcollapse" + id}>{picture()}<strong >Mission: </strong>{missionTitle}</a></div></span>
                </div>
                <div id={"mcollapse" + id}className="panel-collapse collapse">
                    <div className="panel-body">
                        {singleUser()}
                        <div className="mstext"><strong>Status: </strong><p>{missionStatus()}</p></div>
                        <div className="mstext"><strong>Description: </strong><p >{missionDescription}</p></div>
                        <div className="mstext"><strong>Tasks: </strong><div>{singleTask()}</div></div>
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