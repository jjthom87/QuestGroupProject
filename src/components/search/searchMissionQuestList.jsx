import React, { Component } from 'react';
import MissionsListHeader from 'MissionsListHeader';
import MissionsListItem from 'MissionsListItem';
import MissionAndTaskItem from 'MissionAndTaskItem';

export default class searchMissionQuestList extends React.Component {
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
    } 
}