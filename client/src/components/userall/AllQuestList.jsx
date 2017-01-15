import React, { Component } from 'react'; 

import AllQuestItem from 'AllQuestItem';

export default class AllQuestList extends React.Component {
    render() {
        const { quests, milestones, milestonetasks, allUsers, loginUser } = this.props;
        
        var renderQuests = () => {
            return quests.map((quest, index) => {
            	var filteredMilestone = milestones.filter((milestone) => milestone.QuestId === quest.id);
            	var filteredMilestonetasks = milestonetasks.filter((milestonetask) => milestonetask.QuestId === quest.id)
                return (
                    <AllQuestItem
                    	quests={quests}
                        title={quest.title}
                        description={quest.description}
                        completedOn={quest.completedOn}
                        likes={quest.likes}
                        milestones={filteredMilestone}
                        milestonetasks={filteredMilestonetasks}
                        id={quest.id}
                        allUsers={allUsers}
                        loginUser={loginUser}
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