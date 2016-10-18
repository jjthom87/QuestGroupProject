import React, { Component } from 'react';
import MissionsListHeader from 'MissionsListHeader';
import MissionsListItem from 'MissionsListItem';
import MissionAndTaskItem from 'MissionAndTaskItem';

export default class MissionsList extends React.Component {
    render() {
        const { missions, tasks, toggleTask, deleteMission, deleteTask } = this.props;
        
        var renderMissions = () => {
            return missions.map((mission, index) => {
                return (
                    <MissionAndTaskItem
                        title={mission.title}
                        description={mission.description}
                        deleteMission={deleteMission}
                        deleteTask={deleteTask}
                        toggleTask={toggleTask}
                        tasks={tasks}
                        id={mission.id}
                        key={index}
                    />
                );
            });
        }
        var noMissions = () => {
            if (missions.length === 0){
                return (
                    <p className="noMissionsText">Please Create a Mission</p>
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