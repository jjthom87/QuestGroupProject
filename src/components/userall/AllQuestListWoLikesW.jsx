import React, { Component } from 'react';
import AllQuestItemWoLikesW from 'AllQuestItemWoLikesW';

export default class AllQuestListWoLikesW extends React.Component {
    render() {
        const { quests, milestones, milestonetasks, toggleMilestone, completeQuest, deleteQuest, deleteMilestone, toggleMilestoneTask, deleteMilestoneTask, allUsers } = this.props;

        var renderQuests = () => {
            return quests.map((quest, index) => {
            	var filteredMilestone = milestones.filter((milestone) => milestone.QuestId === quest.id);
            	var filteredMilestonetasks = milestonetasks.filter((milestonetask) => milestonetask.QuestId === quest.id)
                return (
                    <AllQuestItemWoLikesW
                        title={quest.title}
                        description={quest.description}
                        dateQuest={quest.dateQuest}
                        createdOn={quest.createdOn}
                        likes={quest.likes}
                        milestones={filteredMilestone}
                        milestonetasks={filteredMilestonetasks}
                        toggleMilestoneTask={toggleMilestoneTask}
                        deleteMilestoneTask={deleteMilestoneTask}
                        toggleMilestone={toggleMilestone}
                        deleteMilestone={deleteMilestone}
                        deleteQuest={deleteQuest}
                        completeQuest={completeQuest}
                        allUsers={allUsers}
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