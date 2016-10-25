import React, { Component } from 'react'; 

import FeedUserItem from 'FeedUserItem';

export default class FeedUserList extends React.Component {
    render() {
        const { users } = this.props;

        var renderUsers = () => {
            return users.map((user, index) => {
                return (
                	<div>
	                    <FeedUserItem
	                    	createdOn={user.createdOn}
	                    	username={user.username}
                            profileImage={user.profileImage}
	                    	name={user.name}
	                        id={user.id}
	                        key={index}
	                    />
	                </div>
                );
            });
        }
        var noUsers = () => {
            if (users.length === 0){
                return (
                    <p className="noQuestsText">No Users</p>
                );
            }
        }
        return (
            <div>
                {noUsers()}
                {renderUsers()}
            </div>
        );
    } 
}