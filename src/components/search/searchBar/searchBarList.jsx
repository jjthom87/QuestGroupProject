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
        } = this.props;
        
        var renderMissionList = () => {
            return filteredMissions.map((mission, index) => {
                var filteredMissionTasks = missionTasks.filter((missiontask) => missiontask.MissionId === mission.id);
                return (
                    <div className="qmboxCompleted">
                        <SearchBarMissionItem
                            missionTitle={mission.title}
                            missionDescription={mission.description}
                            missionCompleted={mission.isCompleted}
                            missionLikes={mission.likes}
                            missionCreatedOn={mission.createdOn}
                            missionTasks={filteredMissionTasks}
                            id={mission.id}
                        />
                    </div>
                );
            });
        }
        var noMissions = () => {
            if (filteredMissions.length === 0){
                return (
                    <p className="noMissionsText">Sorry, no Mission results could be found</p>
                );
            }
        }

        var renderQuestList = () => {
            return filteredQuests.map((quest, index) => {
                return (
                    <div className="qmboxCompleted">
                        <SearchBarQuestItem
                            questTitle={quest.title}
                            questDescription={quest.description}
                            questCompleted={quest.isCompleted}
                            questLikes={quest.likes}
                            questCreatedOn={quest.createdOn}
                        />
                    </div>
                );
            });
        }
        var noQuests = () => {
            if (filteredQuests.length === 0){
                return (
                    <p className="noMissionsText">Sorry, no Quest results could be found</p>
                );
            }
        }
        return (
            <div>
                {noQuests()}
                {noMissions()}
                <p className="missionsTitle">Missions</p>
                {renderMissionList()}
                <p className="missionsTitle">Quests</p>
                {renderQuestList()}
            </div>
        );
    } 
}