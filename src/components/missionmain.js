import React, { cloneElement } from 'react';
import MissionsList from './missions-list';
import Createmission from './create-mission';

const missions = [
{
    task: 'Example Mission',
    date: 'date',
    isCompleted: false
},
{
    task: 'Example Mission',
    date: 'date',
    isCompleted: false
}
];

export default class MissionMain extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            missions
        };
    }

    render() {
        return (

            <div>
                <h1>Missions Home</h1>
                <Createmission
                    missions={this.props.missions}
                    createTask={this.createTask.bind(this)}
                />
                

                 {
                    cloneElement(this.props.children, {

                        missions: this.state.missions,
                        toggleTask: this.toggleTask.bind(this),
                        saveTask: this.saveTask.bind(this),
                        deleteTask: this.deleteTask.bind(this)
                     
                  })
                }
            </div>

        );
    }
  
    

    // MISSION (tasks CRUD):
    createTask(task, date) {
        this.state.missions.push({
            task,
            date,
            isCompleted: false
        });
        this.setState({ isCompleted: false });
        console.log(missions);
    }

    toggleTask(task) {
        const foundtask= _.find(this.state.missions, mission => mission.task === task);
        foundtask.isCompleted = !foundtask.isCompleted;
        this.setState({ missions: this.state.missions});
    }

    saveTask(oldTask, newTask, oldDate, newDate) {
        const foundtask=_.find(this.state.missions, mission=> mission.task ===oldTask);
        foundtask.task=newTask;
        foundtask.date=newDate;
        this.setState({missions: this.state.missions});
    }

    deleteTask(taskDelete) {
        const removeTask=_.remove(this.state.missions, mission=> mission.task ===taskDelete);
        this.setState({missions: this.state.missions});
    }

}