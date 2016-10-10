import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import MissionMain from './missionmain';
import QuestMain from './questmain';



const missions = [
{
    task: 'Example Mission',
    isCompleted: false
},
{
    task: 'Example Mission',
    isCompleted: false
}
];

const quests = [
{
    task: 'Example Quest',
    isCompleted: false
}]

export default class App extends React.Component {
     
    constructor(props) {
        super(props);

        this.state = {
            missions,
            quests
        };
    }

    render() {

        return (
            <div>
                <Link to="missionshome"> Missions Home </Link>

                <Link to="questshome"> Quests Home </Link>

                              {this.props.children}


                

                <p>(Nav-bar here)</p>
                <a href="/logout"><button type = "button">Logout</button></a>
                <a href="/home"><button type = "button">Home</button></a>

            </div>
        );
    }


    


    

};
