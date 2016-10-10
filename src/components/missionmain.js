import React from 'react';
import MissionsList from './missions-list';
import Createmission from './create-mission';

export default class MissionMain extends React.Component {
    render() {
        return (

            <div>
                <h1>Create a Mission</h1>
                
                <Createmission
                    missions={this.props.missions}
                    createTask={this.createTask.bind(this)}
                />
                <MissionsList
                    missions = {this.props.missions}
                    toggleTask = {this.toggleTask.bind(this)}
                    saveTask = {this.saveTask.bind(this)}
                    deleteTask = {this.deleteTask.bind(this)}
                />
                    
            </div>

         )
    }

    // MISSION (tasks CRUD):
    createTask(task) {
        this.props.missions.push({
            task,
            isCompleted: false
        });
        this.setState({ isCompleted: false });
    }

    toggleTask(task) {
        const foundtask= _.find(this.props.missions, mission => mission.task === task);
        foundtask.isCompleted = !foundtask.isCompleted;
        this.setState({ missions: this.props.missions});
    }

    saveTask(oldTask, newTask) {
        const foundtask=_.find(this.props.missions, mission=> mission.task ===oldTask);
        foundtask.task=newTask;
        this.setState({missions: this.props.missions});
    }

    deleteTask(taskDelete) {
        const removeTask=_.remove(this.props.missions, mission=> mission.task ===taskDelete);
        this.setState({missions: this.props.missions});
    }

}