import React, { cloneElement } from 'react';
import MissionsList from './missions-list';
import Createmission from './create-mission';

// const missions = [
// {
//     task: 'Example Mission',
//     date: 'date',
//     isCompleted: false
// },
// {
//     task: 'Example Mission',
//     date: 'date',
//     isCompleted: false
// }
// ];

export default class MissionMain extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            missions: []
        };
    }

    // componentWillMount() {
    //     fetch('/missions/all')
    //         .then((response) => response.json())
    //         .then((json) => {
    //             this.setState({
    //                 items: json
    //             });
    //         })
    // }

    // MISSION (tasks CRUD):
    createTask(task) {
        const { missions } = this.state;
        
        const newMiss = {
            task
        }
        console.log(newMiss)
        fetch('/mission/create', {
            method: 'post',
            body: JSON.stringify(newMiss),
            headers: {
                'content-type': 'application/json'
            }
        }).then((response) => response.json())
            .then((results) => {
                this.setState({
                    missions: missions.concat(results)
                });
            });
        
        console.log(this.state.missions);
    }

    toggleTask(task) {
        const foundtask= _.find(this.state.missions, mission => mission.task === task);
        foundtask.isCompleted = !foundtask.isCompleted;
        this.setState({ missions: this.state.missions});
    }

    // toggleTask(taskId) {
    //     const { missions } = this.state;

    //     // find the first item in our state which has the ID we're looking for (itemId)
    //     const foundtask = missions.find((foundTask) => foundtask._id === taskId);

    //     // if we found an item w/ that id, we toggle its `isCompleted` property
    //     if (foundtask) {
    //         foundtask.isCompleted = !foundtask.isCompleted;

    //         fetch(`/api/task/${foundtask._id}`, {
    //             method: 'PUT',
    //             body: JSON.stringify(foundtask),
    //             headers: { 'content-type': 'application/json' }
    //         }).then((response) => response.json())
    //             .then((json) => {
    //                 // then we update our state with the updated items array. note that
    //                 // `item` has the item by reference, meaning that when we changed its
    //                 // isCompleted property, the array `items` was updated as well
    //                 this.setState({
    //                     missions: missions
    //                 });
    //             });
    //     }
    // }

    saveTask(oldTask, newTask, oldDate, newDate) {
        const foundtask=_.find(this.state.missions, mission=> mission.task ===oldTask);
        foundtask.task=newTask;
        foundtask.date=newDate;
        this.setState({missions: this.state.missions});
    }

    deleteTask(taskDelete) {
        const removeTask=_.remove(this.state.missions, mission=> mission.task ===taskDelete);
        this.setState({missions: this.state.missions});
    }

    render() {
        return (

            <div>
                <h1>Missions Home</h1>
                <Createmission
                    missions={this.props.missions}
                    createTask={this.createTask.bind(this)}
                />
                

                 {
                    cloneElement(this.props.children, {

                        missions: this.state.missions,
                        toggleTask: this.toggleTask.bind(this),
                        saveTask: this.saveTask.bind(this),
                        deleteTask: this.deleteTask.bind(this)
                     
                  })
                }
            </div>

        );
    }

}