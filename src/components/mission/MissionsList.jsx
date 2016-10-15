import _ from 'lodash';
import React, { Component } from 'react';
import MissionsListHeader from 'MissionsListHeader';
import MissionsListItem from 'MissionsListItem';

export default class MissionsList extends React.Component {
    render() {
        const { missions, toggleTask, deleteMission } = this.props;

        var renderMissions = () => {
            return missions.map((mission, index) => {
                return (
                    <MissionsListItem
                        description={mission.description}
                        toggleTask={toggleTask}
                        deleteMission={deleteMission}
                        id={mission.id}
                        key={index}
                    />
                );
            });
        }
        var noMissions = () => {
            if (missions.length === 0){
                return (
                    <p className="noMissionsText">Please Create a Mission</p>
                );
            }
        }
        return (
            <div>
                <div className="row">
                    <div className = "col-md-3">
                    </div>
                    <div className = "col-md-4">
                        <p className="missionsTitle">Missions</p>
                        <div>{noMissions()}</div>
                        <table>
                            <tbody>
                                {renderMissions()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    } 
}

    // renderItems() {
    //     const props = _.omit(this.props, 'missions');

    //     return _.map(this.props.missions, (mission, index) => 
    //         <MissionsListItem key={index} {...mission} {...props} />);
    // }