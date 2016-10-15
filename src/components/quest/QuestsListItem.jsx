import React, { Component } from 'react';

export default class QuestsListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
        };
    }
    renderActionsSection() {
        const { id, deleteQuest } = this.props;
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={this.onSaveClick.bind(this)}> save </button>
                    <button onClick={this.onCancelClick.bind(this)}> cancel </button>   
                </td>
            );
        }
        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}> edit </button>
                <button onClick={() => deleteQuest(id)}> delete </button>
            </td>
        );
    }
    renderMilestoneSection() {
        const { description , isCompleted, date } = this.props;

        const milestoneStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };
        if(this.state.isEditing) {
            return(
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={description} ref="editInput" />
                        <input type="date" defaultValue={date} ref="editDate" />
                    </form>
                </td>
            );
        }
        return (
            <td style={milestoneStyle}
                onClick={this.props.toggleMilestone.bind(this, description)}
            >
                {description} {date}

            </td>
        );  
    }
    onEditClick() {
        this.setState({ isEditing: true });
    }
    onCancelClick() {
        this.setState({ isEditing: false});
    }
    onSaveClick(event) {

        event.preventDefault();

        const oldMilestone=this.props.milestone;
        const newMilestone=this.refs.editInput.value;
        const oldDate=this.props.date;
        const newDate=this.refs.editDate.value;

        this.props.saveMilestone(oldMilestone, newMilestone, oldDate, newDate);
        this.setState({isEditing: false});

    }
    render() {
        return (
            <tr>
                {this.renderMilestoneSection()}
                {this.renderActionsSection()}
            </tr>
        );
    }
}
