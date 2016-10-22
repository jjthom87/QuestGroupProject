import React, { Component } from 'react';
import MainNav from 'MainNav';

export default class Completed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <MainNav />
                    <div className='container' id="separator">   
            	       <p>Completed Missions and Quests</p>




























                    </div>
            </div>
        );
    }
}