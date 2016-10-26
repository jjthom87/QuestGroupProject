import React, { Component } from 'react'; 

import AllQuestItemWoLikes from 'AllQuestItemWoLikes';

export default class AllQuestListWoLikes extends React.Component {
    render() {
        const { quests, milestones, milestonetasks, allUsers, deleteQuest } = this.props;
        
        var renderQuests = () => {
            return quests.map((quest, index) => {
            	var filteredMilestone = milestones.filter((milestone) => milestone.QuestId === quest.id);
            	var filteredMilestonetasks = milestonetasks.filter((milestonetask) => milestonetask.QuestId === quest.id)
                return (
                    <AllQuestItemWoLikes
                    	quests={quests}
                        title={quest.title}
                        likes = {quest.likes}
                        createdOn={quest.createdOn}
                        description={quest.description}
                        completedOn={quest.completedOn}
                        milestones={filteredMilestone}
                        milestonetasks={filteredMilestonetasks}
                        deleteQuest={deleteQuest}
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
                    <p className="noQuestsText text-center">No Quests</p>
                );
            }
        }
        return (
            <div>
                {noQuests()}
                {renderQuests()}
            </div>
        );
    } 
}