// **WIP: To contain the contents of MissionSearchList, QuestList, AND QuestListforQM
// So far MissionSearch components have been integrated...TBC
import React, { Component } from 'react';
import SearchBarItem from 'MissionTaskSearchItem';

export default class SearchBarList extends React.Component {
    render() {
        const { missions, missiontasks } = this.props;
        
        var renderMissions = () => {
            return missions.map((mission, index) => {
                return (
                    <MissionTaskSearchItem
                        title={mission.title}
                        description={mission.description}
                        missiontasks={missiontasks}
                        key={index}
                    />
                );
            });
        }
        var noMissions = () => {
            if (missions.length === 0){
                return (
                    <p className="noMissionsText">Select a Mission from the Dropdown</p>
                );
            }
        }
        return (
            <div>
                <p className="missionsTitle">Missions</p>
                {noMissions()}
                {renderMissions()}
            </div>
        );
    } 
}