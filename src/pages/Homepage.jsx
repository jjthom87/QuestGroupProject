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
            </div>
          </div>
        </div>
        <div className = "text-center mainpageTitle">
          <h1>Welcome to Bubo. Please Login and Get Started</h1>
        </div>
      </div>
    );
  }
}
