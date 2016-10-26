import React, { Component } from 'react'; 

import FeedUserMissionItem from 'FeedUserMissionItem';

export default class FeedUserMissionList extends React.Component {
    render() {
        const { userMissions } = this.props;

        var renderMissions = () => {
            return userMissions.map((mission, index) => {
                return (
                	<div>
	                    <FeedUserMissionItem
	                    	createdOn={mission.createdOn}
	                    	title={mission.title}
	                    	comments={mission.Comments}
	                    	missiontasks={mission.Missiontasks}
	                    	key={index}
	                    />
	                </div>
                );
            });
        }
        var noMissions = () => {
            if (userMissions.length === 0){
                return (
                    <p className="noQuestsText text-center">You have added no Missions</p>
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