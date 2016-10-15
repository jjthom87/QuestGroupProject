import _ from 'lodash';
import React, { Component } from 'react';
import QuestsListHeader from 'QuestsListHeader';
import QuestsListItem from 'QuestsListItem';

export default class QuestsList extends React.Component {
    render() {
        const { quests, toggleMilestone, deleteQuest } = this.props;

        var renderQuests = () => {
            return quests.map((quest, index) => {
                return (
                    <QuestsListItem
                        description={quest.description}
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
                    <p className="noQuestsText">Please Create a Quest</p>
                );
            }
        }
        return (
            <div>
                <p className="questsTitle">Quests</p>
                <div>{noQuests()}</div>
                <table>
                    <tbody>
                        {renderQuests()}
                    </tbody>
                </table>
            </div>
        );
    } 
}
