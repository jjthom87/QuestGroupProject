import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from 'react-bootstrap';

export default class CreateMilestone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    handleCreateMilestone(event) {
        event.preventDefault();

        const milestone = this.refs.milestone.value;

        if (milestone.length > 0) {
            this.refs.milestone.value = '';
        } else {
            alert('Please Enter Milestone');
        }
        this.props.createMilestone(milestone);
    }
    render() {
        const { dropdownItem } = this.props
        var renderMilestoneForm = () => {
                return (
                    <div>
                        <form onSubmit={this.handleCreateMilestone.bind(this)}>
                            <input type="text" placeholder="Create milestone For Quest" ref="milestone" />
                            <input type="hidden" value={dropdownItem} placeholder="Quest Name"/>
                            <input type="submit" value="Add milestone"/>
                        </form>
                    </div>
                );
        }
        return (
            <div>
                {renderMilestoneForm()}
            </div>
        );
    } 
}