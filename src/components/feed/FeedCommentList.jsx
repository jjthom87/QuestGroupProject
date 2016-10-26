import React, { Component } from 'react'; 

import FeedCommentItem from 'FeedCommentItem';

export default class FeedCommentList extends React.Component {
    render() {
        const { comments , allUsers } = this.props;
        
        var renderComments = () => {
            return comments.map((comment, index) => {
                return (
                	<div>
	                    <FeedCommentItem
	                    	createdOn={comment.createdOn}
	                    	usersName={comment.usersName}
                            commentee={comment.commentee}
	                    	missionName={comment.missionName}
	                    	questName={comment.questName}
	                        UserId={comment.UserId}
	                        allUsers={allUsers}
	                        key={index}
	                    />
	                </div>
                );
            });
        }
        var noComments = () => {
            if (comments.length === 0){
                return (
                    <p className="noQuestsText text-center">No Comments</p>
                );
            }
        }
        return (
            <div>
                {noComments()}
                {renderComments()}
            </div>
        );
    } 
}