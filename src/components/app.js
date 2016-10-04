import React from 'react';
import _ from 'lodash';
// import Modal from './modalsPage';
import MissionsList from './missions-list';
import Createmission from './create-mission';
import QuestsList from './quests-list';
import Createquest from './create-quest';

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

const quests = [
{
    task: 'Example Quest',
    isCompleted: false
}]

export default class App extends React.Component {
     
    constructor(props) {
        super(props);

        this.state = {
            missions,
            quests
        };
    }

    render() {

        return (
            <div>

                <div id="missionSection">
                    <h1>Create a Mission</h1>
                    
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
                        <p>(Nav-bar here)</p>
                        <a href="/logout"><button type = "button">Logout</button></a>
                        <a href="/home"><button type = "button">Home</button></a>
                </div>

                <div id="questSection">
                     <h1>Create a Quest</h1>

                    <Createquest
                        quests={this.state.quests}
                        createMission={this.createMission.bind(this)}
                    />
                    <QuestsList
                        quests = {this.state.quests}
                        toggleMission = {this.toggleMission.bind(this)}
                        saveMission = {this.saveMission.bind(this)}
                        deleteMission = {this.deleteMission.bind(this)}
                    />
                        
                </div>

            </div>
        );
    }


    // QUEST (missions CRUD):
    createMission(mission) {
        this.state.quests.push({
            mission,
            isCompleted: false
        });
        this.setState({ isCompleted: false });
    }

    toggleMission(mission) {
        const foundmission= _.find(this.state.quests, quest => quest.mission === mission);
        foundmission.isCompleted = !foundmission.isCompleted;
        this.setState({ quests: this.state.quests });
    }

    saveMission(oldMission, newMission) {
        const foundmission=_.find(this.state.quests, quest => quest.mission === oldMission);
        foundmission.mission=newMission;
        this.setState({quests: this.state.quests});
    }

    deleteMission(missionDelete) {
        const removeMission=_.remove(this.state.quests, quest => quest.mission === missionDelete);
        this.setState({quests: this.state.quests});
    }


    // MISSION (tasks CRUD):
    createTask(task) {
        this.state.missions.push({
            task,
            isCompleted: false
        });
        this.setState({ isCompleted: false });
    }

    toggleTask(task) {
        const foundtask= _.find(this.state.missions, mission => mission.task === task);
        foundtask.isCompleted = !foundtask.isCompleted;
        this.setState({ missions: this.state.missions});
    }

    saveTask(oldTask, newTask) {
        const foundtask=_.find(this.state.missions, mission=> mission.task ===oldTask);
        foundtask.task=newTask;
        this.setState({missions: this.state.missions});
    }

    deleteTask(taskDelete) {
        const removeTask=_.remove(this.state.missions, mission=> mission.task ===taskDelete);
        this.setState({missions: this.state.missions});
    }

};
