import React, { Component } from 'react';
import { Link, IndexLink } from "react-router";
import LandingNav from 'LandingNav';

// import Footer from "../components/layout/Footer";
// import Nav from "../components/layout/Nav";

export default class HomePage extends React.Component {
  render() {
    const containerStyle = {
      marginTop: "100px"
    };
    return (
      <div>
        <LandingNav/>
        <div className="container clearfix" style={containerStyle} id="layoutContain">
          <div className="row">
            <div className="col-lg-12">
              <hr/>  
              <hr/>
              <div className="collapse navbar-collapse main-nav" id="bubo-main-nav">
                <ul className="nav navbar-nav navbar-left" id="logonli">
                  <li>
                    <IndexLink to='/'>Home</IndexLink>
                  </li>
                  <li>
                    <Link to='/home'>User's Homepage</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
