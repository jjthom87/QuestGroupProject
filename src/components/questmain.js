import React from 'react';
import QuestsList from './quests-list';
import Createquest from './create-quest';

export default class QuestMain extends React.Component {
    render() {
        return (

            <div>
                <h1>Create a Quest</h1>

                <Createquest
                    quests={this.props.quests}
                    createMission={this.createMission.bind(this)}
                />
                <QuestsList
                    quests = {this.props.quests}
                    toggleMission = {this.toggleMission.bind(this)}
                    saveMission = {this.saveMission.bind(this)}
                    deleteMission = {this.deleteMission.bind(this)}
                />
                        
            </div>

         )
    }

    // QUEST (missions CRUD):
    createMission(mission) {
        this.props.quests.push({
            mission,
            isCompleted: false
        });
        this.setState({ isCompleted: false });
    }

    toggleMission(mission) {
        const foundmission= _.find(this.props.quests, quest => quest.mission === mission);
        foundmission.isCompleted = !foundmission.isCompleted;
        this.setState({ quests: this.props.quests });
    }

    saveMission(oldMission, newMission) {
        const foundmission=_.find(this.props.quests, quest => quest.mission === oldMission);
        foundmission.mission=newMission;
        this.setState({quests: this.props.quests});
    }

    deleteMission(missionDelete) {
        const removeMission=_.remove(this.props.quests, quest => quest.mission === missionDelete);
        this.setState({quests: this.props.quests});
    }

}