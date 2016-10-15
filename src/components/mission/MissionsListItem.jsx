import React, { Component } from 'react';

export default class MissionsListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }
    renderActionsSection() {
        const { id, deleteMission } = this.props
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
                <button onClick={() => deleteMission(id)}> delete </button>
            </td>
        );
    }
    renderTaskSection() {
        const { description , isCompleted, date } = this.props;

        const missionsStyle = {
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
            <td style={missionsStyle}
                onClick={this.props.toggleTask.bind(this, description)}
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

        const oldTask=this.props.task;
        const newTask=this.refs.editInput.value;
        const oldDate=this.props.date;
        const newDate=this.refs.editDate.value;

        this.props.saveTask(oldTask, newTask, oldDate, newDate);
        this.setState({isEditing: false});

    }
    // onDeleteClick(event) {

    //     event.preventDefault();

    //     const taskDelete=this.props.task;
    //     this.props.deleteTask(taskDelete);
    // }
    render() {
        return (
                <tr>
                    {this.renderTaskSection()}
                    {this.renderActionsSection()}
                </tr>
        );
    }
}
