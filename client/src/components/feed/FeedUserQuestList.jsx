import React, { Component } from 'react'; 

import FeedUserQuestItem from 'FeedUserQuestItem';

export default class FeedUserQuestList extends React.Component {
    render() {
        const { userQuests } = this.props;

        var renderQuests = () => {
            return userQuests.map((quest, index) => {
                return (
                    <div>
                        <FeedUserQuestItem
                            createdOn={quest.createdOn}
                            title={quest.title}
                            comments={quest.comments}
                            milestones={quest.Milestones}
                            milestonetasks={quest.Milestonetasks}
                            key={index}
                        />
                    </div>
                );
            });
        }
        var noQuests = () => {
            if (userQuests.length === 0){
                return (
                    <p className="noQuestsText text-center">You have added no Quests</p>
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