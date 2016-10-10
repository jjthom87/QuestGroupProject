import React, { cloneElement } from 'react';
import QuestsList from './quests-list';
import Createquest from './create-quest';


const quests = [
{
    task: 'Example Quest',
    isCompleted: false
}]

export default class QuestMain extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            quests
        };
    }

    render() {

        return (

            <div>
                <h1>Create a Quest</h1>

                <Createquest
                    quests={this.props.quests}
                    createMission={this.createMission.bind(this)}
                />
                {
                    cloneElement(this.props.children, {

                        quests: this.state.quests,
                        toggleMission: this.toggleMission.bind(this),
                        saveMission: this.saveMission.bind(this),
                        deleteMission: this.deleteMission.bind(this)
                     
                  })
                }
                        
            </div>

         )
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