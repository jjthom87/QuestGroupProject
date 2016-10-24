import React, { Component } from 'react'; 

import AllMissionItem from 'AllMissionItem';

export default class AllMissionList extends React.Component {
    render() {
        const { missions, missiontasks, allUsers } = this.props;
        
        var renderMissions = () => {
            return missions.map((mission, index) => {
            	var filteredMissiontask = missiontasks.filter((missiontask) => missiontask.MissionId === mission.id);
                return (
                    <AllMissionItem
                    	missions={missions}
                        title={mission.title}
                        likes={mission.likes}
                        description={mission.description}
                        completedOn={mission.completedOn}
                        missiontasks={filteredMissiontask}
                        id={mission.id}
                        allUsers={allUsers}
                        key={index}
                    />
                );
            });
        }
        var noMissions = () => {
            if (missions.length === 0){
                return (
                    <p className="noMissionsText text-center">No Missions</p>
                );
            }
        }
        return (
            <div>
                {noMissions()}
                {renderMissions()}
            </div>
        );
    } 
}