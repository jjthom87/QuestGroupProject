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


        return (
            <div>
                 <div className="panel panel-success qmboxCompleted">
                    <div className="searchPrefix">Mission Title: <p className="missionSearchText">{title}</p></div>
                    <div className="searchPrefix">Description: <p className="missionSearchText">{description}</p></div>
                    <div className="searchPrefix">Mission Started: <p className="missionSearchText">{createdOn}</p></div>
                    <div className="searchPrefix">Likes: <p className="missionSearchText">{likes}</p></div>
                </div>
            </div>
        );  
    }

    render() {
        return (
            <div>
					<div className="panel panel-success qmboxCompleted">
                		{this.renderTaskSection()}
                	</div>
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