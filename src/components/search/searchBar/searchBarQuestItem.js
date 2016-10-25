import React, { Component } from 'react';
var {Link, IndexLink} = require('react-router');

export default class SearchBarQuestItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderQuestItem() {
        const { questTitle, questDescription , questCompleted, questCreatedOn, questLikes } = this.props;

        var questAchiev = () => {
            if(questcompleted === true) {
                var questAchieved = "Quest Accomplished";
                return questAchieved;
            }
            else {
                var questActive = "Active Quest";
                return questActive;
            }
        }

        return (
            <div>
                 <div className="panel panel-success qmboxCompleted">
                    <div className="searchPrefix">Quest Title: <p className="missionSearchText">{questTitle}</p></div>
                    <div className="searchPrefix">Description: <p className="missionSearchText">{questDescription}</p></div>
                    <div className="searchPrefix">Start Date: <p className="missionSearchText">{questCreatedOn}</p></div>
                    <div className="searchPrefix">Likes: <p className="missionSearchText">{questLikes}</p></div>
                </div>
            </div>
        );  
    }

render() {
        return (
            <div>
               {this.renderQuestItem()}
            </div>
        );
    }
}