import _ from 'lodash';
import React, { Component } from 'react';
import QuestsListHeader from 'QuestsListHeader';
import QuestsListItem from 'QuestsListItem';

export default class QuestsList extends React.Component {

    renderItems() {
        const props = _.omit(this.props, 'quests');

        return _.map(this.props.quests, (quest, index) => 
            <QuestsListItem key={index} {...quest} {...props} />);
    }

    render() {
        return (
            <table>
                <QuestsListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    } 
}
