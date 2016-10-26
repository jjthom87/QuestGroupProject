import React, { Component } from 'react'; 

import FeedMissionItem from 'FeedMissionItem';

export default class FeedMissionsList extends React.Component {
    render() {
        const { missions, allUsers } = this.props;

        var renderMissions = () => {
            return missions.map((mission, index) => {
                return (
                	<div>
	                    <FeedMissionItem
	                    	createdOn={mission.createdOn}
	                    	title={mission.title}
	                    	allUsers={allUsers}
	                    	UserId={mission.UserId}
	                    	key={index}
	                    />
	                </div>
                );
            });
        }
        var noMissions = () => {
            if (missions.length === 0){
                return (
                    <p className="noQuestsText text-center">No Users</p>
                );
            }
        }
        return (
            <div>
                {noMissions()}
                {renderMissions()}
            </div>
        );
    } 
}