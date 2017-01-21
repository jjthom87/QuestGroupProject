import React, { Component } from 'react'; 

import AllMissionItem from 'AllMissionItem';

export default class AllMissionList extends React.Component {
    render() {
        const { missions, missiontasks, allUsers, loginUser, loginId } = this.props;
        
        var renderMissions = () => {
            return missions.map((mission, index) => {
            	var filteredMissiontask = missiontasks.filter((missiontask) => missiontask.MissionId === mission.id);
                return (
                    <AllMissionItem
                    	missions={missions}
                        title={mission.title}
                        likers={mission.likers}
                        description={mission.description}
                        createdOn={mission.createdOn}
                        completedOn={mission.completedOn}
                        missiontasks={filteredMissiontask}
                        id={mission.id}
                        allUsers={allUsers}
                        loginUser={loginUser}
                        loginId={loginId}
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