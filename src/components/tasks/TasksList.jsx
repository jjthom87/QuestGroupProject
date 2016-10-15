import _ from 'lodash';
import React, { Component } from 'react';
import MissionsListHeader from 'MissionsListHeader';
import MissionsListItem from 'MissionsListItem';
import CreateTask from 'CreateTask';

export default class TasksList extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
           	tasks: []
        };
    }
    render() {
        const { missions, toggleTask, deleteMission } = this.props;

        var renderMissions = () => {
            return missions.map((mission, index) => {
                return (
                    <MissionsListItem
                        description={mission.description}
                        toggleTask={toggleTask}
                        deleteMission={deleteMission}
                        id={mission.id}
                        key={index}
                    />
                    <CreateTask createTask={this.handleCreateTask.bind(this)}/>
                );
            });
        }
        return (
            <div>
                <table>
                    <tbody>
                        {renderMissions()}
                    </tbody>
                </table>
            </div>
        );
    } 
}