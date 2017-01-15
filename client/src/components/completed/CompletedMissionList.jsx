import React, { Component } from 'react'; 

import CompletedMissionItem from 'CompletedMissionItem';

export default class CompletedMissionList extends React.Component {
    render() {
        const { missions, missiontasks } = this.props;
        
        var renderMissions = () => {
            return missions.map((mission, index) => {
            	var filteredMissiontask = missiontasks.filter((missiontask) => missiontask.MissionId === mission.id);
                return (
                    <CompletedMissionItem
                    	missions={missions}
                        title={mission.title}
                        description={mission.description}
                        createdOn={mission.createdOn}
                        completedOn={mission.completedOn}
                        missiontasks={filteredMissiontask}
                        id={mission.id}
                        key={index}
                    />
                );
            });
        }
        var noMissions = () => {
            if (missions.length === 0){
                return (
                    <p className="noMissionsText">No completed Missions</p>
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