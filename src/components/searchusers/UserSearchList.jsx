import React, { Component } from 'react';
import UserSearchItem from 'UserSearchItem';

export default class UserSearchList extends React.Component {
    render() {
        const { users, id, createdOn, username, name } = this.props;

        var renderUsers = () => {
            return users.map((user, index) => {
                return (
                	<div>
	                    <UserSearchItem
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
                    <p className="noQuestsText">No Users with that name</p>
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