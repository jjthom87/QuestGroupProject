import React, { Component } from 'react';
var {Link, IndexLink} = require('react-router');

export default class SearchBarItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderTaskSection() {
        const { title, description , isCompleted, createdOn, likes } = this.props;

        var missionCompleted = () => {
            if(isCompleted === true) {
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
                    <div className="searchPrefix">Mission Title: <p className="missionSearchText">{title}</p></div>
                    <div className="searchPrefix">Description: <p className="missionSearchText">{description}</p></div>
                    <div className="searchPrefix">Start Date: <p className="missionSearchText">{createdOn}</p></div>
                    <div className="searchPrefix">Likes: <p className="missionSearchText">{likes}</p></div>
                    <div className="searchPrefix">Status: <p className="missionSearchText">{this.missionCompleted}</p></div>
                </div>
            </div>
        );  
    }

    render() {
        const { title, description , isCompleted, createdOn, likes } = this.props;

        var missionCompleted = () => {
            if(isCompleted === true) {
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
                    <div className="searchPrefix">Mission Title: <p className="missionSearchText">{title}</p></div>
                    <div className="searchPrefix">Description: <p className="missionSearchText">{description}</p></div>
                    <div className="searchPrefix">Start Date: <p className="missionSearchText">{createdOn}</p></div>
                    <div className="searchPrefix">Likes: <p className="missionSearchText">{likes}</p></div>
                    <div className="searchPrefix">Status: <p className="missionSearchText">{this.missionCompleted}</p></div>
                </div>
            </div>
        );  
    }

    render() {
        return (
            <div>
               {this.renderTaskSection()}
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