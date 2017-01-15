import React, { Component } from 'react'; 

import AllMissionItemWoLikes from 'AllMissionItemWoLikes';

export default class AllMissionListWoLikes extends React.Component {
    render() {
        const { missions, missiontasks, allUsers, deleteMission } = this.props;
        
        var renderMissions = () => {
            return missions.map((mission, index) => {
            	var filteredMissiontask = missiontasks.filter((missiontask) => missiontask.MissionId === mission.id);
                return (
                    <AllMissionItemWoLikes
                    	missions={missions}
                        title={mission.title}
                        likes={mission.likes}
                        createdOn={mission.createdOn}
                        description={mission.description}
                        completedOn={mission.completedOn}
                        missiontasks={filteredMissiontask}
                        deleteMission={deleteMission}
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