import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from 'react-bootstrap';

export default class CreateTask extends React.Component {
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
        if (task.length > 0) {
            this.refs.task.value = '';
            this.refs.dateTask.value = '';
        }

        const taskInput = { 
            task,
            dateTask
        };
        this.props.createTask(taskInput);
    }
    render() {
        // const { missions } = this.props; 

        // var renderMissionDropdown = () => {
        //     if (missions.length === 0){
        //         return (
        //             <div className="dropdown open" aria-labelledby="dropdownMenuLink">
        //                 <li className="dropdown-item">No Missions to Add Task To</li>
        //             </div>
        //         );
        //     }
        //     return missions.map((mission, index) => {
        //         return (
        //             <option value={mission.title} className="dropdown-item">{mission.title}</option>
        //         );
        //     });
        // }
        const { dropdownItem } = this.props
        var renderTaskForm = () => {
                return (
                    <div>
                        <form onSubmit={this.handleCreateTask.bind(this)}>
                            <input type="text" placeholder="Add a Task to your Mission" ref="task" />
                            <input type="date" placeholder="Set your Date of Achievement" ref="dateTask" />
                            <input type="hidden" value={dropdownItem} placeholder="Mission Name"/>
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