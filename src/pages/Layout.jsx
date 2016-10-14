import React, { Component } from 'react';
import { Link, IndexLink } from "react-router";
import LandingNav from 'LandingNav';

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

            </div>
          </div>
        </div>
      </div>

    );
  }
}
