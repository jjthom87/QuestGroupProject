import React, { cloneElement } from 'react';
import QuestsList from './quests-list';
import Createquest from './create-quest';
import QuestTitle from './quest-title';


const quests = [
{

    milestone: 'Example Quest',
    isCompleted: false,
    date: ''

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
                <h1>Quests Home</h1>

                <Createquest
                    quests={this.props.quests}
                    createMilestone={this.createMilestone.bind(this)}
                />
                {
                    cloneElement(this.props.children, {

                        quests: this.state.quests,
                        toggleMilestone: this.toggleMilestone.bind(this),
                        saveMilestone: this.saveMilestone.bind(this),
                        deleteMilestone: this.deleteMilestone.bind(this)
                     
                  })
                }
                        
            </div>

         )
    }

    // QUEST (milestones CRUD):

    createMilestone(milestone, date) {
        this.state.quests.push({
            milestone,
            date,
            isCompleted: false
        });
        this.setState({ isCompleted: false });
    }

    toggleMilestone(milestone) {
        const foundMilestone= _.find(this.state.quests, quest => quest.milestone === milestone);
        foundMilestone.isCompleted = !foundMilestone.isCompleted;
        this.setState({ quests: this.state.quests });
    }

    saveMilestone(oldMilestone, newMilestone, oldDate, newDate) {
        const foundMilestone=_.find(this.state.quests, quest => quest.milestone === oldMilestone);
        foundMilestone.milestone=newMilestone;
        foundMilestone.date=newDate;
        this.setState({quests: this.state.quests});
    }

    deleteMilestone(milestoneDelete) {
        const removeMilestone=_.remove(this.state.quests, quest => quest.milestone === milestoneDelete);
        this.setState({quests: this.state.quests});
    }

}