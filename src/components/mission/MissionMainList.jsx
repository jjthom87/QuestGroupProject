import React, { Component } from 'react';
import MissionsListItem from 'MissionsListItem';
import CreateTask from 'CreateTask';
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from 'react-bootstrap';

export default class MissionMainList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    handleCreateTask(event) {
        event.preventDefault();

        const taskInput = this.refs.taskInput.value;

        if (taskInput.length > 0) {
            this.refs.taskInput.value = '';
        }
        this.props.createTask(taskInput);
    }
    taskSubmit(){
        const { missionId } = this.state; 
        $.ajax({
            url: `/task/create/${missionId}`,
            type: 'post',
            data: {
                task: JSON.stringify(this.refs.taskInput.value)
            },
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
                }).done(function(response){
                    console.log('response: ' + response)
                })
    }
    render() {
        const { missions, toggleTask, deleteMission } = this.props;

        var renderMissions = () => {
            return missions.map((mission, index) => {
                return (
                    <div>
                        <MissionsListItem
                            description={mission.description}
                            toggleTask={toggleTask}
                            deleteMission={deleteMission}
                            id={mission.id}
                            key={index}
                        />
                        <form onSubmit={this.handleCreateTask.bind(this)}>
                            <input type="text" placeholder="Create Task" ref="taskInput" />
                            <input type="submit" value="Add Task"/>
                        </form>
                    </div>
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