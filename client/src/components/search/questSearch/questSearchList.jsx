import React, { Component } from 'react';
import QuestAndMilestoneSearchItem from 'QuestAndMilestoneSearchItem';

export default class QuestsList extends React.Component {
    render() {
        const { quests, milestones, milestonetasks, toggleMilestone, completeQuest, deleteQuest, deleteMilestone, toggleMilestoneTask, deleteMilestoneTask } = this.props;

        var renderQuests = () => {
            return quests.map((quest, index) => {
                return (
                    <QuestAndMilestoneSearchItem
                        title={quest.title}
                        description={quest.description}
                        dateQuest={quest.dateQuest}
                        createdOn={quest.createdOn}
                        milestones={milestones}
                        milestonetasks={milestonetasks}
                        id={quest.id}
                        key={index}
                    />
                );
            });
        }
        var noQuests = () => {
            if (quests.length === 0){
                return (
                    <p className="noQuestsText">Select a Quest from the Dropdown</p>
                );
            }
        }
        return (
            <div>
                <p className="questsTitle">Quests</p>
                {noQuests()}
                {renderQuests()}
            </div>
        );
    } 
}
