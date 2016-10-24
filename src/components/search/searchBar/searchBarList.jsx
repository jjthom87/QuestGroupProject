import React, { Component } from 'react';
import SearchBarItem from 'SearchBarItem';

export default class SearchBarList extends React.Component {
    render() {
        
        const { 
            filteredQuests, 
            filteredMissions, 
            missionName, 
            title, 
            description, 
            isCompleted, 
            likes 
        } = this.props;
        
        var renderMissions = () => {
            return filteredMissions.map((mission, index) => {
                return (
                    <div className="qmboxCompleted">
                        <SearchBarItem
                            title={mission.title}
                            description={mission.description}
                            isCompleted={mission.isCompleted}
                            likes={mission.likes}
                            createdOn={mission.createdOn}
                        />
                    </div>
                );
            });
        }
        var noMissions = () => {
            if (filteredMissions.length === 0){
                return (
                    <p className="noMissionsText">Sorry, no mission results could be found</p>
                );
            }
        }
        return (
            <div>
                <p className="missionsTitle">Missions</p>
                {noMissions()}
                {renderMissions()}
            </div>
        );
    } 
}