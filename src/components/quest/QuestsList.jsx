import React, { Component } from 'react';
import QuestsListHeader from 'QuestsListHeader';
import QuestAndMilestoneItem from 'QuestAndMilestoneItem';

export default class QuestsList extends React.Component {
    render() {
        const { quests, milestones, milestonetasks, toggleMilestone, completeQuest, deleteQuest, deleteMilestone, toggleMilestoneTask, deleteMilestoneTask } = this.props;

        var renderQuests = () => {
            return quests.map((quest, index) => {
                return (
                    <QuestAndMilestoneItem
                        title={quest.title}
                        description={quest.description}
                        dateQuest={quest.dateQuest}
                        milestonetasks={milestonetasks}
                        toggleMilestoneTask={toggleMilestoneTask}
                        deleteMilestoneTask={deleteMilestoneTask}
                        deleteMilestone={deleteMilestone}
                        deleteQuest={deleteQuest}
                        completeQuest={completeQuest}
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
