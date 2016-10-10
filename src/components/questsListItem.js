import React from 'react';

export default class QuestsListItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            isTitle: false
        };
    }

    renderActionsSection() {
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
                <button onClick={this.onDeleteClick.bind(this)}> delete </button>
            </td>
        );
    }


    renderMilestoneSection() {
        const { milestone, isCompleted } = this.props;

        const milestoneStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        if(this.state.isEditing) {
            return(
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={milestone} ref="editInput" />
                    </form>
                </td>
            );
        }

        return (
            <td style={milestoneStyle}
                onClick={this.props.toggleMilestone.bind(this, milestone)}
            >
                {milestone}

            </td>
        );  

    }

    render() {
        return (
                <tr>
                    {this.renderMilestoneSection()}
                    {this.renderActionsSection()}
                </tr>
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
        this.props.saveMilestone(oldMilestone, newMilestone);
        this.setState({isEditing: false});
    }

    onDeleteClick(event) {

        event.preventDefault();

        const milestoneDelete=this.props.milestone;
        this.props.deleteMilestone(milestoneDelete);
    }

}
