import React, { Component } from 'react';
var {Link, IndexLink} = require('react-router');
import SearchBarMilestoneTaskItem from 'searchBarMilestoneTaskItem'

export default class SearchBarQuestItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderQuestItem() {
        const { id, users, milestones, milestoneTasks, questTitle, questDescription , questCompleted, questCreatedOn, questLikes } = this.props;
        const owl = "https://s-media-cache-ak0.pinimg.com/originals/9e/b4/97/9eb497079e582509e89febf7552ddc02.png";

        var questStatus = () => {
            if(questCompleted === true) {
                var questAchieved = "Quest Achieved";
                return questAchieved;
            }
            else {
                var questActive = "Active Quest";
                return questActive;
            }
        }

        var singleMilestone = () => {
            return milestones.map((milestone, index) => {
                var filteredMilestoneTasks = milestoneTasks.filter((milestonetask) => milestonetask.MilestoneUuid === milestone.uuid);
                return (
                    <div >
                            <p key={index}  className="questDescription"><strong> Milestone: </strong>{milestone.milestone}</p>
                            <SearchBarMilestoneTaskItem
                                milestoneTasks={filteredMilestoneTasks}
                                milestones={milestone.milestone}
                            />
                    </div>
                );
            })
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
                        <p className="mstext"><strong>Start Date: </strong>{questCreatedOn}</p>
                        
                        <p className="mstext"><strong>Likes: </strong>{questLikes}</p>
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
                    <span className=""><div className=""><a  data-toggle="collapse" data-target={"#qcollapse" + id} 
                    href={"#qcollapse" + id}>{picture()}<strong >Quest: </strong>{questTitle}</a></div></span>
                </div>
                <div id={"qcollapse" + id} className="panel-collapse collapse">
                    <div className="panel-body">
                        {singleUser()}
                        <div className="mstext"><strong>Description: </strong><p>{questDescription}</p></div>
                        <div className="mstext"><strong>Status: </strong><p >{questStatus()}</p></div>
                        <div className="mstext">{singleMilestone()}</div>
                    </div>
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