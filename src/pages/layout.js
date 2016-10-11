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
    console.log("layout.js component");
    return (
      <div>

       
        <header>
            <nav className="navbar-default navbar-fixed-top clearfix" id="mainNav">
              <div className="navbar-header">
                        <a href="" className="navbar-brand"><img src="#" alt="#" className="img-responsive"/></a>
                        <h1 id="siteName" className="navbar">Bubo</h1>
                    </div>
            </nav>
        </header>
        <div className="container clearfix" style={containerStyle} id="layoutContain">
          <div className="row">
            <div className="col-lg-12">
              
              <hr/>
              {this.props.children}

              <hr/>
              <Link to="missionshome"> Missions Home |</Link>
              <Link to="questshome"> Quests Home </Link>


            </div>
          </div>
        </div>
      </div>

    );
  }
}
