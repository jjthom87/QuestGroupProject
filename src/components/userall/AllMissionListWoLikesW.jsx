import React, { Component } from 'react'; 

import AllMissionItemWoLikesW from 'AllMissionItemWoLikesW';

export default class AllMissionListWoLikesW extends React.Component {
    render() {
        const { missions, missiontasks, toggleMissionTask, completeMission, deleteMission, deleteMissionTask, allUsers } = this.props;
        
        var renderMissions = () => {
            return missions.map((mission, index) => {
            	var filteredMissiontask = missiontasks.filter((missiontask) => missiontask.MissionId === mission.id);
                return (
                    <AllMissionItemWoLikesW
                    	missions={missions}
                        title={mission.title}
                        likes={mission.likes}
                        description={mission.description}
                        completedOn={mission.completedOn}
                        missiontasks={filteredMissiontask}
                        id={mission.id}
                        deleteMission={deleteMission}
                        completeMission={completeMission}
                        deleteMissionTask={deleteMissionTask}
                        toggleMissionTask={toggleMissionTask}
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