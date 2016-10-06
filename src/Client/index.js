// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, hashHistory } from 'react-router';
// import App from 'components/app';


// // NOTE: this is where we "import" our routes from our routes file
// import routes from './routes';

// // our entry point to our application! we render our application and "mount"
// // it into the DOM
// ReactDOM.render(
// 	<Router history={hashHistory}> {routes}</Router>,
//   document.getElementById('app')
// );

// render(<App />, document.getElementById('app'));

// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Grab the proeprty associated with the Router
var Router = require('react-router').Router

// Grabs the Routes
var routes = require('./routes');

// Renders the contents according to the route page. 
ReactDOM.render(
	<Router>{routes}</Router>,
	document.getElementById('app')
)