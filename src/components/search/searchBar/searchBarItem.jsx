import React, { Component } from 'react';
var {Link, IndexLink} = require('react-router');

export default class SearchBarItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderMissionItem() {
        const { missionTitle, missionDescription , missionCompleted, missionCreatedOn, missionLikes } = this.props;

        var missionAccomp = () => {
            if(missionCompleted === true) {
                var missionAccomplished = "Mission Accomplished";
                return missionAccomplished;
            }
            else {
                var missionActive = "Active Mission";
                return missionActive;
            }
        }

        return (
            <div>
                 <div className="panel panel-success qmboxCompleted">
                    <div className="searchPrefix">Mission Title: <p className="missionSearchText">{missionTitle}</p></div>
                    <div className="searchPrefix">Description: <p className="missionSearchText">{missionDescription}</p></div>
                    <div className="searchPrefix">Start Date: <p className="missionSearchText">{missionCreatedOn}</p></div>
                    <div className="searchPrefix">Likes: <p className="missionSearchText">{missionLikes}</p></div>
                    <div className="searchPrefix">Status: <p className="missionSearchText">{this.missionAccomp}</p></div>
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