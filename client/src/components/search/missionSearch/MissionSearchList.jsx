// CONTENTS HAVE BEEN COPIED TO SearchBarList (component) to be adjacent other quest search results from /search (.get) route

import React, { Component } from 'react';
import MissionTaskSearchItem from 'MissionTaskSearchItem';

export default class MissionSearchList extends React.Component {
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