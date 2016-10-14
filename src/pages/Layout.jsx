import React, { Component } from 'react';
import { Link, IndexLink } from "react-router";
var LandingNav = require('navbars/LandingNav.js');

// import Footer from "../components/layout/Footer";
// import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  
  render() {
    const containerStyle = {
      marginTop: "100px"
    };
    console.log("layout.js component");
    return (
      <div>


        <LandingNav/>
        
        <div className="container clearfix" style={containerStyle} id="layoutContain">
          <div className="row">
            <div className="col-lg-12">
              
              <hr/>
               
              <hr/>
              <IndexLink to='/'>Home</IndexLink>
              <Link to="/home"> Home </Link>

            </div>
          </div>
        </div>
      </div>

    );
  }
}
