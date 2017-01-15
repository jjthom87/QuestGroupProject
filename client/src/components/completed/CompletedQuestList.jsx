import React, { Component } from 'react'; 
import CompletedQuestItem from 'CompletedQuestItem';

export default class CompletedQuestList extends React.Component {
    render() {
        const { quests, milestones, milestonetasks } = this.props;
        
        var renderQuests = () => {
            return quests.map((quest, index) => {
            	var filteredMilestone = milestones.filter((milestone) => milestone.QuestId === quest.id);
            	var filteredMilestonetasks = milestonetasks.filter((milestonetask) => milestonetask.QuestId === quest.id)
                return (
                    <CompletedQuestItem
                    	quests={quests}
                        title={quest.title}
                        description={quest.description}
                        createdOn={quest.createdOn}
                        completedOn={quest.completedOn}
                        milestones={filteredMilestone}
                        milestonetasks={filteredMilestonetasks}
                        id={quest.id}
                        key={index}
                    />
                );
            });
        }
        var noQuests = () => {
            if (quests.length === 0){
                return (
                    <p className="noQuestsText">No completed Quests</p>
                );
            }
        }
        return (
            <div>
                <p className="missionsTitle">Quests</p>
                {noQuests()}
                {renderQuests()}
            </div>
        );
    } 
}