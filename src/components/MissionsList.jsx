import _ from 'lodash';
import React, { Component } from 'react';
import MissionsListHeader from 'MissionsListHeader';
import MissionsListItem from 'MissionsListItem';

export default class MissionsList extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'missions');

        return _.map(this.props.missions, (mission, index) => 
            <MissionsListItem key={index} {...mission} {...props} />);
    }
    render() {
        return (
            <table>
                <MissionsListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    } 
}
