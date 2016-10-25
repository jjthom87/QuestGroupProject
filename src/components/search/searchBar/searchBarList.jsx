import React, { Component } from 'react';
import SearchBarMissionItem from 'SearchBarMissionItem';
import SearchBarQuestItem from 'SearchBarQuestItem';

export default class SearchBarList extends React.Component {
    render() {
        
        const { 
            filteredQuests, 
            filteredMissions, 
            missionTasks,
            milestoneTasks,
            milestones,
            users
        } = this.props;
        
        var renderMissionList = () => {
            return filteredMissions.map((mission, index) => {
                var filteredMissionTasks = missionTasks.filter((missiontask) => missiontask.MissionId === mission.id);
                var filteredUsers = users.filter((user) => user.id === mission.UserId);
                
                return (
                    <div className="qmboxCompleted">
                        <SearchBarMissionItem
                            missionTitle={mission.title}
                            missionDescription={mission.description}
                            missionCompleted={mission.missionCompleted}
                            missionLikes={mission.likes}
                            missionCreatedOn={mission.createdOn}
                            missionTasks={filteredMissionTasks}
                            id={mission.id}
                            users={filteredUsers}
                        />
                    </div>
                );
            });
        }
        var noMissions = () => {
            if (filteredMissions.length === 0){
                return (
                    <p className="noResultsFound">Sorry, no Mission results could be found</p>
                );
            }
        }

        var renderQuestList = () => {
            return filteredQuests.map((quest, index) => {
                var filteredMilestone = milestones.filter((milestone) => milestone.QuestId === quest.id);
                var filteredMilestoneTasks = milestoneTasks.filter((milestonetask) => milestonetask.QuestId === quest.id);
                var filteredUsers = users.filter((user) => user.id === quest.UserId);
                return (
                    <div className="qmboxCompleted">
                        <SearchBarQuestItem
                            questTitle={quest.title}
                            questDescription={quest.description}
                            questCompleted={quest.questCompleted}
                            questLikes={quest.likes}
                            questCreatedOn={quest.createdOn}
                            milestones={filteredMilestone}
                            milestoneTasks={filteredMilestoneTasks}
                            id={quest.id}
                            key={index}
                            users={filteredUsers}
                        />
                    </div>
                );
            });
        }
        var noQuests = () => {
            if (filteredQuests.length === 0){
                return (
                    <p className="noResultsFound">Sorry, no Quest results could be found</p>
                );
            }
        }

        return (
            <div>
                <div className="row">
                    <div className="col-md-5" id="searchPanelHeaders">
                        <p id="searchPanelHeaders">Missions</p>
                        {noMissions()}
                        {renderMissionList()}
                    </div>

                    <div className="col-md-5" id="searchPanelHeaders">
                        <p id="searchPanelHeaders">Quests</p>
                        {noQuests()}
                        {renderQuestList()}
                    </div>
                </div>
            </div>
        );
    } 
}