import React, { Component } from 'react';
import SearchBarItem from 'SearchBarItem';

export default class SearchBarList extends React.Component {
    render() {
        
        const { 
            filteredQuests, 
            filteredMissions, 
            missionName, 
            title, 
            description, 
            isCompleted, 
            likes 
        } = this.props;
        
        var renderMissionList = () => {
            return filteredMissions.map((mission, index) => {
                return (
                    <div className="qmboxCompleted">
                        <SearchBarItem
                            missionTitle={mission.title}
                            missionDescription={mission.description}
                            missionCompleted={mission.isCompleted}
                            missionLikes={mission.likes}
                            missionCreatedOn={mission.createdOn}
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
                        <SearchBarItem
                            title={quest.title}
                            description={quest.description}
                            isCompleted={quest.isCompleted}
                            likes={quest.likes}
                            createdOn={quest.createdOn}
                        />
                    </div>
                );
            });
        }
        var noQuests = () => {
            if (filteredMissions.length === 0){
                return (
                    <p className="noMissionsText">Sorry, no Quest results could be found</p>
                );
            }
        }
        return (
            <div>
                <p className="missionsTitle">Missions</p>
                {noMissions()}
                {renderMissionList()}
                <p className="missionsTitle">Quests</p>
                {noQuests()}
                {renderQuestList()}
            </div>
        );
    } 
}