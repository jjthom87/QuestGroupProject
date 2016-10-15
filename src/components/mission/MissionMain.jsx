import React, { Component, cloneElement } from 'react';
var {Link, IndexLink} = require('react-router');
import UserHomePage from 'UserHomePage';
import CreateMission from 'CreateMission';

export default class MissionMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            missions: []
        };
    }
    createMission(description) {
        const { missions } = this.state;
        
        const newMiss = {
            description
        }
        fetch('/mission/create', {
            method: 'post',
            body: JSON.stringify(newMiss),
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
        }).then((response) => response.json())
            .then((results) => {
                this.setState({
                    missions: missions.concat(results)
                });
            });
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
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-1">
                        <button className="btn btn-warning"><Link to="/home">Back Home</Link></button>
                    </div>
                </div>
                <h1 id="pageTitle">Missions Home</h1>
                <CreateMission
                    missions={this.props.missions}
                    createMission={this.createMission.bind(this)}
                />
            </div>
         );
    }
}