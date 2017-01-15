import React, { Component } from 'react'; 
import MissionAndTaskItem from 'MissionAndTaskItem';

export default class MissionsList extends React.Component {
    render() {
        const { missions, missiontasks, toggleMissionTask, completeMission, deleteMission, deleteMissionTask } = this.props;
        
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
        var noMissions = () => {
            if (missions.length === 0){
                return (
                    <p className="noMissionsText">Find a Mission</p>
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