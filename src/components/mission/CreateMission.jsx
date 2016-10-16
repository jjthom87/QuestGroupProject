import React, { Component } from 'react';
import CreateTask from 'CreateTask';

export default class CreateMission extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }
    renderError() {
        if(!this.state.error) {
            return null;
        }
            return <div style={{color:'red'}}> { this.state.error } </div>;
        
    }
    handleCreate(event) {
        event.preventDefault();

        const creds = {};
        const missionInput = this.refs.missionInput.value;
        const task1Input = this.refs.task1Input.value;
        const task2Input = this.refs.task2Input.value;
        const task3Input = this.refs.task3Input.value;
        const task4Input = this.refs.task4Input.value;
        const task5Input = this.refs.task5Input.value;
        const task6Input = this.refs.task6Input.value;
        const task7Input = this.refs.task7Input.value;
        const task8Input = this.refs.task8Input.value;
        const task9Input = this.refs.task9Input.value;
        const task10Input = this.refs.task10Input.value;

        if (missionInput.length > 0) {
            this.refs.missionInput.value = '';
            creds.missionInput = missionInput;
        }

        if (task1Input.length > 0) {
            this.refs.task1Input.value = '';
            creds.task1Input = task1Input;
        }

        if (task2Input.length > 0) {
            this.refs.task2.value = '';
            creds.task2Input = task2Input;
        }

        if (task3Input.length > 0) {
            this.refs.task3Input.value = '';
            creds.task3Input = task3Input;
        }

        if (task4Input.length > 0) {
            this.refs.task4Input.value = '';
            creds.task4Input = task4Input;
        }

        if (task5Input.length > 0) {
            this.refs.task5Input.value = '';
            creds.task5Input = task5Input;
        }

        if (task6Input.length > 0) {
            this.refs.task6Input.value = '';
            creds.task6Input = task6Input;
        }

        if (task7Input.length > 0) {
            this.refs.task7Input.value = '';
            creds.task7Input = task7Input;
        }

        if (task8Input.length > 0) {
            this.refs.task8Input.value = '';
            creds.task8Input = task8Input;
        }

        if (task9Input.length > 0) {
            this.refs.task9Input.value = '';
            creds.task9Input = task9Input;
        }

        if (task10Input.length > 0) {
            this.refs.task10Input.value = '';
            creds.task10Input = task10Input;
        }

        this.props.createMission(creds);
    }
    // validateInput(taskInput) {
    //     if(!taskInput) {
    //         return ("Please enter a task.");
    //     } else if(_.find(this.props.missions, mission => mission.taskInput === taskInput)) {
    //         return ("Duplicate task exists.");
    //     } else {
    //         return null;
    //     }
    // }
    render() {
        return (
            <div>
                <h2 className="missionTitle">Form A New Mission!</h2>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <input type="text" placeholder="Create Mission" ref="missionInput" />
                    <br></br>
                    <input type="text" placeholder="Task for Mission" ref="task1Input" />
                    <div>
                        <input type="text" placeholder="Task for Mission" ref="task2Input" />
                    </div>
                    <div>
                        <input type="text" placeholder="Task for Mission" ref="task3Input" />
                    </div>
                    <div>
                        <input type="text" placeholder="Task for Mission" ref="task4Input" />
                    </div>
                    <div>
                        <input type="text" placeholder="Task for Mission" ref="task5Input" />
                    </div>
                    <div>
                        <input type="text" placeholder="Task for Mission" ref="task6Input" />
                    </div>
                    <div>
                        <input type="text" placeholder="Task for Mission" ref="task7Input" />
                    </div>
                    <div>
                        <input type="text" placeholder="Task for Mission" ref="task8Input" />
                    </div>
                    <div>
                        <input type="text" placeholder="Task for Mission" ref="task9Input" />
                    </div>
                    <div>
                        <input type="text" placeholder="Task for Mission" ref="task10Input" />
                    </div>
                    <div>
                        <input type="submit" placeholder="Add Mission" />
                    </div>
                    {this.renderError()}
                </form>
            </div>
        );
    }
}
