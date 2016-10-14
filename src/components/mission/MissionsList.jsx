import _ from 'lodash';
import React, { Component } from 'react';
import MissionsListHeader from 'MissionsListHeader';
import MissionsListItem from 'MissionsListItem';

export default class MissionsList extends React.Component {
    render() {
        const { missions, toggleTask, handleDeleteMission } = this.props;

        var renderMissions = () => {
            return missions.map((mission, index) => {
                return (
                    <MissionsListItem
                        description={mission.description}
                        toggleTask={toggleTask}
                        handleDeleteMission={handleDeleteMission}
                        id={mission.id}
                        key={index}
                    />
                );
            });
        }
        return (
            <table>
                <MissionsListHeader />
                <tbody>
                    {renderMissions()}
                </tbody>
            </table>
        );
    } 
}

    // renderItems() {
    //     const props = _.omit(this.props, 'missions');

    //     return _.map(this.props.missions, (mission, index) => 
    //         <MissionsListItem key={index} {...mission} {...props} />);
    // }