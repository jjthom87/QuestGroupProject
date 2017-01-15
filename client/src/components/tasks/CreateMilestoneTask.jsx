import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from 'react-bootstrap';

export default class CreateMilestoneTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    // handleDropdownChange(e){
    //     this.setState({
    //         dropdownItem: e.target.value
    //     })
    // }
    handleCreateTask(event) {
        event.preventDefault();

        const task = this.refs.task.value;
        const dateTask = this.refs.dateTask.value;
        const timeTask = this.refs.timeTask.value;

        if (task.length > 0) {
            this.refs.task.value = '';
            this.refs.dateTask.value = '';
            this.refs.timeTask.value = '';
        } else {
            alert('Please Input Task');
        }

        const taskInput = { 
            task,
            dateTask,
            timeTask
        };
        this.props.createMilestoneTask(taskInput);
    }
    render() {
        const { dropdownItem } = this.props
        var renderTaskForm = () => {
                return (
                    <div>
                        <form onSubmit={this.handleCreateTask.bind(this)}>
                            <input type="text" placeholder="Add a Task to your Milestone" ref="task" />
                            <input type="date" placeholder="Set your Date of Achievement (Optional)" ref="dateTask" />
                            <input type="time" placeholder="Specify a Time (Optional)" ref="timeTask" />
                            <input type="hidden" value={dropdownItem} placeholder="Milestone Name"/>
                            <input type="submit" value="Add Task"/>
                        </form>
                    </div>
                );
        }
        return (
            <div>
                {renderTaskForm()}
            </div>
        );
    } 
}