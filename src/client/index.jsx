import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';

// NOTE: this is where we "import" our routes from our routes file
import routes from './routes';

// our entry point to our application! we render our application and "mount"
// it into the DOM
ReactDOM.render(
	<Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);
