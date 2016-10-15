import React, { Component } from 'react';
import MissionsListItem from 'MissionsListItem';
import CreateTask from 'CreateTask';

export default class MissionMainList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }
    handleCreate(event) {
        event.preventDefault();

        const taskInput = this.refs.taskInput.value;
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
    // handleCreateTask(task) {
    //     const { tasks } = this.state;
        
    //     const newTask = {
    //         task
    //     }
    //     fetch('/task/create/', {
    //         method: 'post',
    //         body: JSON.stringify(newTask),
    //         headers: {
    //             Auth: localStorage.getItem('token'),
    //             'content-type': 'application/json',
    //             'accept': 'application/json'
    //         },
    //         credentials: 'include'
    //     }).then((response) => response.json())
    //         .then((results) => {
    //             this.setState({
    //                 tasks: tasks.concat(results)
    //             });
    //         });
    // }
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
                        <form onSubmit={this.handleCreate.bind(this)}>
                            <input type="text" placeholder="Create Task" ref="taskInput" />
                            <input type="hidden" name="id" value={mission.id}/>
                            <input type="submit" value="Add Task"/>
                        </form>
                    </div>
                );
            });
        }
        // var noMissions = () => {
        //     if (missions.length === 0){
        //         return (
        //             <p className="noMissionsText">Please Create a Mission</p>
        //         );
        //     }
        // }
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