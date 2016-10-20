// MissionTasks (here)
import React, { Component } from 'react'; 
import MissionAndTaskItem from 'MissionAndTaskItem';

export default class MissionSearchItem extends React.Component {
    render() {
        const { missions, missiontasks, toggleMissionTask, deleteMission, deleteMissionTask } = this.props;
        
        var renderMissions = () => {
            return missions.map((mission, index) => {
                return (
                    <MissionAndTaskItem
                        title={mission.title}
                        description={mission.description}
                        deleteMission={deleteMission}
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