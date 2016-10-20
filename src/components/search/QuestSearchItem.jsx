import React, { Component } from 'react';
import QuestsListHeader from 'QuestsListHeader';
import QuestAndMilestoneItem from 'QuestAndMilestoneItem';

export default class QuestSearchItem extends React.Component {
    render() {
        const { quests, milestones, milestonetasks, toggleMilestone, deleteQuest, deleteMilestone, toggleMilestoneTask, deleteMilestoneTask } = this.props;

        var renderQuests = () => {
            return quests.map((quest, index) => {
                return (
                    <QuestAndMilestoneItem
                        title={quest.title}
                        description={quest.description}
                        milestones={milestones}
                        milestonetasks={milestonetasks}
                        toggleMilestoneTask={toggleMilestoneTask}
                        deleteMilestoneTask={deleteMilestoneTask}
                        deleteMilestone={deleteMilestone}
                        toggleMilestone={toggleMilestone}
                        deleteQuest={deleteQuest}
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
