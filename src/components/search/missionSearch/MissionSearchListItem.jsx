import React, { Component } from 'react';

export default class MissionSearchListItem extends React.Component {

    renderTaskSection() {
        const { title, description , isCompleted, date } = this.props;

        return (
            <div>
                {title} {date}
                {description}
            </div>
        );  
    }
    render() {
        return (
            <div>
                {this.renderTaskSection()}
            </div>
        );
    }
}
