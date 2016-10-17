import React, { Component } from 'react';

export default class MissionDropdown extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            dropdownItem: ''
        };
    }
    handleChange(e){
    	this.setState({
    		dropdownItem: e.target.value
    	})
    }
    render() {
        const { missions } = this.props;

        var renderMissionDropdown = () => {
        	if (missions.length === 0){
                return (
                    <div className="dropdown open" aria-labelledby="dropdownMenuLink">
                        <a className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Missions</a>
                        <div className="dropdown-menu">
                            <li className="dropdown-item">No Missions to Add Task To</li>
                        </div>
                    </div>
                );
            }
            return missions.map((mission, index) => {
                return (
                	<div>
	                   	<option value={mission.title} className="dropdown-item">{mission.title}</option>
	                </div>
                );
            });
        }
        return (
            <div>
                {renderMissionDropdown()}
            </div>
        );
    } 
}