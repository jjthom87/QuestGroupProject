import React from 'react';
import _ from 'lodash';

import MissionHome from './mission-home';
import QuestHome from './quest-home';

// import QuestsList from '../components/quests-list';
// import Createquest from '../components/create-quest';
// import Createmission from '../components/create-mission';
// import MissionsList from '../components/missions-list';

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

export default class Layout extends React.Component {
     
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
                <h1> layout </h1>
                <MissionHome 
                missions={this.state.missions}
                />
                <QuestHome 
                quests={this.state.quests}
                />

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


}
