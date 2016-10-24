import React, { Component } from 'react';
import SearchBarItem from 'MissionTaskSearchItem';

export default class SearchBarList extends React.Component {
    render() {
        const { missions, missiontasks } = this.props;
        
        var renderMissionSearch = () => {
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
        var noMissionResults = () => {
            if (missions.length === 0){
                return (
                    <p className="noMissionsText">Sorry, no Missions were found based on your search.</p>
                );
            }
        }
        return (
            <div>
                <p className="missionsTitle">Mission Search Results</p>
                {noMissionResults()}
                {renderMissionSearch()}
            </div>
        );
    } 
}