import React from "react";
import { Link } from "react-router";
import MissionMain from '../components/missionmain';
import QuestMain from '../components/questmain';

// import Footer from "../components/layout/Footer";
// import Nav from "../components/layout/Nav";





export default class Layout extends React.Component {
  
  render() {
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div>

       

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>Layout</h1>
              {this.props.children}

              <Link to="missionshome"> Missions Home </Link>
              <Link to="questshome"> Quests Home </Link>


            </div>
          </div>
        </div>
      </div>

    );
  }
}
