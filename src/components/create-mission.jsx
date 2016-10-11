import React, { Component, cloneElement } from 'react';

class Createmission extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }
    renderError() {
        if(!this.state.error) {
            return null;
        }
            return <div style={{color:'red'}}> { this.state.error } </div>;
        
    }
    handleCreate(event) {
        event.preventDefault();

        const description = this.refs.description.value;
        // const validateInput = this.validateInput(newMission);

        // if(validateInput) {
        //     this.setState({ error: validateInput });
        //     return;
        // }

        // this.setState({ error: null });

        if (description.length > 0) {
            this.refs.description.value = '';
        }

        this.props.createMiss(description);
    }
    validateInput(task) {
        if(!task) {
            return ("Please enter a task.");
        } else if(_.find(this.props.missions, mission => mission.task === task)) {
            return ("Duplicate task exists.");
        } else {
            return null;
        }
    }
    render() {
        return (
            <div>
                <h2>Form A New Mission!</h2>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <input type="text" placeholder="Enter Mission" ref="description" />
                    <input type="submit" placeholder="Add Mission" />
                    {this.renderError()}
                </form>
            </div>
        );
    }
}

export default Createmission;

