import React, { Component } from 'react';
import MissionsListItem from 'MissionsListItem';
import CreateTask from 'CreateTask';
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from 'react-bootstrap';

export default class MissionMainList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            missionId: ''
        };
    }
    handleCreate(event) {
        event.preventDefault();

        const taskInput = this.refs.taskInput.value;

        this.setState({
            taskValue: taskInput
        })
        const validateInput = this.validateInput(taskInput);

        if(validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        if (taskInput.length > 0) {
            this.refs.taskInput.value = '';
            this.setState({ error: null });
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
    handleCreateTask() {
        const { missionId, tasks } = this.state; 

        fetch(`/task/create/${missionId}`, {
            method: 'post',
            body: JSON.stringify(this.refs.taskInput.value),
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
        }).then((response) => response.json())
            .then((results) => {
                this.setState({
                    tasks: tasks.concat(results)
                });
            });
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
                        <td>
                            <form onSubmit={this.handleCreateTask.bind(this)}>
                                <input type="text" placeholder="Create Task" ref="taskInput" />
                                <input type="submit" value="Add Task"/>
                            </form>
                        </td>
                    </div>
                );
            });
        }
        return (
            <div>
                <p className="missionsTitle">Missions</p>
                <table>
                    <tbody>
                        {renderMissions()}
                    </tbody>
                </table>
            </div>
        );
    } 
}