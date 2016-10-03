import React from 'react';

export default class QuestsListItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
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


    renderMissionSection() {
        const { mission, isCompleted } = this.props;

        const missionStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        if(this.state.isEditing) {
            return(
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={mission} ref="editInput" />
                    </form>
                </td>
            );
        }

        return (
            <td style={missionStyle}
                onClick={this.props.toggleMission.bind(this, mission)}
            >
                {mission}

            </td>
        );  

    }

    render() {
        return (
                <tr>
                    {this.renderMissionSection()}
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

        const oldMission=this.props.mission;
        const newMission=this.refs.editInput.value;
        this.props.saveMission(oldMission, newMission);
        this.setState({isEditing: false});
    }

    onDeleteClick(event) {

        event.preventDefault();

        const missionDelete=this.props.mission;
        this.props.deleteMission(missionDelete);
    }

}
