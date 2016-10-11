import React, { Component, cloneElement } from 'react';
import MissionsList from './missions-list';
import Createmission from './create-mission';

// const missions = [
// {
//     task: 'Example Mission',
//     date: 'date',
//     isCompleted: false
// },
// {
//     task: 'Example Mission',
//     date: 'date',
//     isCompleted: false
// }
// ];

class MissionMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            missions: []
        };
    }
     // MISSION (tasks CRUD):
    createMiss(description) {
        console.log("description is " + description);
        const { missions } = this.state;
        const newMiss = {
            description
        }
        console.log(newMiss);
        fetch('/mission/create', {
            method: 'post',
            body: JSON.stringify(newMiss),
            headers: {
                'content-type': 'application/json'
            }
        }).then((response) => response.json())
            .then((results) => {
            console.log("results are " + results);
            this.setState({
                missions: missions.concat(results)
            });
        });
    }
    //     createMission(text) {
    //     const { missions } = this.state;
    //     const newMission = {
    //         description: text.description
    //     }
    //     this.state.missions.push({
    //         task,
    //         date,
    //         isCompleted: false
    //     });
    //     this.setState({ isCompleted: false });
    //     console.log(missions);
    // },
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
    render() {
        return (
            <div>
                <h1>Missions Home</h1>
                <Createmission
                    missions={this.props.missions}
                    createMiss={this.createMiss.bind(this)}
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
}

export default MissionMain;
    
