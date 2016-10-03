import React from 'react';
import _ from 'lodash';
// import Modal from './modalsPage';
import MissionsList from './missions-list';
import Createmission from './create-mission';

const missions = [
{
    task: 'Example Mission',
    isCompleted: false
},
{
    task: 'Example Mission',
    isCompleted: false
}
];

export default class App extends React.Component {
     
    constructor(props) {
        super(props);

        this.state = {
            missions
        };
    }

    render() {

        return (
            <div>

                <div id="missionSection">
                    <h1>Create a mission</h1>
                    
                    <Createmission
                        missions={this.state.missions}
                        createTask={this.createTask.bind(this)}
                    />
                    <MissionsList
                        missions = {this.state.missions}
                        toggleTask = {this.toggleTask.bind(this)}
                        saveTask = {this.saveTask.bind(this)}
                        deleteTask = {this.deleteTask.bind(this)}
                    />
                        <p>Welcome Home</p>
                        <a href="/logout"><button type = "button">Logout</button></a>
                        <a href="/home"><button type = "button">Home</button></a>
                </div>

                // <div id="questSection">
                //     <h1>Create a quest</h1>

                //     <Createquest
                //         missions={this.state.missions}
                //         createTask={this.createTask.bind(this)}
                //     />
                //     <QuestList
                //         missions = {this.state.missions}
                //         toggleTask = {this.toggleTask.bind(this)}
                //         saveTask = {this.saveTask.bind(this)}
                //         deleteTask = {this.deleteTask.bind(this)}
                //     />
                //         <p>Welcome Home</p>
                //         <a href="/logout"><button type = "button">Logout</button></a>
                //         <a href="/home"><button type = "button">Home</button></a>
                // </div>

            </div>
        );
    }

    createTask(task) {
        this.state.missions.push({
            task,
            isCompleted: false
        });
        this.setState({ isCompleted: false });
    }

    toggleTask(task) {
        const foundmission= _.find(this.state.missions, mission => mission.task === task);
        foundmission.isCompleted = !foundmission.isCompleted;
        this.setState({ missions: this.state.missions});
    }

    saveTask(oldTask, newTask) {
        const foundmission=_.find(this.state.missions, mission=> mission.task ===oldTask);
        foundmission.task=newTask;
        this.setState({missions: this.state.missions});
    }

    deleteTask(taskDelete) {
        const removeTask=_.remove(this.state.missions, mission=> mission.task ===taskDelete);
        this.setState({missions: this.state.missions});
    }

};
