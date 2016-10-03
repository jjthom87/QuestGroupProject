import React from 'react';

export default class Createquest extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="what missions?" ref="createInput"/>
                <button> create mission </button>
                {this.renderError()}
            </form>
        );
    }

    renderError() {
        if(!this.state.error) {
            return null;
        }
            return <div style={{color:'red'}}> { this.state.error } </div>;
        
    }

    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const missions = createInput.value;
        const validateInput = this.validateInput(missions);

        if(validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createMission(missions);
        this.refs.createInput.value = '';
    }

    validateInput(mission) {
        if(!mission) {
            return ("Please enter a missions.");
        } else if(_.find(this.props.quests, quest => quest.mission === mission)) {
            return ("Duplicate missions exists.");
        } else {
            return null;
        }
    }
}
