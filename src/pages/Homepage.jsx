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
      <div id="starsIMG" data-stellar-background-ratio="0.3">


        <LandingNav />
        <div className="container clearfix" style={containerStyle} id="layoutContain">
          <div className="row">
            <div className="col-lg-12">
              <hr/>  
              <hr/>
            </div>
          </div>
        </div>
        <div className = "text-center" id="pageTitle">
          <h1>Welcome! Sign In To Continue.</h1>
        </div>
      </div>
    );
  }
}
