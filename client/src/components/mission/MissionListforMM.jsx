import React, { Component } from 'react';
import MissionAndTaskItem from 'MissionAndTaskItem';

export default class MissionListforMM extends React.Component {
    render() {
        const { missions, missiontasks, toggleMissionTask, deleteMission, deleteMissionTask, completeMission } = this.props;
        
        var renderMissions = () => {
            return missions.map((mission, index) => {
                return (
                    <MissionAndTaskItem
                        title={mission.title}
                        description={mission.description}
                        createdOn={mission.createdOn}
                        dateTask={mission.dateTask}
                        timeTask={mission.timeTask}
                        deleteMission={deleteMission}
                        completeMission={completeMission}
                        deleteMissionTask={deleteMissionTask}
                        toggleMissionTask={toggleMissionTask}
                        missiontasks={missiontasks}
                        id={mission.id}
                        key={index}
                    />
                );
            });
        }
        return (
            <div>
                <p className="missionsTitle">Missions</p>
                {renderMissions()}
            </div>
        );
    } 
}