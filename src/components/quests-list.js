import _ from 'lodash';
import React from 'react';
import QuestsListHeader from './quests-list-header';
import QuestsListItem from './questsListItem';

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
