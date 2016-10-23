import React, { Component } from 'react';
import UserSearchItem from 'UserSearchItem';

export default class UserSearchList extends React.Component {
    render() {
        const { users, id, createdAt, username, name } = this.props;

        var renderUsers = () => {
            return users.map((user, index) => {
                return (
                	<div className="panel panel-success qmboxCompleted">
	                    <UserSearchItem
	                    	createdAt={user.createdAt}
	                    	username={user.username}
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
                <p className="questsTitle">Users</p>
                {noUsers()}
                {renderUsers()}
            </div>
        );
    } 
}