import React, { Component } from 'react'; 

import FeedQuestItem from 'FeedQuestItem';

export default class FeedQuestsList extends React.Component {
    render() {
        const { quests, allUsers } = this.props;

        var renderQuests = () => {
            return quests.map((quest, index) => {
                return (
                	<div>
	                    <FeedQuestItem
	                    	createdOn={quest.createdOn}
	                    	title={quest.title}
	                    	allUsers={allUsers}
	                    	UserId={quest.UserId}
	                    	key={index}
	                    />
	                </div>
                );
            });
        }
        var noQuests = () => {
            if (quests.length === 0){
                return (
                    <p className="noQuestsText">No Users</p>
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