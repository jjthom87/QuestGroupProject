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
                            <p key={index}  id="searchMilestone">{milestone.milestone}</p>
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
                return (
                    <div>
                        <p key={index} id="userText">{user.username}</p>
                        <img key={index} src={user.profileImage}/>
                    </div>
                );
            });
        }

        return (
            <div className="panel panel-default" id={"panel" + id}>
                <div className="panel-heading">
                    <span> <a data-toggle="collapse" data-target={"#qcollapse" + id} 
                    href={"#qcollapse" + id}><strong>Quest: </strong> {questTitle}</a></span>
                </div>
                <div id={"qcollapse" + id} className="panel-collapse collapse">
                    <div className="panel-body">
                        <div className="searchPrefix"><strong>Description: </strong><p className="questSearchText">{questDescription}</p></div>
                        <div className="searchPrefix"><strong>Username: </strong><div className="questSearchText">{singleUser()}</div></div>
                        <div className="searchPrefix"><strong>Start Date: </strong><p className="questSearchText">{questCreatedOn}</p></div>
                        <div className="searchPrefix"><strong>Likes: </strong><p className="questSearchText">{questLikes}</p></div>
                        <div className="searchPrefix"><strong>Status: </strong><p className="questSearchText">{questStatus()}</p></div>
                        <div className="searchPrefix"><strong>Milestone: </strong><div className="questSearchText">{singleMilestone()}</div></div>
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